import React, { useState } from "react";
import chypeTransInverseLogo from "../assets/images/new_inverse_trans.png";
import chypeTransLogo from "../assets/images/new_trans.png";
import FunAnim from "../assets/images/fun_animation.gif";
import Button from "@material-ui/core/Button";
import "../assets/styles/common.css";
// import Deck from "../components/animated/Deck";

import AppBarMain from "../components/AppBarMain";

import {
  Typography,
  Grid,
  Avatar,
  Divider,
  Box,
  Link,
} from "@material-ui/core";
import HomePageFooter from "../components/HomePageFooter";
import { makeStyles } from "@material-ui/core/styles";
import {
  useSpring,
  animated,
  config,
  useTransition,
  Spring,
} from "react-spring";
import {isLoggedIn} from "../Utils/AuthenticationHelpers";
import {Redirect} from "react-router-dom";
import {useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
  divider: {
    // Theme Color, or use css color in quote
    backgroundColor: "#dff3fc",
  },
  photoLink: {
    borderRadius: "50%",
  },
}));

export default function HomePage() {
  const classes = useStyles();
  const userReduxState = useSelector(state=>state.user);

  if (userReduxState.loggedIn) {
    return <Redirect to="/main"/>;
  }

  return (
      <>
        <AppBarMain signup signin />


        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item xs={12} spacing={0}>
            <Animdiv val="Hello there!" />
            <Typography variant="h4" align="center" component="h4">
              Welcome to Chype!
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button className="btn-black-white" href="/signup">
              I want to be a 'Chyper'
            </Button>
          </Grid>
          <Grid item>
            <Typography variant="h4" align="center" component="h4"></Typography>
          </Grid>
        </Grid>
        <HomePageFooter />

      </>
  );
}

function Animdiv(props) {
  const springprops = useSpring({
    color: "#2ba2ff",
    from: { color: "#ff2187" },
    config: { ...config.gentle, duration: 3000 },
    textAlign: "center",
  });
  return <animated.h3 style={springprops}>{props.val}</animated.h3>;
}

// function ShowY(){
//   const [show, set] = useState(false)
//   const transitions = useTransition(show, null, {
//   from: { opacity: 0 },
//   enter: { opacity: 1 },
//   leave: { opacity: 0 },
//   })
//   return transitions.map(({ item, key, props }) =>
//   item && <animated.div key={key} style={props}>✌️</animated.div>
//   )
// }
