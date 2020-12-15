import { Grid, Paper, Divider,Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles"
import WallpaperTwoToneIcon from '@material-ui/icons/WallpaperTwoTone';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import EmailIcon from '@material-ui/icons/Email';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const theme = createMuiTheme({
    typography: {
        // fontFamily: 'Comic Sans MS',
        fontFamily: "Roboto",
        // fontSize: '2rem',
        fontWeightLight: 300,
        fontWeightBold: 700,
        fontSize: 16
    },
    // shape: {
    //     borderRadius: 30,
    // },
    // palette: {
    //     type: 'dark',
    // },
    spacing: 20


});


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '40px',
        // backgroundColor: theme.palette.background.paper,
        textAlign: 'center',
        padding: '25px',


    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        // marginTop: '40px',
        backgroundColor: ' #b0bec5',
         
    },
}))

function Account(props) {
    const classes = useStyles();

    return (
        <div className={classes.root} >
             <Container maxWidth="lg" >
            <ThemeProvider theme={theme}>
                <Paper elevation={3} className={classes.paper}>
                    <Grid container spacing={24} className={classes.grid}>
                        <Grid item xs={12}>
                            <Typography>
                                YOUR CHYPE PROFILE
                            </Typography>
                            <List component="nav" style={{ color: '#424242' }}>
                                <ListItem button >
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
                                <ListItem button>
                                    <ListItemIcon>
                                        <AccountBoxIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Chype Name" secondary="Setare mehr" />
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                    <Divider variant="middle" />
                    <Grid container spacing={24}>
                        <Grid item xs={12}>
                            <List component="nav">
                                <ListItem button>
                                    <ListItemIcon>
                                        <EmailIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Email" />
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </Paper>
            </ThemeProvider >
            </Container>
        </div>
    );
}


export default Account;