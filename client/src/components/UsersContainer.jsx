import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { Grid, Box } from "@material-ui/core";
import SearchedUserCard from "../components/SearchedUserCard";
import UsersBox from "../components/UsersBox";
import { makeStyles } from "@material-ui/core/styles";
import "../assets/styles/common.css";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "28%",
    display: "flex",
    flexDirection: "column",
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
    border:'1px solid black',
    margin:'0 0 10 10'

  },
}));

export default function UsersContainer() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      {/* <TextField
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
      /> */}
      <div id="searchedUsers"></div>

      <UsersBox />
    </Box>
  );
}
