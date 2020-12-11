// import React from 'react';
// import { Typography, Grid, Avatar,Divider,Box,Link } from "@material-ui/core";
// import GitHubIcon from "@material-ui/icons/GitHub";
// import chypeTransInverseLogo from "../assets/images/new_inverse_trans.png";
// import chypeTransLogo from "../assets/images/new_trans.png";
// import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import socketIcon from "../assets/images/Socket-IO-Logo.png";
import MUIIcon from "../assets/images/mui-icon.png";
import ReactIcon from "../assets/images/React-Logo.png";
import MongoIcon from "../assets/images/mongo-logo.png";
import GithubIcon from "@material-ui/icons/GitHub";
import Tooltip from "@material-ui/core/Tooltip";
import Box from "@material-ui/core/Box";
import chypeTransInverseLogo from "../assets/images/new_inverse_trans.png";
import chypeTransLogo from "../assets/images/new_trans.png";

function Copyright() {
  return (
    <Typography variant="body2" style={{ color: "#ffffff", margin: 10 }}>
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://github.com/bhagatabhijeet/chype"
        target="_blank"
      >
        Chype Team
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "45vh",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(1, 1),
    marginTop: 100,
    backgroundColor: "#2ba2ff",
    color: "#ffffff",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",
    bottom: 0,
  },
  footerBottom:{
    backgroundColor: "#1e1e1e",
    color: "#ffffff",
  },
  item: {
    display: "flex",
    flexDirection: "row",
    height: "180px",
    justifyContent: "center",
    alignItems: "center",
  },
  divider: {
    backgroundColor: "#c9c1c1",
    margin: 15,
  },
}));

