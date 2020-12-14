import React from "react";
import chypeTransInverseLogo from "../assets/images/new_inverse_trans.png";
import Button from "@material-ui/core/Button";
import "../assets/styles/common.css";
import {Grid, Typography,} from "@material-ui/core";
import HomePageFooter from "../components/HomePageFooter";
import {makeStyles} from "@material-ui/core/styles";
import {animated, config, Spring, useSpring,} from "react-spring";
import {isLoggedIn} from "../Utils/AuthenticationHelpers";
import {Redirect} from "react-router-dom";

const {Container} = require("@material-ui/core");

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

    if (isLoggedIn()) {
        return <Redirect to="/main"/>;
    }

    return (
        <>
            <Grid
                container
                style={{
                    minHeight: "30px",
                    backgroundColor: "#1e1e1e",
                    color: "#d0effc",
                    fontFamily: "Roboto",
                    marginBottom: "10px",
                }}
                justify="center"
                alignItems="center"
            >
                <Grid item>
                    <img src={chypeTransInverseLogo} alt="logoImg" height="60px"/>
                </Grid>
                <Grid item></Grid>
            </Grid>
            {/* <Container> */}
            <Grid container direction="column" justify="center" alignItems="center">
                <Grid item xs={12} spacing={0}>
                    <Animdiv val="Hello there!"/>
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
                    <Typography variant="h4" align="center" component="h4">
                        {/* <img src={FunAnim} alt="funanim" /> */}
                    </Typography>
                </Grid>
            </Grid>
            {/* </Container> */}
            <HomePageFooter/>
        </>
    );
}

function Animdiv(props) {
    const springprops = useSpring({
        color: "#2ba2ff",
        from: {color: "#ff2187"},
        config: {...config.gentle, duration: 3000},
        textAlign: 'center'
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