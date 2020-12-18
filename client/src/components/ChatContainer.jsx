import { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { Grid, Box } from "@material-ui/core";
import SearchedUserCard from "./SearchedUserCard";
import { ReactTransliterate } from "./reactTranslit";
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import SendIcon from '@material-ui/icons/Send';
import DivBar from "./divBar/DivBar";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import { languages } from "../assets/languages";
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import SpeechToText from "speech-to-text";
import {useSelector} from "react-redux";
import axios from "axios";

export default function ChatContainer() {
    const [lang, setLang] = useState([]);
    const [text, setText] = useState("");
    const [listening,setListening] = useState(false);
    const ReduxUserState = useSelector(state=>state.user);

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    // const onMessageSubmit = (e) => {
    //   e.preventDefault();
    //   const { user, message } = userData;
    //   const { friend } = friendData;
    //   const room = [user, friend].sort().join("");
    //   console.log(room);
    //   console.log("inside of on submit", chat);
    //   console.log(friend);
    //   setUserData({ user, message: "" });
    // };
    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;

        axios.patch(encodeURI(`/api/user/${ReduxUserState.id}`), {
            language: selectedLanguage
        }, {header: {'authorization': `${ReduxUserState.token}`}});

        setLang(selectedLanguage);
    };

    const handleSpeech = ()=>{
        setListening(!listening)
        if(listening){
            SpeechToText.startListening();
        }
        else{
            SpeechToText.stopListening();
        }

    }

    return (
        <Box
            style={{
                position: "relative",
                //   top: 100,
                height: "100%",
                width: "68%",
                // left:'20%',

                display: "flex",
                flexDirection: "column",

                // overflowY: "auto",
                boxSizing: "border-box",
                padding: 10,
                backgroundColor: "#ebecee",
            }}
        >
            <div id="chatContents" style={{ overflowY: "scroll",
                boxSizing: "border-box",height:'90%',width:'100%',marginBottom:20}}
            >
                {/* <DivBar text="Hello"/> */}

                <div>Hello There</div>
                <div>Hello There</div>
                <div>Hello There</div>
                <div>Hello There</div>
                <div>Hello There</div>
                <div>Hello There</div>
                <div>Hello There</div>
                <div>Hello There</div>
                <div>Hello There</div>
                <div>Hello There</div>
                <div>Hello There</div>
                <div>Hello There</div>
                <div>Hello There</div>
                <div>Hello There</div>
                <div>Hello There</div>
                <div>Hello There</div>
                <div>Hello There</div>
                <div>Hello There</div>
                <div>Hello There</div>
                <div>Hello There</div>
                <div>Hello There</div>
                <div>Hello There</div>
                <div>Hello There</div>
                <div>Hello There</div>
                <div>Hello There</div>
                <div>Hello There</div>
                <div>Hello There</div>
                <div>Hello There</div>
                <div>Hello There</div>
                <div>Hello There</div>
                <div>Hello There</div>
            </div>
            {/* <div
              style={{
                position: "relative",
                width: "100%",
                height: 100,
                top: "90%",
                backgroundColor: "black",
                color: "white",
                display: "flex",
                flexDirection: "row",
              }}
            > */}
            <div>
                <FormControl>
                    <Select
                        displayEmpty
                        onChange={handleLanguageChange}
                        value={lang}
                        input={<Input />}
                        MenuProps={MenuProps}
                        inputProps={{ "aria-label": "Without label" }}
                        style={{marginBottom:5}}
                    >
                        <MenuItem disabled value="">
                            <em>Language</em>
                        </MenuItem>
                        {languages.map((language) => (
                            <MenuItem key={language.label} value={language.value}>
                                {language.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <span style={{fontSize:10,fontStyle:'italic'}}>{500-text.length} Characters Left</span>
                <form onSubmit={()=>{}} style={{width:'100%',display:'flex',flexDirection:'row',justifyContent:'center',position:'relative',fontFamily:'inherit'}}>
                    {/**Talk Control */}
                    <IconButton
                        size='small'
                        disabled
                        onClick={handleSpeech}
                    >
                        <KeyboardVoiceIcon />
                        Talk
                    </IconButton>
                    {/*Talk Control End*/}
                    {/* <div style={{display:'inline-block',width:'80%'}}> */}
                    <ReactTransliterate
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        lang={lang}
                        placeholder="Start typing here..."
                        containerStyles={{
                            width: "95%"
                        }}
                    />
                    {/* </div> */}
                    <Button
                        variant="contained"
                        className="btn-black-white"
                        endIcon={<SendIcon/>}
                        type="submit"
                        style={{maxWidth: '80px', maxHeight: '40px', minWidth: '80px', minHeight: '40px'}}
                    >
                        Send
                    </Button>
                    {/* <button type={"submit"}>Send Message</button> */}
                </form>
            </div>
            {/* </div> */}
        </Box>
    );
}
