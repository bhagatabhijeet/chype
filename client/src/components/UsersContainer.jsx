import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import Box from "@material-ui/core/Box";
import SearchedUserCard from "../components/SearchedUserCard";
import UsersBox from "../components/UsersBox";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../assets/styles/common.css";
import axios from "axios";
import { setSelectedUser } from "../redux/SelectedUserReducer";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: "100%",
    width: "28%",
    display: "flex",
    flexDirection: "column",
    // borderTopLeftRadius:10,
    // borderBottomLeftRadius:10,
    border: "1px solid black",
    margin: "0 0 10 10",
    boxSizing: "border-box",
    overflow: "hidden",
    position: "relative",
  },
}));

export default function UsersContainer() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const ReduxUserState = useSelector((state) => state.user);
  const ReduxSelectedUserState = useSelector((state) => state.selectedUser);

  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [friendsList, setFriendsList] = useState([]);
  const [selectedUsr, setSelectedUsr] = useState({});
  const [friendAdded,setFriendAdded] = useState(false);
  const [friendRemoved,setFriendRemoved] = useState(false);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    const getUsers = async () => {
      if (search.trim() === "") {
        setSearchResult([]);
      } else {
        const res = await axios.get(
          encodeURI(`/api/user?q=${search}&filterme=true`),
          { header: { authorization: `${ReduxUserState.token}` } }
        );
        console.log("SEARCH", res.data);
        setSearchResult(res.data);
      }
    };
    getUsers();
  }, [ReduxUserState.token, search]);

  useEffect(() => {
    dispatch(
      setSelectedUser({
        firstName: "",
        lastName: "",
        email: "",
        id: 0,
      })
    );
    const getFriends = async () => {
      // if(search.trim()===""){
      //   setSearchResult([]);
      // }
      // else{
      try {
        const res = await axios.get(`/api/user/${ReduxUserState.id}/friends`, {
          header: { authorization: `${ReduxUserState.token}` },
        });

        setFriendsList(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [friendAdded,friendRemoved]);


  const handleAddNewFriend = async (id)=>{
    try{

      await axios.post(
        encodeURI(`/api/user/${ReduxUserState.id}/friends`),
        {friendId:id},
        { header: { authorization: `${ReduxUserState.token}` } }
      );
      setFriendAdded(true);
      setSearch("");
    }
    catch(err){
      console.log("TRYING TO ADD",err);

    }
  }

 
  const handleFriendRemoval = async (id) =>{   
    
    try{      
      await axios.patch(
        encodeURI(`/api/user/${ReduxUserState.id}/friends`),
        {friendId:id},
        { header: { authorization: `${ReduxUserState.token}` } }
      );
      setFriendRemoved(true);      
    }
    catch(err){
      console.log("TRYING TO REMOVE",err);

    }
  }

  const handleSelectedUser = (data) => {
    // const contacts = props.contactList;
    // const existingContact = contacts.filter(entry => entry.email === props.data.email)
    // if(existingContact.length === 0){
    //     props.setContactList(contacts.concat(props.data));
    // }
    // alert(data.firstName);
    dispatch(
      setSelectedUser({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        id: data._id,
      })
    );
    // setSelectedUsr(ReduxSelectedUserState);
  };

  return (
    <Box className={classes.root}>
      <TextField
        // label="Search Users"
        placeholder="Search chypers"
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
        style={{ color: "#fff" }}
        margin="dense"
        variant="standard"
        value={search}
      />
      {search ? (
        <Button
          size="small"
          style={{ fontSize: 10, width: 30, alignSelf: "center" }}
          className="btn-blue-black"
          onClick={()=>{setSearch("")}}
        >
          Clear
        </Button>
      ) : null}

      <div id="searchedUsers" style={{ maxHeight: "80%", overflowY: "scroll" }}>
        {searchResult.map((s) => (
          <SearchedUserCard data={s} addFriendHandler={handleAddNewFriend}/>
        ))}
      </div>

      <UsersBox
        friends={friendsList}
        selectedUserHandler={handleSelectedUser}
        selected={ReduxSelectedUserState}    
        removeHandler={handleFriendRemoval}    
      />
    </Box>
  );
}
