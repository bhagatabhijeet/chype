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
import {useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    drawerPaper: {
        width: 'inherit',
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
        color: theme.palette.text.primary
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

function SettingsPage(props) {
    const classes = useStyles();
    const userReduxState = useSelector(state=>state.user);

    const [open, setOpen] = React.useState(true);

    if (!userReduxState.loggedIn) {
        return <Redirect to="/"/>;
    }

    const handleClick = () => {
        setOpen(!open);
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
                                <ListItemIcon>
                                    <SettingsIcon/>
                                </ListItemIcon>
                                <ListItemText primary={"Settings"}/>
                                {open ? <ExpandLess/> : <ExpandMore/>}
                            </ListItem>
                            <Collapse in={open} timeout="auto" unmountOnExit>
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
                            </Collapse>
                            <Divider variant="inset" component="li"/>
                            <Collapse in={open} timeout="auto" unmountOnExit>
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
                            </Collapse>
                        </Link>
                        <Divider variant="inset" component="li"/>
                        <Link to="/signout" className={classes.link}>
                            <ListItem button>
                                <ListItemIcon>
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
                    <Route path="/signout">
                        <Typography variant="h3" gutterBottom>
                            sign out
                        </Typography>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default SettingsPage;