import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import LoggedInUserCard from "../components/LoggedInUserCard";
import { Container } from "@material-ui/core";
import io from "socket.io-client";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ChatContainer from "../components/ChatContainer";
import UsersContainer from "../components/UsersContainer";
import chypeTransInverseLogo from "../assets/images/new_inverse_trans.png";
import MainFooter from "../components/MainFooter";
export const socket = io();

export default function MainPage() {
  let history = useHistory();
  const userReduxState = useSelector((state) => state.user);
  useEffect(() => {
    if (!userReduxState.loggedIn) {
      history.push("/signin");
    }
    document.body.style.backgroundColor = "#d7d8f1";
  }, []);

  return (
    <Fragment>
      <Container
        disableGutters
        style={{
          display: "flex",
          flexDirection: "column",
          height: "98vh",
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
            <Grid item container lg={6} md={12} alignContent="center">
              <img
                src={chypeTransInverseLogo}
                alt="logoImg"
                height="30px"
                style={{ margin: 3 }}
              />
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
            position: "relative",
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
            minHeight: 10,
          }}
        >
          {/*Bottom CAP*/}
        </div>

        <MainFooter />
      </Container>
    </Fragment>
  );
}
