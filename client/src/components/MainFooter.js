// import React from 'react';
// import { Typography, Grid, Avatar,Divider,Box,Link } from "@material-ui/core";
// import GitHubIcon from "@material-ui/icons/GitHub";
// import chypeTransInverseLogo from "../assets/images/new_inverse_trans.png";
// import chypeTransLogo from "../assets/images/new_trans.png";
// import { makeStyles } from "@material-ui/core/styles";
import React, {useEffect, useState} from "react";
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
        display: "flex",
        flexDirection: "column",
        minHeight: "45vh",
    },
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    },
    footerBottom:{
        backgroundColor: "#1e1e1e",
        color: "#ffffff",
        marginTop: 80

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
}));



export default function MainFooter() {
    const classes = useStyles();
    const [forks, setForks] = useState()
    const [stars, setStars] = useState()


    const githubContent = async () => {
        const {data} = await axios.get(`https://api.github.com/repos/bhagatabhijeet/chype`)
        console.log(data)
        setForks(data.forks_count)
        setStars(data.stargazers_count);
    }

    useEffect(() => {
        githubContent();
    },[])
    return (
        <footer>
            {/** developers Grid Start */}
            <Grid
                // xs={12}
                // sm={12}
                style={{
                    flexDirection: "column",
                    alignItems: "stretch",
                    textAlign: "center",
                    width: "100%"
                }}
                container
                direction='row'
                className={classes.footerBottom}
            >
                <Grid item xs={12}>
                    <Grid item>
                        <Typography variant="body2" style={{color: "#ffffff", margin: 10}}>
                            GitHub {'  '}
                            <Badge badgeContent={forks} color="primary">
                                <AccountTreeIcon/>
                            </Badge>
                            {"  "}
                            <Badge badgeContent={stars} color="primary">
                                <StarBorderIcon/>
                            </Badge>
                        </Typography>
                        <Copyright />
                    </Grid>
                    <Grid item>
                        <Link
                            color="inherit"
                            href="https://github.com/bhagatabhijeet/chype"
                            target="_blank"
                        >
                            <GithubIcon style={{ fontSize: 34 }} />
                        </Link>
                        <Divider variant="inset" classes={{ root: classes.divider }} />
                    </Grid>
                </Grid>
            </Grid>
        </footer>
    );
}
