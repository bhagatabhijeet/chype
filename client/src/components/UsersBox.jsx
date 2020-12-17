import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { Grid, Box } from "@material-ui/core";
import FriendUserCard from "../components/FriendUserCard";
import { makeStyles } from "@material-ui/core/styles";
import "../assets/styles/common.css";

const useStyles = makeStyles((theme) => ({
  root: {
    // position: "fixed",
    //   top: 100,
    height: "100%",
    // width:'20%',
    //   display: "flex",
    //   flexDirection: "column",
    overflow: "hidden",
    boxSizing: "border-box",
    padding: 10,
    backgroundColor: "magenta",
    "&:hover": {
      overflowY: "auto",
    },
    
  },
}));

export default function UsersBox() {
  const classes = useStyles();
  return (
    <Box
       className={classes.root}
      style={
        {
          // position: "fixed",
          //   top: 100,
          // height:'100%',
          // width:'20%',
          //   display: "flex",
          //   flexDirection: "column",
          //  overflow: 'hidden',
          //   boxSizing:'border-box',
          //   padding:10,
          //   backgroundColor:'magenta',
          //   "&::hover":{
          //     overflowY: 'auto',
          //   },
        }
      }
    >
      <TextField
        label="Search Users"
        InputProps={{
          startAdornment: (
            <InputAdornment>
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <FriendUserCard/>      
      <div>User Card 2</div>
      <div>User Card 3</div>
      <div>User Card 4</div>
      <div>User Card 5</div>
      <div>User Card 6</div>
      <div>User Card 7</div>
      <div>User Card 8</div>
      <div>User Card 9</div>
      <div>User Card 10</div>
      <div>User Card 11</div>
      <div>User Card 12</div>
      <div>User Card 13</div>
      <div>User Card 14</div>
      <div>User Card 15</div>
      <div>User Card 16</div>
      <div>User Card 17</div>
      <div>User Card 18</div>
      <div>User Card 4</div>
      <div>User Card 5</div>
      <div>User Card 6</div>
      <div>User Card 7</div>
      <div>User Card 8</div>
      <div>User Card 9</div>
      <div>User Card 10</div>
      <div>User Card 11</div>
      <div>User Card 12</div>
      <div>User Card 13</div>
      <div>User Card 14</div>
      <div>User Card 15</div>
    </Box>
  );
}
