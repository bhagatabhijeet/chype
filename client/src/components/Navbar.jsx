import React from "react";
import {
  makeStyles, 
  ThemeProvider,
} from "@material-ui/core/styles";
import {AppBar,Toolbar,Typography} from "@material-ui/core";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "#4a69ad",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "#4a69ad",
    // backgroundColor:theme.bg.backgroundColor,
    // color:theme.bg.backgroundColor,
  },
  title: {
    flexGrow: 1,
  },
}));


function Navbar() {
  const classes = useStyles();
  // const theme = useTheme();
  // console.log(theme);
  // console.log(classes);
  // useEffect(() => {
  //   theme= state.checked?theme1:theme2;
  //   console.log(theme.palette.primary.main);
  // }, [state])

  

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
// const theme = createMuiTheme({
//   status: {
//     danger: red[500],
//   },
//   palette:{
//     primary:{main:red[300]}
//   }
// });
export default function CustomNavbar(props) {
  return (
    <ThemeProvider theme={props.theme}>
      {/* {console.log(props.theme.palette.primary.main)} */}
      <Navbar />
    </ThemeProvider>
  );
}
