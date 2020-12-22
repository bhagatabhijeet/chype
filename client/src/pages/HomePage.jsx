import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import "../assets/styles/common.css";
import GithubIcon from "@material-ui/icons/GitHub";
import axios from "axios";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import Badge from "@material-ui/core/Badge";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
// import { Link as Scroll } from "react-scroll";
import AppBarMain from "../components/AppBarMain";
import { Typography, Grid, Link } from "@material-ui/core";
import HomePageFooter from "../components/HomePageFooter";
import { makeStyles } from "@material-ui/core/styles";
import { useSpring, animated, config } from "react-spring";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import balBakground from "../assets/images/ballonBackground.png";

const useStyles = makeStyles((theme) => ({
  divider: {
    backgroundColor: "#dff3fc",
  },
  photoLink: {
    borderRadius: "50%",
  },
  root: {
    minHeight: "10vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    textAlign: "center", 
    width: "100%",
    justifyContent: "flex-end",
    border: 0,
    backgroundColor: "transparent",
    elevation: 0,
  },
  footerBottom: {
    backgroundColor: "#1e1e1e",
    color: "#ffffff",
  },
  item: {
    display: "flex",
    flexDirection: "row",
    height: "180px",
    justifyContent: "center",
    alignItems: "stretch",
  },
  chyper: {
    margin: 10,
    borderRadius: "10px",
    padding: "30px",
  },
  icon: {
    color: "#fff",
    fontSize: "1rem",
  },
  colorText: {
    color: "#0d47a1",
  },
  container: {
    textAlign: "center",
  },
  goDown: {
    color: "#0d47a1",
    fontSize: "4rem",
  },
  div: {
    background:
      "linear-gradient(#ffffff 30%,#56b5ff 55%,#2ba2ff,#2ba2ff,#2ba2ff,#2ba2ff)",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    "&::before": {
      content: "''", // ::before and ::after both require content
      position: "absolute",
      top: 0,
      left: 0,
      width: 600,
      height: 600,
      marginLeft: "auto",
      marginRight: "auto",
      backgroundImage: `url(${balBakground})`,
      opacity: 0.3,      
      backgroundRepeat: "no-repeat",      
      backgroundPosition: "center",
    },
  },
}));

export default function HomePage() {
  const [forks, setForks] = useState();
  const [stars, setStars] = useState();

  const githubContent = async () => {
    const { data } = await axios.get(
      `https://api.github.com/repos/bhagatabhijeet/chype`
    );
    setForks(data.forks_count);
    setStars(data.stargazers_count);
  };

  useEffect(() => {
    githubContent();
  }, []);
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);

  const classes = useStyles();
  const userReduxState = useSelector((state) => state.user);

  if (userReduxState.loggedIn) {
    return <Redirect to="/main" />;
  }

  return (
    <div className={classes.div}>
      <AppBarMain signup signin />
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item xs={12} spacing={0}>
          <Animdiv val="Hello there!" />
          <div className={classes.container}>
            <div className={classes.title}>Welcome to Chype</div>
            </div>
          
        </Grid>
        <Grid item xs={12}>
          <Button
            className="btn-black-white"
            style={{ margin: "50 80", padding: 25 }}
            href="/signup"
          >
            Be a Chyper
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Card variant="outlined" elevation="0" style={{backgroundColor:'transparent'}}>
            <Grid item xs={12} justify="center" alignContent="center">
              <CardContent style={{ backgroundColor: "transparent" }}>
                <Typography style={{ fontSize: 20, marginTop: 5,textAlign:"center",width:400 }}>
                  Chype is a chat/messenger application.
                  Chype not only sends and
                  receives messages but also allows you to send messages
                  transliterated and receive translated messages in your choice of language.
                </Typography>
              </CardContent>
            </Grid>
          </Card>
        </Grid>
        <Grid item container xs={12}>
          <Card className={classes.root} variant="outlined">
            <Grid item xs={12} justify="center">
              <CardContent style={{ backgroundColor: "transparent" }}>
                <Typography style={{ fontSize: 30, marginTop: 5 }}>
                  Our GitHub Stats
                </Typography>
                <Typography variant="subtitle1">
                  Become a contributor
                </Typography>
                <Typography
                  variant="body2"
                  style={{ margin: 10 }}
                  align="center"
                >
                  <Link
                    color="inherit"
                    href="https://github.com/bhagatabhijeet/chype"
                    target="_blank"
                  >
                    <GithubIcon
                      style={{
                        fontSize: 34,
                        marginRight: "15px",
                        marginTop: "6px",
                      }}
                    />
                  </Link>

                  <Badge badgeContent={forks} color="primary">
                    <AccountTreeIcon />
                  </Badge>
                  {"  "}
                  <Badge badgeContent={stars} color="primary">
                    <StarBorderIcon />
                  </Badge>
                </Typography>
              </CardContent>
            </Grid>
          </Card>
        </Grid>
      </Grid>
      <HomePageFooter />
    </div>
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
