import React, { useState } from "react";
import chypeTransInverseLogo from "../assets/images/new_inverse_trans.png";
import chypeTransLogo from "../assets/images/new_trans.png";
import FunAnim from "../assets/images/fun_animation.gif";
// import y from "../assets/images/y.png";
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
const { Container } = require("@material-ui/core");

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

  return (
    <>
      <Grid
        container
        style={{
          minHeight: "30px",
          backgroundColor: "#1e1e1e",
          color: "#d0effc",
          fontFamily: "Roboto",
          marginBottom: "50px",
        }}
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <img src={chypeTransInverseLogo} alt="logoImg" height="60px" />
        </Grid>
        <Grid item></Grid>
      </Grid>
      <Container>
        <Grid>
          <Grid item>
            <Typography variant="h4" align="center" component="h4">
              <Animdiv val="Hello there!" />
              Welcome to Chype!           
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h4" align="center" component="h4">
              {/* <img src={FunAnim} alt="funanim" /> */}
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <HomePageFooter />
    </>
  );
}

function Animdiv(props) {
  const springprops = useSpring({
    color: "#2ba2ff",
    from: { color: "#ff2187" },
    config: { ...config.gentle, duration: 3000 },
  });
  return <animated.h5 style={springprops}>{props.val}</animated.h5>;
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
