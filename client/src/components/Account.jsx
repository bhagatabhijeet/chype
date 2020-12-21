import React, { useState } from "react";
import { Grid, Paper, Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import WallpaperTwoToneIcon from "@material-ui/icons/WallpaperTwoTone";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import EmailIcon from "@material-ui/icons/Email";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import { languages } from "../assets/languages";
import { useSelector } from "react-redux";
import axios from "axios";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Roboto",
    fontWeightLight: 300,
    fontWeightBold: 700,
    fontSize: 16,
  },
  spacing: 20,
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "40px",
    textAlign: "center",
    padding: "25px",
  },
  typography: {
    fontFamily: "Roboto",
    fontWeightLight: 300,
    fontWeightBold: 700,
    fontSize: 16,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "white",
  },
}));

function Account(props) {
  const classes = useStyles();
  const ReduxUserState = useSelector((state) => state.user);
  const [lang, setLang] = useState([]);
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;

    axios.patch(
      encodeURI(`/api/user/${ReduxUserState.id}`),
      {
        language: selectedLanguage,
      },
      { header: { authorization: `${ReduxUserState.token}` } }
    );

    setLang(selectedLanguage);
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <ThemeProvider theme={theme}>
          <Paper elevation={3} className={classes.paper}>
            <Grid container spacing={24} className={classes.grid}>
              <Grid item xs={12}>
                <Typography className={classes.typography}>
                  CHYPE PROFILE
                </Typography>
                <List component="nav" style={{ color: "#424242" }}>
                  <ListItem>
                    <ListItemIcon>
                      <WallpaperTwoToneIcon />
                    </ListItemIcon>
                    <ListItemText primary="Profile picture" />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
            <Divider variant="middle" />
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <List component="nav">
                  <ListItem>
                    <ListItemIcon>
                      <AccountBoxIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Chype Name"
                      secondary={`${ReduxUserState.firstName} ${ReduxUserState.lastName}`}
                    />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
            <Divider variant="middle" />
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <List component="nav">
                  <ListItem>
                    <ListItemIcon>
                      <EmailIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Email"
                      secondary={ReduxUserState.email}
                    />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
            <Divider variant="middle" />
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <List component="nav">
                  <ListItem>
                    <ListItemText primary="Select Language For Translated Messages" />
                    <FormControl>
                      <Select
                        displayEmpty
                        onChange={handleLanguageChange}
                        value={lang}
                        input={<Input />}
                        MenuProps={MenuProps}
                        inputProps={{ "aria-label": "Without label" }}
                        style={{ marginBottom: 5 }}
                      >
                        <MenuItem disabled value="">
                          <em>Language</em>
                        </MenuItem>
                        {languages.map((language) => (
                          <MenuItem key={language.label} value={language.value}>
                            {language.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Paper>
        </ThemeProvider>
      </Container>
    </div>
  );
}

export default Account;
