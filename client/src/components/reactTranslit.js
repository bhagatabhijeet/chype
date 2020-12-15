import React, { useEffect, useRef, useState } from "react";
import getInputSelection, { setCaretPosition } from "../assets/utils";
import getCaretCoordinates from "textarea-caret";
import "./styles/styles.module.css";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';



const KEY_UP = 38;
const KEY_DOWN = 40;
const KEY_RETURN = 13;
const KEY_ENTER = 14;
const KEY_ESCAPE = 27;
const KEY_TAB = 9;
const KEY_SPACE = 32;

const OPTION_LIST_Y_OFFSET = 10;
const OPTION_LIST_MIN_WIDTH = 100;

(function () {
    // We'll copy the properties below into the mirror div.
    // Note that some browsers, such as Firefox, do not concatenate properties
    // into their shorthand (e.g. padding-top, padding-bottom etc. -> padding),
    // so we have to list every single property explicitly.
    let properties = [
        "direction", // RTL support
        "boxSizing",
        "width", // on Chrome and IE, exclude the scrollbar, so the mirror div wraps exactly as the textarea does
        "height",
        "overflowX",
        "overflowY", // copy the scrollbar for IE

        "borderTopWidth",
        "borderRightWidth",
        "borderBottomWidth",
        "borderLeftWidth",
        "borderStyle",

        "paddingTop",
        "paddingRight",
        "paddingBottom",
        "paddingLeft",

        // https://developer.mozilla.org/en-US/docs/Web/CSS/font
        "fontStyle",
        "fontVariant",
        "fontWeight",
        "fontStretch",
        "fontSize",
        "fontSizeAdjust",
        "lineHeight",
        "fontFamily",

        "textAlign",
        "textTransform",
        "textIndent",
        "textDecoration", // might not make a difference, but better be safe

        "letterSpacing",
        "wordSpacing",

        "tabSize",
        "MozTabSize",
    ];

    let isBrowser = typeof window !== "undefined";
    let isFirefox = isBrowser && window.mozInnerScreenX != null;

    function getCaretCoordinates(element, position, options) {
        if (!isBrowser) {
            throw new Error(
                "textarea-caret-position#getCaretCoordinates should only be called in a browser",
            );
        }

        let debug = (options && options.debug) || false;
        if (debug) {
            let el = document.querySelector(
                "#input-textarea-caret-position-mirror-div",
            );
            if (el) el.parentNode.removeChild(el);
        }

        // The mirror div will replicate the textarea's style
        let div = document.createElement("div");
        div.id = "input-textarea-caret-position-mirror-div";
        document.body.appendChild(div);

        let style = div.style;
        let computed = window.getComputedStyle
            ? window.getComputedStyle(element)
            : element.currentStyle; // currentStyle for IE < 9
        let isInput = element.nodeName === "INPUT";

        // Default textarea styles
        style.whiteSpace = "pre-wrap";
        if (!isInput) style.wordWrap = "break-word"; // only for textarea-s

        // Position off-screen
        style.position = "absolute"; // required to return coordinates properly
        if (!debug) style.visibility = "hidden"; // not 'display: none' because we want rendering

        // Transfer the element's properties to the div
        properties.forEach(function (prop) {
            if (isInput && prop === "lineHeight") {
                // Special case for <input>s because text is rendered centered and line height may be != height
                if (computed.boxSizing === "border-box") {
                    let height = parseInt(computed.height);
                    let outerHeight =
                        parseInt(computed.paddingTop) +
                        parseInt(computed.paddingBottom) +
                        parseInt(computed.borderTopWidth) +
                        parseInt(computed.borderBottomWidth);
                    let targetHeight = outerHeight + parseInt(computed.lineHeight);
                    if (height > targetHeight) {
                        style.lineHeight = height - outerHeight + "px";
                    } else if (height === targetHeight) {
                        style.lineHeight = computed.lineHeight;
                    } else {
                        style.lineHeight = 0;
                    }
                } else {
                    style.lineHeight = computed.height;
                }
            } else {
                style[prop] = computed[prop];
            }
        });

        if (isFirefox) {
            // Firefox lies about the overflow property for textareas: https://bugzilla.mozilla.org/show_bug.cgi?id=984275
            if (element.scrollHeight > parseInt(computed.height))
                style.overflowY = "scroll";
        } else {
            style.overflow = "hidden"; // for Chrome to not render a scrollbar; IE keeps overflowY = 'scroll'
        }

        div.textContent = element.value.substring(0, position);
        // The second special handling for input type="text" vs textarea:
        // spaces need to be replaced with non-breaking spaces - http://stackoverflow.com/a/13402035/1269037
        if (isInput) div.textContent = div.textContent.replace(/\s/g, "\u00a0");

        let span = document.createElement("span");
        // Wrapping must be replicated *exactly*, including when a long word gets
        // onto the next line, with whitespace at the end of the line before (#7).
        // The  *only* reliable way to do that is to copy the *entire* rest of the
        // textarea's content into the <span> created at the caret position.
        // For inputs, just '.' would be enough, but no need to bother.
        span.textContent = element.value.substring(position) || "."; // || because a completely empty faux span doesn't render at all
        div.appendChild(span);

        let coordinates = {
            top: span.offsetTop + parseInt(computed["borderTopWidth"]),
            left: span.offsetLeft + parseInt(computed["borderLeftWidth"]),
            height: parseInt(computed["lineHeight"]),
        };

        if (debug) {
            span.style.backgroundColor = "#aaa";
        } else {
            document.body.removeChild(div);
        }

        return coordinates;
    }

    if (typeof module != "undefined" && typeof module.exports != "undefined") {
        module.exports = getCaretCoordinates;
    } else if (isBrowser) {
        window.getCaretCoordinates = getCaretCoordinates;
    }
})();

