import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "#4a69ad",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "#4a69ad",
  },
  title: {
    flexGrow: 1,
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Chype
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default function CustomNavbar(props) {
  return (
    <ThemeProvider theme={props.theme}>
      <Navbar />
    </ThemeProvider>
  );
}
