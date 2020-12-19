import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { useSelector } from "react-redux";


import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {CardHeader, List, ListItem, ListItemIcon, ListItemText, Menu, MenuItem} from "@material-ui/core";
import {Link} from "react-router-dom";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DetailsIcon from '@material-ui/icons/Details';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Collapse from "../pages/SettingsPage";

const StyledBadge = withStyles((theme) => ({
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

const useStyles = makeStyles((theme) => ({
    root: {
        // width: 360,
        height: 60,
        fontSize: 1,
        backgroundColor:'white',
        color:'white',
        boxSizing:'border-box'
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
        marginBottom: '0',
        fontSize:10,
        width:20,
        height:20,
    },
    icon: {
        marginBottom: '0',
    },
    header: {
        fontSize: 10,
        backgroundColor:'transparent',
        color:'white'
    }
}));

export default function FriendUserCard(props) {
    const ReduxUserState = useSelector(state=>state.user);
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };




    //When contact card is clicked it should load the chat with the user and connect to that user
    const selectedUser=(event)=>{
        const contacts = props.contactList;
        const existingContact = contacts.filter(entry => entry.email === props.data.email)
        if(existingContact.length === 0){
            props.setContactList(contacts.concat(props.data));
        }

    }

    return (
        // <div >
        <Card style={{ paddingBottom: '1px' }} className={classes.root} role="button" onClick={selectedUser}>
            <CardContent>
                <Avatar aria-label="recipe" className={classes.avatar}>
                    {`${props.data.firstName[0].toUpperCase()}${props.data.lastName[0].toUpperCase()}`}
                </Avatar>
                <Typography color="textSecondary" gutterBottom>

                    {`${props.data.firstName} ${props.data.lastName}`}
                </Typography>

            </CardContent>
            {/* <CardHeader
          className={classes.header}
          avatar={
            <StyledBadge
              overlap="circle"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              variant="dot"
            >
              <Avatar aria-label="recipe" className={classes.avatar}>
              {`${ReduxUserState.firstName[0].toUpperCase()}${ReduxUserState.lastName[0].toUpperCase()}`}
          </Avatar>
            </StyledBadge>
          }
          action={
            <IconButton aria-label="settings" className={classes.icon}>
              <MoreHorizIcon onClick={handleClick} style={{color: 'white'}}/>
            </IconButton>
          }
          title={`${ReduxUserState.firstName} ${ReduxUserState.lastName}`}
          subheader="This is my Status"
        /> */}

        </Card>

    );
}
