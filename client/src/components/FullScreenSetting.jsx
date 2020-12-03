import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { useState } from 'react';
import Menu from '@material-ui/core/Menu';
import Fade from '@material-ui/core/Fade';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const useStyle = makeStyles(theme => ({
    app: {
        position: 'relative',
    },
}));
function ListItemLink(props) {
    const { icon, primary, to } = props;

    const renderLink = React.useMemo(
        () => React.forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />),
        [to],
    );

    return (
        <li>
            <ListItem button component={renderLink}>
                {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
                <ListItemText primary={primary} />
            </ListItem>
        </li>
    );
}
ListItemLink.propTypes = {
    icon: PropTypes.element,
    primary: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};

export default function FullScreenSetting(props) {
    const classes = useStyle();
    const [openB, setOpenB] = useState(false);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    // const handleClickOpen = () => {
    //     setOpenB(true);
    // };

    return (
        <div>
            <IconButton
                aria-label="settings"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreHorizIcon />
            </IconButton>
            <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
            </Menu>
            <Dialog fullScreen open={open} onClose={handleClose} >
                <AppBar className={classes.app}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>

                <List aria-label="secondary mailbox folders">
                    <ListItemLink to="/settings" primary="Settings"/>

                </List>

                <List aria-label="secondary mailbox folders">
                    <ListItemLink to="/signout" primary="Sign Out" secondary="" />
                </List>

            </Dialog>

        </div>
    );
}