export default function HomePageFooter() {
  const classes = useStyles();

  return (
    <footer>
      <Grid container className={classes.footer}>
        <Grid
          item
          xs={10}
          sm={6}
          style={{
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Grid item>
            <h4>Powered By</h4>
          </Grid>
          <Grid item>
            <Link color="inherit" href="https://socket.io/" target="_blank">
              <Tooltip title="Socket.io">
                <img
                  src={socketIcon}
                  alt="socket icon"
                  width="70px"
                  height="70px"
                />
              </Tooltip>
            </Link>
            <Link
              color="inherit"
              href="https://material-ui.com/"
              target="_blank"
            >
              <Tooltip title="Material-UI">
                <img src={MUIIcon} alt="MUI icon" width="60px" height="60px" />
              </Tooltip>
            </Link>
            <Link color="inherit" href="https://reactjs.org//" target="_blank">
              <Tooltip title="React JS">
                <img
                  src={ReactIcon}
                  alt="React icon"
                  width="60px"
                  height="60px"
                />
              </Tooltip>
            </Link>
            <Link
              color="inherit"
              href="https://www.mongodb.com/"
              target="_blank"
            >
              <Tooltip title="MongoDB">
                <img
                  src={MongoIcon}
                  alt="React icon"
                  width="60px"
                  height="60px"
                />
              </Tooltip>
            </Link>
          </Grid>
          <Divider variant="inset" classes={{ root: classes.divider }} />
        </Grid>
        {/** Git Hub Grid item Start */}
        <Grid
          item
          xs={10}
          sm={6}
          style={{
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Grid item>
            <h4>GitHub</h4>
            <Copyright />
          </Grid>
          <Grid item>
            <Link
              color="inherit"
              href="https://github.com/bhagatabhijeet/chype"
              target="_blank"
            >
              <GithubIcon style={{ fontSize: 34 }} />
            </Link>
            <Divider variant="inset" classes={{ root: classes.divider }} />
          </Grid>
          {/** Git Hub Grid End */}
        </Grid>
      </Grid>

      {/** developers Grid Start */}
      <Grid
        // xs={12}
        // sm={12}
        style={{
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
        container
        direction='column'
        className={classes.footerBottom}
      >
        <Grid item xs={12}>
          <h4>Developed By</h4>         
        <Divider className={classes.divider}/>
        </Grid>
        <Grid item container xs={12}>
          <Grid item xs={6}>            
            <img src={chypeTransInverseLogo}  alt="footer logo" width="150px"/>
          </Grid>
          <Grid
            item
            container
            xs={6} 
            // sm={10}
            spacing={1}
            // lg={10}
            style={{
              flexDirection: "row",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Grid item xs={3} lg={2}>
              <Link
                color="inherit"
                href="https://github.com/bhagatabhijeet"
                target="_blank"
              >
                <Tooltip title="Abhijeet Bhagat">
                  <img
                    src="https://avatars2.githubusercontent.com/u/7333004?s=400&u=9cf90dd7ea3c9c588de9eb333f3e38f42cd3dd1e&v=4"
                    width="60px"
                    style={{ borderRadius: "50%" }}
                    alt="Abhijeet Bhagat Avatar"
                  />
                </Tooltip>
              </Link>
              <Link
                color="inherit"
                href="https://github.com/bhagatabhijeet"
                target="_blank"
              >
                <h5>Abhijeet Bhagat</h5>
              </Link>
            </Grid>
            {/*Mario*/}
            <Grid item xs={2} lg={2}>
              <Link
                color="inherit"
                href="https://github.com/mmaciasjr"
                target="_blank"
              >
                <Tooltip title="Mario Macias">
                  <img
                    src="https://avatars0.githubusercontent.com/u/65560980?s=460&v=4"
                    width="60px"
                    style={{ borderRadius: "50%" }}
                    alt="Mario Macias Avatar"
                  />
                </Tooltip>
              </Link>
              <Link
                color="inherit"
                href="https://github.com/mmaciasjr"
                target="_blank"
              >
                <h5>Mario Macias</h5>
              </Link>
            </Grid>
            {/*Son*/}
            <Grid item xs={2} lg={2}>
              <Link
                color="inherit"
                href="https://github.com/sotrnguy92"
                target="_blank"
              >
                <Tooltip title="Son Nguyen">
                  <img
                    src="https://avatars1.githubusercontent.com/u/67176516?s=460&u=ed0b10bd1e50121b0f81e1bd59f9e535390b217e&v=4"
                    width="60px"
                    style={{ borderRadius: "50%" }}
                    alt="Son Nguyen Avatar"
                  />
                </Tooltip>
              </Link>
              <Link
                color="inherit"
                href="https://github.com/sotrnguy92"
                target="_blank"
              >
                <h5>Son Nguyen</h5>
              </Link>
            </Grid>
            {/*Setare*/}
            <Grid item xs={2} lg={2}>
              <Link
                color="inherit"
                href="https://github.com/setaremehr"
                target="_blank"
              >
                <Tooltip title="Setare Mehr">
                  <img
                    src="https://avatars0.githubusercontent.com/u/66357101?s=460&u=38425745d3da7314c71c23f28e39a8f83659e219&v=4"
                    width="60px"
                    style={{ borderRadius: "50%" }}
                    alt="Setare Mehr Avatar"
                  />
                </Tooltip>
              </Link>
              <Link
                color="inherit"
                href="https://github.com/setaremehr"
                target="_blank"
              >
                <h5>Setare Mehr</h5>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
}

/**
 * <Grid item>
            <Link
              color="inherit"
              href="https://github.com/bhagatabhijeet"
              target="_blank"
            >
              <Tooltip title="Abhijeet Bhagat">
                <img
                  src="https://avatars2.githubusercontent.com/u/7333004?s=400&u=9cf90dd7ea3c9c588de9eb333f3e38f42cd3dd1e&v=4"
                  width="50px"
                  style={{ borderRadius: "50%" }}
                  alt="Abhijeet Bhagat Avatar"
                />
              </Tooltip>
            </Link>
            <Link
              color="inherit"
              href="https://github.com/bhagatabhijeet"
              target="_blank"
            >
              <h6>Abhijeet Bhagat</h6>
            </Link>
          </Grid>

          <Divider variant="inset" classes={{ root: classes.divider }} />
 */
