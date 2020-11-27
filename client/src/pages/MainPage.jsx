import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CustomNavbar from '../components/Navbar';
import LoggedInUserCard from '../components/LoggedInUserCard'
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign:"center"
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function MainPage() {
  const classes = useStyles();

  return (
    <>
    <div className={classes.root}>
      <CustomNavbar/>
      <Grid container spacing={3}>
         <Grid item xs={3}>
          <Paper className={classes.paper}>
          <LoggedInUserCard />
         
          </Paper>
        </Grid>
        <Grid item xs={9}>
          {/* <Paper className={classes.paper}>xs=3</Paper> */}
          <Container>
            
          </Container>
        </Grid>
        
      </Grid>
    </div>
    </>
  );
}
