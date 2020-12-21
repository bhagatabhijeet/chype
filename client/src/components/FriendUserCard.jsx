import React, { useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { socket } from "../pages/MainPage";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

const OnlineStyledBadge = withStyles((theme) => ({
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

const OfflineStyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "red",
    color: "#44b700",
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      content: '""',
    },
  },
}))(Badge);

const useStyles = makeStyles((theme) => ({
  root: {
    height: 40,
    fontSize: 1,
    color: "white",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    width: "100%",
    margin: 0,
    "&:hover": {
      backgroundColor: "#4688f1 !important",
    },
  },

  avatar: {
    backgroundColor: "#1e1e1e",
    marginBottom: "0",
    fontSize: 8,
    width: 25,
    height: 25,
    marginRight: 5,
  },
  icon: {
    marginBottom: "0",
  },
  header: {
    fontSize: 10,
    backgroundColor: "transparent",
    color: "white",
  },
}));

export default function FriendUserCard(props) {
  const classes = useStyles();
  const [online, setOnline] = React.useState(false);

  useEffect(() => {
    socket.on("SIGN_IN", (payload) => {
      if (payload.id === props.data._id) {
        setOnline(true);        
      }
    });
    socket.on("SIGN_OUT", (payload) => {
      if (payload.id === props.data._id) {
        setOnline(false);        
      }
    });
    setOnline(props.data.loggedIn.status);
  }, []);

  
  const localSelectUserHandler = () => {
    props.selectedUserHandler(props.data);
  };

  const localFriendRemoval = (event) => {
    event.stopPropagation();
    props.removeHandler(props.data._id);
  };

  return (
    <div
      className={classes.root}
      style={{ backgroundColor: props.isSelected ? "#2ba2ff" : "#007acc" }}
      role="button"
      onClick={localSelectUserHandler}
    >
      <IconButton
        aria-label="delete"
        component="span"
        size="small"
        className="far fa-times-circle"
        style={{
          fontsize: 1,
          margin: 0,
          padding: 0,
          width: 1,
          height: 1,
          color: "black",
          position: "relative",
          right: "-95%",
          top: "3px",
        }}
        onClick={localFriendRemoval}
      ></IconButton>
      <Avatar aria-label="recipe" className={classes.avatar} component="span">
        {`${props.data.firstName[0].toUpperCase()}${props.data.lastName[0].toUpperCase()}`}
      </Avatar>
      <Typography>
        {`${props.data.firstName} ${props.data.lastName}`}
      </Typography>
      {online ? (
        <OnlineStyledBadge
          overlap="circle"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          variant="dot"
        >
          <VerifiedUserIcon style={{ fontSize: 20 }} />
        </OnlineStyledBadge>
      ) : (
        <OfflineStyledBadge
          overlap="circle"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          variant="dot"
        >
          <VerifiedUserIcon style={{ fontSize: 20 }} />
        </OfflineStyledBadge>
      )}
    </div>
  );
}
