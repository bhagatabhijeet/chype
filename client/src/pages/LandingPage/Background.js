/* eslint-disable no-undef */
import { Grid } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
// import './style.css';

const useStyles = makeStyles((theme) => ({
    content: {
        // display: 'flex',
        alignItems: 'center',
        padding: 10,
        direction: 'column',
        justify: 'space-between',
        // marginRight: 10,
        // paddingLeft: theme.spacing(18),
    }, 
    button: {
        background: "linear-gradient(to right, #00dbde 0%, #fc00ff 100%)",
        borderRadius: 3,
        fontSize: 16,
        // color: white,
        marginTop: 30,
        height: 48,
        padding: ' 0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, 0.3)',
    },
    signUpButton: {
        background:'linear-gradient(to top, #50cc7f 0%, #f5d100 100%)',
        borderRadius: 3,
        fontSize: 16,
        marginTop: 30,
        height: 48,
        padding: ' 0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, 0.3)',
    }
}));
const Background = () => {
    const classes = useStyles();
    return (
        <div style={{backgroundImage: "linear-gradient(to top, #dfe9f3 0%, white 100%)", position:'cover'}}>
            <Grid container style={{ minHeight: '100vh' }}>
                <Grid item xs={12} sm={6}>
                    <img src="/images/cccc.jpg" alt="chype"
                        style={{ width: '100%', height: '100%', objectFit: 'fill' }}
                    />
                </Grid>

                <Grid container item xs={12} sm={6} className={classes.content} >
                    <div />
                    <form className={classes.content} noValidate autoComplete="off">
                        <div style={{ display: 'flex', flexDirection: 'column', minWidth: 300, maxWidth: 400, paddingLeft: 150 }}>
                            <Grid container justify='center'>
                                <img src="/images/chype Logo3.png" alt=""
                                    style={{ width: '70%', height: '50%' }} />
                            </Grid>
                            <TextField label='username' margin='normal' variant="outlined" />
                            <TextField label='password' margin='normal' variant="outlined" />
                            <Button className={classes.button}>Log in</Button>
                            <Button className={classes.signUpButton}>Sing up</Button>
                            <p style={{fontFamily: 'Raleway',fontSize: '1rem'}}>Interested in joining? </p>
                        </div>
                        <div />
                    </form>
                </Grid>
               
            </Grid>
        </div>
    );
};

export default Background;