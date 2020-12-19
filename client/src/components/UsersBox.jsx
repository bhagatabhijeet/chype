import {useState,useEffect} from "react";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { Grid, Box } from "@material-ui/core";
import FriendUserCard from "../components/FriendUserCard";
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
        position: "relative",
        backgroundColor: "#096dba",
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


        </Box>
    );
}
