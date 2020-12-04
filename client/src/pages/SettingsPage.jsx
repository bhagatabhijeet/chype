import React from 'react';
import { makeStyles } from "@material-ui/core/styles"
import Grid from '@material-ui/core/Grid';
import {
    BrowserRouter as Router,
    Switch, Route, Link
} from "react-router-dom";

import {
    Drawer, List, ListItem,
    ListItemIcon, ListItemText,
    Container, Typography,
} from "@material-ui/core";

import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

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
    container: {

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
    }
}))

function SettingsPage(props) {
    const classes = useStyles();
    return (
        <Router>
            <div style={{ display: 'flex' }} className={classes.root}>
                <Drawer
                    style={{ width: '220px' }}
                    variant="persistent"
                    anchor="left"
                    open={true}
                    classes={{ paper: classes.drawerPaper }}
                >
                    <List className={classes.list}>
                        <Link to="/settings" className={classes.link}>
                            <ListItem button>
                                <ListItemIcon>
                                    <SettingsIcon />
                                </ListItemIcon>
                                <ListItemText primary={"settings"} />
                            </ListItem>
                        </Link>
                        <Link to="/signout" className={classes.link}>
                            <ListItem button>
                                <ListItemIcon>
                                    <ExitToAppIcon />
                                </ListItemIcon>
                                <ListItemText primary={"signout"} />
                            </ListItem>
                        </Link>
                    </List>
                </Drawer>
                <Switch>
                    <Route  path="/settings">
                        <Grid container spacing={3} className={classes.grid}>
                            <Grid item xs={6}>
                                <Typography variant="h3" gutterBottom>
                                    settings
            </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>
                            </Grid>
                        </Grid>
                    </Route>
                    <Route  path="/signout">
                        <Grid container spacing={3} className={classes.grid}>
                            <Grid item xs={6}>
                                <Typography variant="h3" gutterBottom>
                                    sign out
            </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </Typography>
                            </Grid>
                        </Grid>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}


export default SettingsPage;
