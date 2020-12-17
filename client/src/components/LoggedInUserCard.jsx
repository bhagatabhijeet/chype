import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import { useSelector } from "react-redux";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {List, ListItem, ListItemIcon, ListItemText, Menu, MenuItem} from "@material-ui/core";
import {Link} from "react-router-dom";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DetailsIcon from '@material-ui/icons/Details';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';

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
        width: 300,
        height: '100%',
        fontSize: 1,
        backgroundColor:'transparent',
        color:'blue',
        elevation:0

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
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    icon: {
        marginBottom: '0',
    },
    header: {
        fontSize: 10,
        backgroundColor:'transparent',
        color:'blue'
    }
}));

export default function LoggedInUserCard() {
    const ReduxUserState = useSelector(state=>state.user);
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    // const [expanded, setExpanded] = React.useState(false);

    // const handleExpandClick = () => {
    //   setExpanded(!expanded);
    // };

    return (
        <div >
            <Card style={{ paddingBottom: '1px' }} className={classes.root}>
                <CardHeader
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
                            <MoreVertIcon  onClick={handleClick} style={{color: 'white'}}/>
                        </IconButton>

                    }

                    title={`${ReduxUserState.firstName} ${ReduxUserState.lastName}`}
                    // subheader="This is my Status"
                />
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem>
                        <Link to="/settings" className={classes.link}>
                            <List component="div" disablePadding>
                                <ListItem button className={classes.nested}>
                                    <ListItemIcon>
                                        <SettingsIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary={"Settings"}/>
                                </ListItem>
                            </List>
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/account" className={classes.link}>
                            <List component="div" disablePadding>
                                <ListItem button className={classes.nested}>
                                    <ListItemIcon>
                                        <AccountCircleIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Account"/>
                                </ListItem>
                            </List>
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/general" className={classes.link}>
                            <List component="div" disablePadding>
                                <ListItem button className={classes.nested}>
                                    <ListItemIcon>
                                        <DetailsIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="General"/>
                                </ListItem>
                            </List>
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/signout" className={classes.link}>
                            <ListItem button>
                                <ListItemIcon>
                                    <ExitToAppIcon/>
                                </ListItemIcon>
                                <ListItemText primary={"Signout"}/>
                            </ListItem>
                        </Link>
                    </MenuItem>
                </Menu>
                {/* <Typography variant="subtitle1" color="textSecondary" style={{ marginTop: '0', fontSize: '10px' }}>
          This is my last chat
        </Typography> */}

            </Card>
        </div>
    );
}