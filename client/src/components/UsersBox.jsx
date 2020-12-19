import React, {useState,useEffect} from "react";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { Grid, Box } from "@material-ui/core";
import FriendUserCard from "../components/FriendUserCard";
import ContactCard from "./ContactCard";
import { makeStyles } from "@material-ui/core/styles";
import "../assets/styles/common.css";
import {useSelector} from "react-redux";
import axios from "axios";

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
    const ReduxUserState = useSelector(state=>state.user);
    const [search,setSearch] = useState('');
    const [searchResult,setSearchResult] = useState([]);
    const [addingContact, setAddingContact] = useState();
    const [contactList, setContactList] = useState([]);

    const handleSearch=(event)=>{
        setSearch(event.target.value);
        console.log(contactList)
    }

    useEffect(()=>{
        const getUsers=async ()=>{
            const res=  await axios.get(`/api/user?q=${search}&filterme=true`,{header:{'authorization':`${ReduxUserState.token}`}})
            setSearchResult(res.data);
        }
        getUsers();
        console.log(searchResult);
    },[search]);

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
                onChange={handleSearch}
            />
            {search ? searchResult.map(s=><FriendUserCard
                data={s}
                contactList = {contactList}
                setContactList = {setContactList}
            />) : null}
            <div>
                <h3>Contacts</h3>
                {contactList ? contactList.map(s => <ContactCard
                    data={s}
                />) : null}
            </div>
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
