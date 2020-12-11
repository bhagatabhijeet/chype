import React,{useState} from 'react';
import chypeTransInverseLogo from "../assets/images/new_inverse_trans.png";
import chypeTransLogo from "../assets/images/new_trans.png";
// import y from "../assets/images/y.png";
import {
  Typography,
  Grid,
  Avatar,
  Divider,
  Box,
  Link,
} from "@material-ui/core";
import   HomePageFooter  from "../components/HomePageFooter";
import { makeStyles } from "@material-ui/core/styles";
import {useSpring, animated,config,useTransition,Spring} from 'react-spring';
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
        <Grid item>
          {/* <Box mb={3}> */}
          {/* <Typography variant="caption">
            &copy; Chype Team - {new Date().getFullYear()}
          </Typography> */}
          {/* </Box> */}
        </Grid>
      </Grid>
      <Container>
        <Grid>
          <Grid item>
            <Typography variant="h3" align="center">
              {/* <Box fontWeight="fontWeightBold" m={1} fontFamily='Roboto' > */}
                {/* <Animdiv val="Welcome to Chype!"/>*/}
                {/* <ShowY/> */}<img src={chypeTransLogo} alt="trans logo"/>

              {/* </Box> */}
              
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <HomePageFooter />
    </>
  );
}

function Animdiv(){
  const props = useSpring({
    color: "#515dff",
    from: { color: "#ff2187" },
    config: {...config.gentle,duration:3000}
  })
  return <animated.div style={props}>Welcome to Chype</animated.div>
  
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