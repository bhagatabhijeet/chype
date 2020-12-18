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

export default function ChatContainer() {
  const [lang, setLang] = useState([]);
  const [text, setText] = useState("");

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
  const handleChange = (event) => {
    setLang(event.target.value);
  };

  return (
    <Box
      style={{
        position: "relative",
        //   top: 100,
        height: "100%",
        width: "78%",
        // left:'20%',

          display: "flex",
          flexDirection: "column",

        // overflowY: "auto",
        boxSizing: "border-box",
        padding: 10,
        backgroundColor: "yellow",
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
              <form onSubmit={()=>{}} style={{width:'100%',display:'flex',flexDirection:'row',justifyContent:'center',position:'relative'}}>
                {/* <div style={{display:'inline-block',width:'80%'}}> */}
                  <ReactTransliterate
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    // lang={lang}
                    placeholder="Start typing here..."
                    containerStyles={{
                      width: "95%"
                    }}
                  />
                {/* </div> */}
                <Button
        variant="contained"
        color="primary"
        // className={classes.button}
        endIcon={<SendIcon/>}
        type="submit"
      >
        Send
      </Button>
                {/* <button type={"submit"}>Send Message</button> */}
              </form>
            {/* </div> */}
    </Box>
  );
}
