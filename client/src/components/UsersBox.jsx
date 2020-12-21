import { Box } from "@material-ui/core";
import FriendUserCard from "../components/FriendUserCard";
import { makeStyles } from "@material-ui/core/styles";
import "../assets/styles/common.css";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    maxHeight: "100%",
    overflow: "hidden",
    boxSizing: "border-box",
    padding: 5,
    backgroundColor: "#096dba",
    "&:hover": {
      overflowY: "auto",
    },
  },
}));

export default function UsersBox(props) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {props.friends.map((f, index) => (
        <FriendUserCard
          key={index}
          data={f}
          selectedUserHandler={props.selectedUserHandler}
          isSelected={f._id === props.selected.id ? true : false}
          removeHandler={props.removeHandler}
        />
      ))}
    </Box>
  );
}
