import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import ChypeLogoTrans from "../assets/images/new.png";
import SignUpBgImg from "../assets/images/signup-background.jpg";
import HomePageFooter from "../components/HomePageFooter";
import AppBarMain from "../components/AppBarMain";
import "react-intl-tel-input/dist/main.css";
import { useState } from "react";
import axios from "axios";
import Parallax from '../components/animated/Parallax';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  gridItemBg: {
    backgroundColor: "transparent",
  },
  image: {
    backgroundImage: `url(${SignUpBgImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 0.7,
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "#2ba2ff !important",
  },
  fieldSet: {
    color: "black",
  },
}));

const StyledTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#2ba2ff",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#2ba2ff",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#1e1e1e",
      },
      "&:hover fieldset": {
        borderColor: "#2ba2ff",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#2ba2ff",
      },
    },
    error: {
      "&.MuiFormHelperText-root.Mui-error": {
        color: "red !important",
      },
  },
  },
})(TextField);

export default function SignInNew() {
  const classes = useStyles();
  const history = useHistory();

  const [formData, setFormData] = useState({   
    password: { text: "", errorText: "", error: false },
    email: { text: "", errorText: "", error: false }, 
  });

  const validations = () => {
    setFormData({
      ...formData,     
      email: {
        ...formData.email,
        errorText: formData.email.text === "" ? "email is required" : "",
      },
      password: {
        ...formData.password,
        errorText: formData.password.text === "" ? "password is required" : "",
      },
    });
    return !( 
      formData.email.text === "" ||
      formData.password.text === ""
    );
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (validations()) {
      const submit = async () => {
        const res = await axios.post("/auth/signin", {         
          email: formData.email.text,
          password: formData.password.text,
        });
        console.log(res.data);
        history.push('/main');
      };
      submit();
    }
  };
  
  const handlePasswordChange = (event) => {
    setFormData({
      ...formData,
      password: {
        ...formData.password,
        errorText: "",
        text: event.target.value,
      },
    });
  };
  const handleEmailChange = (event) => {
    setFormData({
      ...formData,
      email: { ...formData.email, errorText: "", text: event.target.value },
    });
  };
  
  return (
    <div
      style={{
        background:
          "linear-gradient(#ffffff 30%,#56b5ff 55%,#2ba2ff,#2ba2ff,#2ba2ff,#2ba2ff)",
      }}
    >
      
      <AppBarMain home signup/>
      <Grid container component="main" className={classes.root} spacing={0}>
        {/* <CssBaseline /> */}
        <Grid item xs={false} sm={4} md={7} >
          <div className="container">
          <Parallax/>
          </div>
         
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={20}
          square
          className={classes.gridItemBg}
        >
          <div className={classes.paper}>
            <img src={ChypeLogoTrans} alt="LogoTransImage" height="75px" />
            <Typography component="h1" variant="h5">
              Sign In
            </Typography>
            {/**NEW FORM */}
            <form className={classes.form} noValidate onSubmit={handleSubmit}>             
              <StyledTextField
                variant="outlined"
                margin="dense"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleEmailChange}
                helperText={formData.email.errorText}
                error={formData.email.errorText !== ""}
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
                onChange={handlePasswordChange}
                helperText={formData.password.errorText}
                error={formData.password.errorText !== ""}
              />
             
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className="btn-black-white"
                margin="dense"
              >
                Sign In
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
        </Grid>
      </Grid>
      <HomePageFooter />
    </div>
    
  );
}
