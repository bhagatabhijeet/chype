// import React from 'react';
// import { Typography, Grid, Avatar,Divider,Box,Link } from "@material-ui/core";
// import GitHubIcon from "@material-ui/icons/GitHub";
// import chypeTransInverseLogo from "../assets/images/new_inverse_trans.png";
// import chypeTransLogo from "../assets/images/new_trans.png";
// import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import socketIcon from "../assets/images/Socket-IO-Logo.png";
import MUIIcon from "../assets/images/mui-icon.png";
import ReactIcon from "../assets/images/React-Logo.png";
import MongoIcon from "../assets/images/mongo-logo.png";
import GithubIcon from "@material-ui/icons/GitHub";
import Tooltip from "@material-ui/core/Tooltip";
import Box from "@material-ui/core/Box";
import chypeTransInverseLogo from "../assets/images/new_inverse_trans.png";
import chypeTransLogo from "../assets/images/new_trans.png";
import axios from "axios";
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import Badge from "@material-ui/core/Badge";
import StarBorderIcon from '@material-ui/icons/StarBorder';

// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';


function Copyright() {
    return (
        <Typography variant="body2" style={{ color: "#ffffff", margin: 10 }}>
            {"Copyright © "}
            <Link
                color="inherit"
                href="https://github.com/bhagatabhijeet/chype"
                target="_blank"
            >
                Chype Team
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}



const useStyles = makeStyles((theme) => ({

    root: {
        minHeight: "10vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        textAlign: "center",
        marginBottom: '20px',
        borderRadius: '15px',
        // width: '1600px',
         width: '1230px',
    },
    footerBottom: {
        backgroundColor: "#1e1e1e",
        color: "#ffffff",
        marginTop: 45

    },
    item: {
        display: "flex",
        flexDirection: "row",
        height: "180px",
        justifyContent: "center",
        alignItems: "stretch",
    },
    divider: {
        backgroundColor: "#c9c1c1",
        margin: 15,
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        color: 'white',
        marginTop: '0px',
    },
    expandOpen: {
        transform: 'rotate(180deg)',
        
    },
}));



export default function MainFooter() {
    const classes = useStyles();
    const [forks, setForks] = useState()
    const [stars, setStars] = useState()


    const githubContent = async () => {
        const { data } = await axios.get(`https://api.github.com/repos/bhagatabhijeet/chype`)
        console.log(data)
        setForks(data.forks_count)
        setStars(data.stargazers_count);
    }
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    useEffect(() => {
        githubContent();
    }, [])
    return (
        <Grid container  >
            <Grid container item sm={12} xs={12} justify="space-between">
        <Card className={classes.root}>
            <CardContent className={classes.footerBottom}>
                <Grid item sm={5} xs={12}  justify="center">
                
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
                </Grid>
                <Grid item sm={5} xs={12}  justify="center">
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <Typography variant="body2" style={{ color: "#ffffff", margin: 10 }}>
                        GitHub {'  '}
                        <Badge badgeContent={forks} color="primary">
                            <AccountTreeIcon />
                        </Badge>
                        {"  "}
                        <Badge badgeContent={stars} color="primary">
                            <StarBorderIcon />
                        </Badge>
                    </Typography>
                    <Copyright />
                    <Link
                        color="inherit"
                        href="https://github.com/bhagatabhijeet/chype"
                        target="_blank"
                    >
                        <GithubIcon style={{ fontSize: 34 }} />
                    </Link>
                </Collapse>
                </Grid>
            </CardContent>
        </Card>
        
        </Grid>
        </Grid>
    );
}
