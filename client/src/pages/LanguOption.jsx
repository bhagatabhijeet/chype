import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { useState } from 'react';

const languages = [
    {
        value: 'en',
        label: 'English'
    },
    {
        value: 'hi',
        label: 'Hindi'
    },
    {
        value: 'fa',
        label: 'Persian'
    },
    {
        value: 'zh',
        label: 'Chinese'
    },
    {
        value: 'ru',
        label: 'Russian'
    },
    {
        value: 'es',
        label: 'Spanish'
    },
    {
        value: 'de',
        label: 'German'
    },
    {
        value: 'ko',
        label: 'Korean'
    },
    {
        value: 'it',
        label: 'Italian'
    },
    {
        value: 'ar',
        label: 'Arabic'
    },
    {
        value: 'ja',
        label: 'Japanese'
    },
    {
        value: 'fr',
        label: 'French'
    },
    {
        value: 'te',
        label: 'Telugu'
    },
]

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    margin: '1.5rem 0',
    marginBottom: '1.5rem'
    },
}));

export default function LanguOption() {
    const classes = useStyles();
    const [language, setLanguage] = useState('en');
    const handleChange = (event) => {
        setLanguage(event.target.value);
    };
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField
                id="standard-select-language"
                onChange={handleChange}
                select
                label="Select"
                value={language}
                helperText="Please select your language"
                variant="outlined"
            >
                {languages.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>

        </form>
    );
}