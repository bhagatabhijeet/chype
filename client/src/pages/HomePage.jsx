import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import "../assets/styles/common.css";
import AppsIcon from "@material-ui/icons/Apps";
import GithubIcon from "@material-ui/icons/GitHub";
import axios from "axios";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import Badge from "@material-ui/core/Badge";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import { Link as Scroll } from "react-scroll";
import AppBarMain from "../components/AppBarMain";
import { Typography, Grid, Link } from "@material-ui/core";
import HomePageFooter from "../components/HomePageFooter";
import { makeStyles } from "@material-ui/core/styles";
import { useSpring, animated, config } from "react-spring";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

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
    marginBottom: "0px",
    borderRadius: "15px",
    width: "1230px",
    justifyContent: "center",
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
    marginBottom: "32px",
    marginTop: "22px",
    backgroundColor: "black",
    color: "white",
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
    backgroundColor: "#bbdefb",
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
          <Collapse
            in={checked}
            {...(checked ? { timeout: 1000 } : {})}
            collapsedHeight={50}
          >
            <div className={classes.container}>
              <h1 className={classes.title}>
                Welcome to <br />
                <span className={classes.colorText}>Chype.</span>
              </h1>
              <Scroll to="" smooth={true}>
                <IconButton>
                  <AppsIcon className={classes.goDown} />
                </IconButton>
              </Scroll>
            </div>
          </Collapse>
        </Grid>
        <Grid item xs={12}>
          <Button className={classes.chyper} href="/signup">
            I want to be a 'Chyper'
          </Button>
        </Grid>
        <Grid item container xs={8}>
          <Card className={classes.root}>
            <Grid item xs={12} justify="center">
              <CardContent className={classes.footerBottom}>
                <Typography style={{ fontSize: "30px", marginTop: "6px" }}>
                  Our GitHub Stats
                </Typography>
                <Typography variant="subtitle1">
                  Become a contributor
                </Typography>
                <Typography
                  variant="body2"
                  style={{ color: "#ffffff", margin: 10 }}
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