export const ReactTransliterate = ({
                                       Component = "input",
                                       onBlur = () => {},
                                       disabled = false,
                                       lang = "hi",
                                       offsetX = 20,
                                       offsetY = 20,
                                       onChange,
                                       value,
                                       onKeyDown = () => {},
                                       containerClassName = "",
                                       containerStyles = {},
                                       activeItemStyles = {},
                                       maxOptions = 6,
                                       ...rest
                                   }) => {
    const [options, setOptions] = useState([]);
    const [left, setLeft] = useState(0);
    const [top, setTop] = useState(0);
    const [selection, setSelection] = useState(0);
    const [matchStart, setMatchStart] = useState(-1);
    const [matchEnd, setMatchEnd] = useState(-1);
    const inputRef = useRef(null);

    const getSuggestions = async (lastWord) => {
        // fetch suggestion from api
        // const url = `https://www.google.com/inputtools/request?ime=transliteration_en_${lang}&num=5&cp=0&cs=0&ie=utf-8&oe=utf-8&app=jsapi&text=${lastWord}`;
        const url = `https://inputtools.google.com/request?text=${lastWord}&itc=${lang}-t-i0-und&num=13&cp=0&cs=1&ie=utf-8&oe=utf-8&app=demopage`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (data && data[0] === "SUCCESS") {
                let found = data[1][0][1];
                found = found.slice(0, maxOptions);
                setOptions(found);
            }
        } catch (e) {
            // catch error
            console.error("There was an error with transliteration", e);
        }
    };

    const handleChange = (e) => {
        const value = e.target.value;

        // bubble up event to the parent component
        onChange(e);

        // get the current index of the cursor
        const caret = getInputSelection(e.target).end;
        const input = inputRef.current;
        const caretPos = getCaretCoordinates(input, caret);

        // search for the last occurence of the space character from
        // the cursor
        const indexOfLastSpace =
            value.lastIndexOf(" ", caret - 1) < value.lastIndexOf("\n", caret - 1)
                ? value.lastIndexOf("\n", caret - 1)
                : value.lastIndexOf(" ", caret - 1);

        // first character of the currently being typed word is
        // one character after the space character
        // index of last character is one before the current position
        // of the caret
        setMatchStart(indexOfLastSpace + 1);
        setMatchEnd(caret - 1);

        // currentWord is the word that is being typed
        const currentWord = value.slice(indexOfLastSpace + 1, caret);
        if (currentWord) {
            // make an api call to fetch suggestions
            getSuggestions(currentWord);

            const rect = input.getBoundingClientRect();

            // get the position of the top left corner of the suggestion box
            // and save it to state
            const top = caretPos.top + input.offsetTop;
            const left = Math.min(
                caretPos.left + input.offsetLeft - OPTION_LIST_Y_OFFSET,
                input.offsetLeft + rect.width - OPTION_LIST_MIN_WIDTH,
            );

            setTop(top);
            setLeft(left);
        } else {
            reset();
        }
    };

    const handleKeyDown = (event) => {
        const helperVisible = options.length > 0;

        if (helperVisible) {
            switch (event.keyCode) {
                case KEY_ESCAPE:
                    event.preventDefault();
                    reset();
                    break;
                case KEY_UP:
                    event.preventDefault();
                    setSelection((options.length + selection - 1) % options.length);
                    break;
                case KEY_DOWN:
                case KEY_TAB:
                    event.preventDefault();
                    setSelection((selection + 1) % options.length);
                    break;
                case KEY_ENTER:
                case KEY_RETURN:
                case KEY_SPACE:
                    event.preventDefault();
                    handleSelection(selection);
                    break;
                default:
                    onKeyDown(event);
                    break;
            }
        } else {
            onKeyDown(event);
        }
    };

    const handleResize = () => {
        // TODO implement the resize function to resize
        // the helper on screen size change
    };

    const handleSelection = (index) => {
        const currentString = value;
        // create a new string with the currently typed word
        // replaced with the word in transliterated language
        const newValue =
            currentString.substring(0, matchStart) +
            options[index] +
            " " +
            currentString.substring(matchEnd + 1, currentString.length);

        // set the position of the caret (cursor) one character after the
        // the position of the new word
        setTimeout(() => {
            setCaretPosition(
                inputRef.current,
                matchStart + options[index].length + 1,
            );
        }, 1);

        // bubble up event to the parent component
        const e = { target: { value: newValue } };
        onChange(e);
        reset();
    };

    const reset = () => {
        // reset the component
        setSelection(0);
        setOptions([]);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div
            // position relative is required to show the component
            // in the correct position
            style={{
                ...containerStyles,
                position: "relative",
            }}
            className={containerClassName}
        >
            <Component

                onChange={handleChange}
                onKeyDown={handleKeyDown}
                ref={inputRef}
                value={value}

            />
            {options.length > 0 ? (
                <List
                    style={{
                        left: `${left + offsetX }px`,
                        top: `${top + offsetY}px`,
                        position: "absolute",
                        backgroundClip: "padding-box",
                        background: "#fff",
                        border: "1px solid rgba(0, 0, 0, 0.15)",
                        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.175)",
                        display: "block",
                        fontSize: "14px",
                        padding:" 1px",
                        // textAlign: "left",
                        // zIndex: "20000",
                        width: "100%",
                    }}
                >
                    {options.map((item, index) => (
                        <ListItem
                            style={index === selection ? {background: "#65c3d7"} : {}}
                            onMouseEnter={() => {
                                setSelection(index);
                            }}
                            onClick={() => handleSelection(index)}
                            key={item}
                        >
                            {item}
                        </ListItem>
                    ))}
                </List>
            ): null}
        </div>
    );
};
