import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
// import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { useSelector } from "react-redux";
// import MenuBar from './Menu';

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {CardHeader, List, ListItem, ListItemIcon, ListItemText, Menu, MenuItem} from "@material-ui/core";
import {Link} from "react-router-dom";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DetailsIcon from '@material-ui/icons/Details';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Collapse from "../pages/SettingsPage";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import PersonIcon from '@material-ui/icons/Person';

const OnlineStyledBadge = withStyles((theme) => ({
    badge: {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: '$ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}))(Badge);

const OfflineStyledBadge = withStyles((theme) => ({
  badge: {
      backgroundColor: 'red',
      color: '#44b700',
      // boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          // border: '1px solid red',
          content: '""',
      },
  }
}))(Badge);


const useStyles = makeStyles((theme) => ({
    root: {
        // width: 360,
        height: 40,
        fontSize: 1,
        // backgroundColor:'#007acc',
        color:'white',
        // boxSizing:'border-box',
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        alignContent:'center',
        width:'100%',
        margin:0,
        "&:hover":{
          backgroundColor:'#4688f1 !important',
        }

    },
    // expand: {
    //     transform: 'rotate(0deg)',
    //     marginLeft: 'auto',
    //     transition: theme.transitions.create('transform', {
    //         duration: theme.transitions.duration.shortest,
    //     }),
    // },
    // expandOpen: {
    //     transform: 'rotate(180deg)',
    // },
    avatar: {
        backgroundColor: '#1e1e1e',
        marginBottom: '0',
        fontSize:8,
        width:25,
        height:25,
        marginRight:5
    },
    icon: {
        marginBottom: '0',
    },
    header: {
        fontSize: 10,
        backgroundColor:'transparent',
        color:'white'
    },


}));

export default function FriendUserCard(props) {
    const ReduxUserState = useSelector(state=>state.user);
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    // const [isSelected,setIsSelected] = React.useState(false);
    // const [bgColor,setBgColor] =React.useState('#007acc')

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    console.log("PROPS",props.data);
    console.log(props.data.loggedIn.status);

    const localSelectUserHandler =()=>{
      // setIsSelected(true);
      // setBgColor("#2ba2ff");
      props.selectedUserHandler(props.data)
    }


    return (
        // <div >
        <div className={classes.root}  style={{backgroundColor:props.isSelected?"#2ba2ff":"#007acc"}} role="button" onClick={localSelectUserHandler}>
            {/* <CardContent> */}

                <Avatar aria-label="recipe" className={classes.avatar} component="span">
                    {`${props.data.firstName[0].toUpperCase()}${props.data.lastName[0].toUpperCase()}`}
                </Avatar>
                <Typography>
                    {`${props.data.firstName} ${props.data.lastName}`}
                </Typography>
                {props.data.loggedIn.status===true?
                (
                  <OnlineStyledBadge overlap="circle"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              variant="dot">
                <VerifiedUserIcon style={{fontSize:20}}/>
                </OnlineStyledBadge>
                ):
                (<OfflineStyledBadge overlap="circle"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                variant="dot">
                  <VerifiedUserIcon style={{fontSize:20}}/>
                  </OfflineStyledBadge>)
                }



        </div>

    );
}
