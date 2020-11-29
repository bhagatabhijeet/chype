/* eslint-disable jsx-a11y/anchor-is-valid */
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { Link,NavLink } from 'react-router-dom';
import LanguOption from './LanguOption';
// import Form from 'react-bootstrap/Form'
import {
  Typography,
  Button,
  Grid,
  Checkbox,
  TextField,
  OutlinedInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles({
  container: {
    // background: 'linear-gradient(to right, #000000, #434343)',
    position: 'relative',
    justifyContent: 'center',
    zIndex: 5,
    display: 'grid',
  },
  form: {
    position: 'relative',
    padding: '2rem',
    width: '30rem',
    height: 'auto',
    // border: 'solid 2px ',
    marginTop: '70px', 
    alignItems: 'center',

  },
  input: {
    width: '100%',
    margin: '1.5rem 0',
    marginBottom: '1.5rem'
  },
  button: {
    width: '100%',
    height: '3rem',
    color: '#fafafa',
    background: '#37474f',
  },
  
})

export default function SignUp() {
  const [showPass, setShowPass] = useState({ showPassword: false });
  const classes = useStyle();

  const handlePass = () => {
    setShowPass({
      showPassword: !showPass.showPassword
    })
  }
  return (

    <div classname='App' style={{ background: 'linear-gradient(to right, #ada996, #f2f2f2, #dbdbdb, #eaeaea)'}}>
      
      <Grid container style={{ minHeight: '100vh' }} >
        <Grid item xs={12} sm={6}>
          <div className={classes.container} >
            {/* <Typography style={{ textAlign: 'center', color: '#999', margin: '2rem 0' }} variant='h4'>
              sign up with email
   </Typography> */}
            <div className={classes.form}>
              <form>
                <TextField
                
                  required={true}
                  style={{ marginBottom: '0.25rem' }}
                  className={classes.input}
                  label='First Name' variant='outlined'
                />
                <TextField
                  required={true}
                  className={classes.input}
                  label='Last Name' variant='outlined'
                />
                <IntlTelInput
                  preferredCountries={['us']}
                />
                <TextField
                  required={true}
                  style={{ marginBottom: '0.25rem' }}
                  className={classes.input}
                  label='Email' variant='outlined'
                />
                <FormControl variant='outlined' className={classes.input} placeholder='Require'>
                  <InputLabel required={true} >Password</InputLabel>
                  <OutlinedInput
                    type={showPass.showPassword ? 'text' : 'password'}
                    labelWidth={70}
                    endAdornment={
                      <InputAdornment position='end'>
                        <IconButton edge='end' onClick={handlePass}>
                          {showPass.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <LanguOption />
                {/* <>
            <Form.Text id="passwordHelpBlock" muted >
              Must be 8-20 characters long.
    </Form.Text>
          </> */}
                <div>
                  <Button
                    type='submit'
                    variant='contained'
                    className={classes.button}
                  >
                    Sign Up
            </Button>
                </div>
                <div className="FormField">
                  <Link to="/" className="FormField__Link">I'm already member</Link>
                </div>

              </form>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src="https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            style={{ width: '100%', height: '100%', objectFit: 'fill' }}
            alt="" />
        </Grid>
      </Grid>
    </div>


  );
}