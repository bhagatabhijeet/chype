import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { Grid, Box } from "@material-ui/core";
import SearchedUserCard from "../components/SearchedUserCard";
import UsersBox from "../components/UsersBox";
import { makeStyles } from "@material-ui/core/styles";
import {useState,useEffect} from "react";
import {useSelector} from "react-redux";
import "../assets/styles/common.css";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "28%",
    display: "flex",
    flexDirection: "column",
    // borderTopLeftRadius:10,
    // borderBottomLeftRadius:10,
    border:'1px solid black',
    margin:'0 0 10 10',
    boxSizing:'border-box'

  },
}));

export default function UsersContainer() {
  const classes = useStyles();
  const ReduxUserState = useSelector(state=>state.user);
  const [search,setSearch] = useState('');
  const [searchResult,setSearchResult] = useState([]);

  const handleSearch=(event)=>{
    setSearch(event.target.value);
  }

  useEffect(()=>{
    const getUsers=async ()=>{
      if(search.trim()===""){
        setSearchResult([]);
      }
      else{
        const res=  await axios.get(encodeURI(`/api/user?q=${search}&filterme=true`),{header:{'authorization':`${ReduxUserState.token}`}})
        setSearchResult(res.data);
      }
    }
    getUsers();
    console.log(searchResult);
  },[search]);

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
      
      <div id="searchedUsers">
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
        onChange={handleSearch}
        fullWidth
        style={{color:"#fff"}}
        margin="dense"
      />
      {searchResult.map(s=><SearchedUserCard data={s}/>)}
      </div>

      <UsersBox />
    </Box>
  );
}
