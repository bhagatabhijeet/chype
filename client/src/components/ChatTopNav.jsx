import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import chypeTransInverseLogo from "../assets/images/new_inverse_trans_blue.png";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import LoggedInUserCard from '../components/LoggedInUserCard';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "80px",
  },
  appbar: {
    background: "#1e1e1e",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  appbarTitle: {
    flexGrow: "1",
  },
  icon: {
    color: "#fff",
    // fontSize: "2.5rem",
  },
  btn1: {
    color: "#fff",
    borderColor: "#fff",
    margin: 10,
    "&:hover": {
      color: "#fff",
      borderColor: "#fff",
      backgroundColor: "#2ba2ff",
    },
  },
  btn2: {
    color: "#2ba2ff",
    borderColor: "#2ba2ff",
    margin: 10,
    "&:hover": {
      color: "#fff",
      borderColor: "#fff",
      backgroundColor: "#2ba2ff",
    },
  },
}));

export default function ChatTopNav(props) {
  const classes = useStyles();
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar>
       
          <h1 className={classes.appbarTitle}>
            <Link to="/">
              <img src={chypeTransInverseLogo} alt="logoImg" height="40px"/>
            </Link>
          </h1>
          <LoggedInUserCard />
        </Toolbar>
      </AppBar>
    </div>
  );
}
