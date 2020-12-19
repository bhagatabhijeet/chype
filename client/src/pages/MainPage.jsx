import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import LoggedInUserCard from "../components/LoggedInUserCard";
import { Container } from "@material-ui/core";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ChatContainer from "../components/ChatContainer";
import UsersContainer from "../components/UsersContainer";
import chypeTransInverseLogo from "../assets/images/new_inverse_trans.png";
import MainFooter from "../components/MainFooter";
export const socket = io();
socket.on("connect", function () {
    // const sessionID = socketConnection.socket.sessionid;
    // console.log(socket.id);
    const localUser=JSON.parse(sessionStorage.getItem("persist:root"));
    // console.log("SOC",JSON.parse(localUser.user).id);
    socket.emit("USER_SOCKET_ID",{
      id:JSON.parse(localUser.user).id,
      socketId:socket.id
    })
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

    let history = useHistory();
    const userReduxState = useSelector((state) => state.user);

    // const [userData, setUserData] = useState({ user: "abhi", message: "" });
    // const [friendData, setFriendData] = useState({ friend: "son" });
    // const [roomData, setRoomData] = useState({ room: "" });
    // const [chat, setChat] = useState([]);
    // const [lang, setLang] = useState([]);
    // const [text, setText] = useState("");
    //can use props.useParams to get params form url, or props.history
    // console.log("PARAMS",params);
    useEffect(() => {
        // console.log("PARAMS",params);
        if (!userReduxState.loggedIn) {
            console.log("going to signin");
            history.push("/signin");
        }
        document.body.style.backgroundColor = "#d7d8f1";
    }, []);

    // const onTextChange = (e) => {
    //   setUserData({ ...userData, [e.target.name]: e.target.value });
    // };

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

    // const renderChat = () => {
    //   return chat.map(({ user, message }, index) => (
    //     <div key={index}>
    //       <h3>
    //         {user}: <span>{message}</span>
    //       </h3>
    //     </div>
    //   ));
    // };

    return (
        <Fragment>
            <Container
                disableGutters
                style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "86vh",
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
                        backgroundColor: "#1e1e1e",
                        width: "96%",
                    }}
                >
                    <Grid
                        container
                        style={{
                            height: "auto",
                            display: "flex",
                            flexDirection: "row",
                            backgroundColor: "transparent",
                            justifyContent: "center",
                            flexWrap: "wrap",
                            alignItems: "center",
                        }}
                    >
                        <Grid item container lg={6} md={12}  alignContent="center" >
                            <img src={chypeTransInverseLogo} alt="logoImg" height="30px" style={{margin:3}}/>
                        </Grid>
                        <Grid
                            item
                            lg={6}
                            md={12}
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-end",
                                height: "100%",
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
                    }}
                >
                    <UsersContainer />

                    <ChatContainer />
                </Container>
                <div
                    style={{
                        marginTop: 0,
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        backgroundColor: "#1e1e1e",
                        width: "96%",
                        minHeight:10
                    }}
                >
                    {/*Bottom CAP*/}
                </div>

                <MainFooter/>
            </Container>
            {/* <Container> */}
            {/* </Container> */}
        </Fragment>
    );
}
