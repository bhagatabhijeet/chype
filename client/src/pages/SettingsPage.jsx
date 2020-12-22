import React from 'react';
import {makeStyles} from "@material-ui/core/styles"
import {
    BrowserRouter as Router,
    Switch, Route, Link, Redirect
} from "react-router-dom";
import {
    Drawer, List, ListItem,
    ListItemIcon, ListItemText,
    Container, Typography, Divider
} from "@material-ui/core";
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DetailsIcon from '@material-ui/icons/Details';
import Account from '../components/Account';
import General from '../components/General'
import {useDispatch, useSelector} from "react-redux";
import ChatIcon from '@material-ui/icons/Chat';
import {useHistory} from "react-router-dom";
import axios from "axios";
import {setUser} from "../redux/UserReducer";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    drawerPaper: {
        width: 'inherit',
        backgroundColor:'#1e1e1e',
        color:'#2ba2ff !important'
    },
    list: {
        marginTop: '20px',
    },
    grid: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '30px',
    },
    link: {
        textDecoration: 'none',
        color: "#2ba2ff" //theme.palette.text.primary
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

function SettingsPage(props) {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const reduxUserState = useSelector(state=>state.user);

    const [open, setOpen] = React.useState(true);

    if (!reduxUserState.loggedIn) {
        return <Redirect to="/"/>;
    }

    const handleClick = () => {
        setOpen(!open);
    };

    const navigateToChat = () => {
        history.push('/main');
    };

    const signOut = async () => {
        try {
            await axios.patch(
                encodeURI(`/api/user/${reduxUserState.id}`),
                { "loggedIn.status": false, "loggedIn.token": "" },
                { header: { authorization: `${reduxUserState.token}` } }
            );
        } catch (err) {
            console.log(err);
        }
        dispatch(setUser({}));
        sessionStorage.removeItem("persist:root");
        history.push("/");
    };

    return (
        <Router>
            <div style={{display: 'flex'}} className={classes.root}>
                <Drawer
                    style={{width: '270px'}}
                    variant="persistent"
                    anchor="left"
                    open={true}
                    classes={{paper: classes.drawerPaper}}
                >
                    <List className={classes.list}>
                        <Link to="/settings" className={classes.link}>
                            <ListItem button onClick={handleClick}>
                                <ListItemIcon style={{color:'#2ba2ff'}}>
                                    <SettingsIcon/>
                                </ListItemIcon>
                                <ListItemText primary={"Settings"}/>
                                {open ? <ExpandLess/> : <ExpandMore/>}
                            </ListItem>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <Link to="/account" className={classes.link}>
                                    <List component="div" disablePadding>
                                        <ListItem button className={classes.nested}>
                                            <ListItemIcon style={{color:'#2ba2ff'}}>
                                                <AccountCircleIcon/>
                                            </ListItemIcon>
                                            <ListItemText primary="Account"/>
                                        </ListItem>
                                    </List>
                                </Link>
                            </Collapse>
                            <Divider variant="inset" component="li"/>
                            {/* <Collapse in={open} timeout="auto" unmountOnExit>
                                <Link to="/general" className={classes.link}>
                                    <List component="div" disablePadding>
                                        <ListItem button className={classes.nested}>
                                            <ListItemIcon style={{color:'#2ba2ff'}}>
                                                <DetailsIcon/>
                                            </ListItemIcon>
                                            <ListItemText primary="General"/>
                                        </ListItem>
                                    </List>
                                </Link>
                            </Collapse>
                            <Divider variant="inset" component="li"/> */}
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <Link to="/main" className={classes.link}>
                                    <List component="div" disablePadding onClick={navigateToChat}>
                                        <ListItem button className={classes.nested}>
                                            <ListItemIcon style={{color:'#2ba2ff'}}>
                                                <ChatIcon/>
                                            </ListItemIcon>
                                            <ListItemText primary="Back to chat"/>
                                        </ListItem>
                                    </List>
                                </Link>
                            </Collapse>
                        </Link>
                        <Divider variant="inset" component="li"/>
                        <Link to="/signout" className={classes.link} onClick={signOut}>
                            <ListItem button>
                                <ListItemIcon style={{color:'#2ba2ff'}}>
                                    <ExitToAppIcon/>
                                </ListItemIcon>
                                <ListItemText primary={"Signout"}/>
                            </ListItem>
                        </Link>
                        <Divider variant="inset" component="li"/>
                    </List>
                </Drawer>
                <Switch>
                    <Route path="/account">
                        <Account/>
                    </Route>
                    <Route path="/general">
                        <General/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default SettingsPage;