import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CustomNavbar from "../components/Navbar";
import LoggedInUserCard from "../components/LoggedInUserCard";
import { Container } from "@material-ui/core";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { ReactTransliterate } from "../components/reactTranslit";
import { useParams, Redirect } from "react-router-dom";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Input from "@material-ui/core/Input";
import { languages } from "../assets/languages";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ChatTopNav from "../components/ChatTopNav";
import UsersBox from "../components/UsersBox";
import ChatContainer from "../components/ChatContainer";
import UsersContainer from "../components/UsersContainer";
import CssBaseline from "@material-ui/core/CssBaseline";
import chypeTransInverseLogo from "../assets/images/new_inverse_trans.png";
// import "../assets/styles/mainpage.css"

const socket = io();
socket.on("connect", function () {
  // const sessionID = socketConnection.socket.sessionid;
  console.log(socket.id);
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // textAlign:"center"
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function MainPage() {
  const classes = useStyles();
  // const params = useParams();
  let history = useHistory();
  const userReduxState = useSelector((state) => state.user);

  const [userData, setUserData] = useState({ user: "abhi", message: "" });
  const [friendData, setFriendData] = useState({ friend: "son" });
  const [roomData, setRoomData] = useState({ room: "" });
  const [chat, setChat] = useState([]);
  const [lang, setLang] = useState([]);
  const [text, setText] = useState("");
  //can use props.useParams to get params form url, or props.history
  // console.log("PARAMS",params);
  useEffect(() => {
    // console.log("PARAMS",params);
    if (!userReduxState.loggedIn) {
      console.log("going to signin");
      history.push("/signin");
    }
    document.body.style.backgroundColor="#d7d8f1";
  }, []);

  const onTextChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const onMessageSubmit = (e) => {
    e.preventDefault();
    const { user, message } = userData;
    const { friend } = friendData;
    const room = [user, friend].sort().join("");
    console.log(room);
    console.log("inside of on submit", chat);
    console.log(friend);
    setUserData({ user, message: "" });
  };

  const renderChat = () => {
    return chat.map(({ user, message }, index) => (
      <div key={index}>
        <h3>
          {user}: <span>{message}</span>
        </h3>
      </div>
    ));
  };

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
  const handleChange = (event) => {
    setLang(event.target.value);
  };
  return (
    <>
      {/* <CssBaseline /> */}
      {/* <div className={classes.root}> */}
      {/* <ChatTopNav /> */}

      <Container
        disableGutters
        style={{
          display: "flex",
          flexDirection: "column",
          height: "80vh",
          marginTop: 10,
          marginBottom: 10,
          alignItems: "center",
        }}
      >
        {/*TOP CAP */}
        <div
          style={{
            marginBottom: 0,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            backgroundColor: "black",
            width: "96%",
          }}
        >
          <Grid
            container
            style={{
              height: 'auto',
              display: "flex",
              flexDirection: "row",
              backgroundColor: "transparent",
              justifyContent: "center",
              flexWrap:'wrap',
              alignItems:'center'
            }}
          >
            <Grid item lg={6} md={12} alignContent='center' justify="center">
              <img src={chypeTransInverseLogo} alt="logoImg" height="40px" />
            </Grid>
            <Grid
              item
              lg={6}
              md={12}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",                
                height: '100%'
              }}
            >
              <LoggedInUserCard />
            </Grid>
            
          </Grid>
        </div>
        <Container
          disableGutters
          style={{
            display: "flex",
            flexDirection: "row",
            height: "98%",
            justifyContent: "center",
            // marginTop: 10,
            // marginBottom: 10,
          }}
        >
          <UsersContainer />

          {/* <div style={{width:'20%'}}>
          
              <UsersBox />
        </div> */}
          {/* <Grid container spacing={4} style={{height:'90vh'}}> */}
          {/* <Grid item xs={2} style={{backgroundColor:'red',width:'100%'}}> */}
          {/* <Paper style={{ width: "100%", position: "relative" }}> */}
          {/* <LoggedInUserCard /> */}
          {/* </Paper> */}
          {/* </Grid> */}
          {/* </Grid> */}
          <ChatContainer />
          {/* <Grid container item xs={8} style={{backgroundColor:'green'}}>
         
            <div className="card">
              <form onSubmit={onMessageSubmit}>
                <h1> Messenger </h1>
                <div className="name-field">
                  <TextField
                    name="user"
                    onChange={(e) => {
                      onTextChange(e);
                      console.log(userData);
                    }}
                    value={userData.user}
                    label="Name"
                  />
                </div>
                <div className="name-field">
                  <TextField
                    name="friend"
                    onChange={(e) =>
                      setFriendData({ ...friendData, friend: e.target.value })
                    }
                    value={friendData.friend}
                    label="Friend"
                  />
                </div>
                <div className="name-field">
                  <TextField
                    name="room"
                    // onChange = {e => onRoomChange(e)}
                    value={roomData.room}
                    label="Room"
                  />
                </div>
                <div>
                  <ReactTransliterate
                    margin="dense"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    lang={lang}
                    placeholder="Start typing here..."
                  />

                  <FormControl>
                    <Select
                      displayEmpty
                      onChange={handleChange}
                      value={lang}
                      input={<Input />}
                      MenuProps={MenuProps}
                      inputProps={{ "aria-label": "Without label" }}
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
                </div>

                <button type={"submit"}>Send Message</button>
              </form>
            </div>

            <div className="render-chat">
              <h1>Chat Log</h1>
              <div key={2000}>
                <h3>
                  Son: <span>first test message</span>
                </h3>
              </div>
              {renderChat()}
            </div>
            <div>Lorem ipsum dolor sit amet consectetur</div>
            <div
              style={{
                position: "fixed",
                width: "100%",
                height: 100,
                top: "90vh",
                backgroundColor: "black",
                color: "white",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <form onSubmit={onMessageSubmit}>
                <div className="name-field">
                  <ReactTransliterate
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    lang={lang}
                    placeholder="Start typing here..."
                    containerStyles={{
                      width: "300px",
                    }}
                  />
                </div>

                <button type={"submit"}>Send Message</button>
              </form>
            </div>
        </Grid> */}
        </Container>
        <div
          style={{
            marginTop: 0,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            backgroundColor: "black",
            width: "96%",
          }}
        >
          Bottom CAP
        </div>
      <div style={{ marginTop: 20 }}>This is a footer div</div>
      </Container>
    </>
  );
}
