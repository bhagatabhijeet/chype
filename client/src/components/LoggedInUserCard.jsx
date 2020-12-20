import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { useDispatch, useSelector } from "react-redux";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { setUser } from "../redux/UserReducer";
import SettingsIcon from "@material-ui/icons/Settings";
import axios from "axios";

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    height: "100%",
    fontSize: 1,
    backgroundColor: "transparent",
    color: "white",
    elevation: 0,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "#2ba2ff",
    marginBottom: "0",
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  icon: {
    marginBottom: "0",
  },
  header: {
    fontSize: 12,
    backgroundColor: "transparent",
    color: "white",
    fontSmooth: 12,
    fontWeight: 600,
    padding: 0,
  },
}));

export default function LoggedInUserCard() {
  //Redux
  let history = useHistory();
  const dispatch = useDispatch();
  const ReduxUserState = useSelector((state) => state.user);
  let { firstName, lastName } = ReduxUserState;
  firstName = firstName ? firstName : "";
  lastName = lastName ? lastName : "";

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const signOut = async () => {
    try {
      await axios.patch(
          encodeURI(`/api/user/${ReduxUserState.id}`),
          { "loggedIn.status": false, "loggedIn.token": "" },
          { header: { authorization: `${ReduxUserState.token}` } }
      );
    } catch (err) {
      console.log(err);
    }
    dispatch(setUser({}));
    sessionStorage.removeItem("persist:root");
    history.push("/");
  };

  return (
      <div>
        <Card style={{ paddingBottom: "1px" }} className={classes.root}>
          <CardHeader
              className={classes.header}
              avatar={
                <StyledBadge
                    overlap="circle"
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    variant="dot"
                >
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    {firstName.length > 0
                        ? `${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`
                        : null}
                  </Avatar>
                </StyledBadge>
              }
              action={
                <IconButton
                    aria-label="settings"
                    className={classes.icon}
                    onClick={handleClick}
                >
                  <MoreVertIcon style={{ color: "white" }} />
                </IconButton>
              }
              title={`${firstName} ${lastName}`}
          />
          <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
          >
            <MenuItem>
              <Link to="/settings" className={classes.link}>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Settings"} />
                  </ListItem>
                </List>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/signout" className={classes.link} onClick={signOut}>
                <ListItem button>
                  <ListItemIcon>
                    <ExitToAppIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Signout"}/>
                </ListItem>
              </Link>
            </MenuItem>
          </Menu>
        </Card>
      </div>
  );
}