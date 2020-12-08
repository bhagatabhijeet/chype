import ChooseLangu from '../components/ChooseLangu';
import { Grid,Paper } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme,ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        // fontFamily: 'Comic Sans MS',
        fontSize: '2rem',
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
      padding: '25px',
    },
    
}))

function General() {
   const classes = useStyles();
    return (
        <div  className={classes.root}>
            <ThemeProvider theme={theme}>
                <Paper >
            <Grid container spacing={24} >
                <Grid item xs={12}>
                    <ChooseLangu />
                </Grid>
            </Grid>
            </Paper>
            </ThemeProvider>
        </div >
    );
}

export default General;