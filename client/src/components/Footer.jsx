import React from "react";
import { Typography, Grid } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import GitHubIcon from "@material-ui/icons/GitHub";
import chypeTransLogo from "../assets/images/chypeShortLogo-trans.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  divider: {
    // Theme Color, or use css color in quote
    backgroundColor: "#dff3fc",
  },
}));

export const Footer = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      style={{
        minHeight: "20vh",
        backgroundColor: "#020006",
        color: "#d0effc",
      }}
      justify="space-evenly"
      alignItems="center"
    >
      <Box lg={4} textAlign="center">
        <Box mb={3}>
          <Link
            href="https://github.com/bhagatabhijeet/chype"
            color="inherit"
            target="_blank"
          >
            <GitHubIcon />
          </Link>
        </Box>
        <Box mb={3}>
          <Typography variant="caption">MIT License</Typography>
        </Box>
      </Box>

      <Divider orientation="vertical" flexItem className={classes.divider} />

      <Box lg={4} textAlign="center">
        <Box mb={3}>
          <Typography variant="caption">
            <img
              src={chypeTransLogo}
              alt="logoImg"
              width="40px"
              height="40px"
            />
          </Typography>
        </Box>
        <Box mb={3}>
          <Typography variant="caption">
            &copy; Chype Team - {new Date().getFullYear()}
          </Typography>
        </Box>
      </Box>

      <Divider orientation="vertical" flexItem className={classes.divider} />

      <Box lg={4} textAlign="center">
        <Box mb={3}>
          <Typography variant="caption" display="block">
            The Team
          </Typography>
        </Box>
        <Box mb={3}>
          <Typography variant="caption" display="block">
            <Link
              href="https://github.com/bhagatabhijeet"
              color="inherit"
              target="_blank"
            >
              Abhijeet Bhagat
            </Link>
          </Typography>
          <Typography variant="caption" display="block">
            <Link
              href="https://github.com/mmaciasjr"
              color="inherit"
              target="_blank"
            >
              Mario Macias
            </Link>
          </Typography>
          <Typography variant="caption" display="block">
            <Link
              href="https://github.com/setaremehr"
              color="inherit"
              target="_blank"
            >
              Setare Mehr
            </Link>
          </Typography>
          <Typography variant="caption" display="block">
            <Link
              href="https://github.com/sotrnguy92"
              color="inherit"
              target="_blank"
            >
              Son Nguyen
            </Link>
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};
