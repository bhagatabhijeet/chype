import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles,withStyles  } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import ChypeLogoTrans from "../assets/images/new.png";
import SignUpBgImg from '../assets/images/signup-background.jpg';
import HomePageFooter from "../components/HomePageFooter";
import IntlTelInput from "react-intl-tel-input";
import LanguOption from "./LanguOption";
import "react-intl-tel-input/dist/main.css";


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',    
  },
  gridItemBg:{
    backgroundColor:'#fff',
  },
  image: {
    backgroundImage: `url(${SignUpBgImg})`,
    backgroundRepeat: 'no-repeat',
    // backgroundColor:
    //   theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',    
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',   
    // backgroundColor:'#2ba2ff',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "#2ba2ff !important"
    
  },
  fieldSet:{
    color:'black'
  }
}));

const StyledTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#2ba2ff',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#2ba2ff',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#1e1e1e',
      },
      '&:hover fieldset': {
        borderColor: '#2ba2ff',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#2ba2ff',
      },
    },
  },
    
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    // borderRadius: 3,
    // border: 0,
    // color: 'white',
    // height: 48,
    // padding: '0 30px',
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  
  
})(TextField);

export default function SignUpNew() {
  const classes = useStyles();

  

  return (
      <div style={{background:'linear-gradient(#ffffff 20%,#56b5ff 20%,#2ba2ff 60%)'}}>
      <Grid container component="main" className={classes.root} spacing={0}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image}>
          <Typography variant="h4" align='center' style={{color:'#eddf4b',marginTop:40,fontWeight:800}}>
            We are excited to see you onboard. Come on in!
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={1} square direction='column' alignItems='center'>
        <div className={classes.paper}>
          {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar> */}
          <img src={ChypeLogoTrans} alt="LogoTransImage" height="75px" />
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          {/**NEW FORM */}
          <form className={classes.form} noValidate>
            <StyledTextField
              autoComplete="fname"
              name="firstName"
              variant="outlined"
              margin="dense"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus              
            />
            <StyledTextField
                  variant="outlined"
                  margin="dense"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
            <StyledTextField
              variant="outlined"
              margin="dense"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"              
            />
            <StyledTextField
              variant="outlined"
              margin="dense"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <StyledTextField
                  variant="outlined"
                  margin="dense"
                  fullWidth
                  name="phone"
                  label="phone"
                  type="text"
                  id="phone"
                  autoComplete="phone"
                />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="btn-black-white"            
              
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item xs>
              <Link href="/" variant="body2">
                 Home
                </Link>
              </Grid>
              <Grid item>
              <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
          {/*NEW FORM END*/}
          
        </div>
        {/* <Box mt={5}>
        <Copyright />
      </Box> */}
      </Grid>
      </Grid>
      {/* <div style={{background:'linear-Gradient(#ffffff,#2ba2ff)'}}>  */}
      <HomePageFooter />

      {/* </div> */}
      </div>
  );
}
