import React from 'react';
import { Typography, Grid, Avatar,Divider,Box,Link } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import chypeTransLogo from "../assets/images/chypeLogo-trans.png";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  divider: {
    // Theme Color, or use css color in quote
    backgroundColor: "#dff3fc",
  },
  photoLink:{
    borderRadius:'50%'
  }
}));

export const HomePageFooter = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
    <Grid
      container
      direction="row"
      style={{
        minHeight: "20vh",
        backgroundColor: "#3f47cc",
        color: "#d0effc",
        fontFamily:'Roboto'
      }}
      justify="space-evenly"
      alignItems="center"
    >
      <Grid item lg={4} textAlign="center">
        <Box mb={3}>
          <Link
            href="https://github.com/bhagatabhijeet/chype"
            color="inherit"
            target="_blank"
          >
            <GitHubIcon />
          </Link>
        </Box>
        <Box mb={3}>
          <Typography variant="caption">MIT License</Typography>
        </Box>
      </Grid>

      <Divider orientation="vertical" flexItem className={classes.divider} />

      <Grid item lg={4} textAlign="center">
        <Box mb={3}>
          <Typography variant="caption">
            <img
              src={chypeTransLogo}
              alt="logoImg"
              width="40px"
              height="40px"
            />
          </Typography>
        </Box>
        
      </Grid>

      <Divider orientation="vertical" flexItem className={classes.divider} />

      <Box textAlign="center">
        <Box mb={3}>
          <Typography variant="body1" display="block">
            The Team
          </Typography>
        </Box>
        <Grid item>
        <Typography variant="caption" display="block">
            <Avatar alt="Abhijeet Bhagat" src="https://avatars2.githubusercontent.com/u/7333004?s=460&u=9cf90dd7ea3c9c588de9eb333f3e38f42cd3dd1e&v=4" />
            <Link
              href="https://github.com/bhagatabhijeet"
              color="inherit"
              target="_blank"
              
            >
              
              Abhijeet Bhagat
            </Link>
          </Typography>
          <Typography variant="caption" display="block">
            <Link
              href="https://github.com/mmaciasjr"
              color="inherit"
              target="_blank"
            >
              Mario Macias
            </Link>
          </Typography>
          <Typography variant="caption" display="block">
            <Link
              href="https://github.com/setaremehr"
              color="inherit"
              target="_blank"
            >
              Setare Mehr
            </Link>
          </Typography>
          <Typography variant="caption" display="block">
            <Link
              href="https://github.com/sotrnguy92"
              color="inherit"
              target="_blank"
            >
              Son Nguyen
            </Link>
          </Typography>

        </Grid>
        <Box mb={3}>
          
        </Box>
      </Box>
      
    </Grid>
    <Divider/>
    <Grid container style={{
        minHeight: "30px",
        backgroundColor: "#1e1e1e",
        color: "#d0effc",
        fontFamily:'Roboto'
      }}
      justify="center"
      alignItems="center">
      <Grid item>
      <img src={chypeTransLogo} alt="logoImg"/>
      </Grid>
      <Grid item>
      {/* <Box mb={3}> */}
          <Typography variant="caption">
            &copy; Chype Team - {new Date().getFullYear()}
          </Typography>
        {/* </Box> */}
      </Grid>
    </Grid>
    </React.Fragment>
  );
};
