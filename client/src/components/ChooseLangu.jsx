import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
// import GTranslateIcon from '@material-ui/icons/GTranslate';
import LanguOption from '../pages/LanguOption';

const styles = theme => ({
    root: {
        width: '100%',
        fontFamily: "Roboto",
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    icon: {
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
    },
    details: {
        alignItems: 'center',
    },
    column: {
        flexBasis: '33.33%',
    },
    helper: {
        borderLeft: `2px solid ${theme.palette.divider}`,
        padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
    colorB: {
        backgroundColor: '#b0bec5',
    }
});


function ChooseLangu(props) {
    const { classes } = props;

    return (
        <div  >
            <Grid container spacing={24} >
            <Grid item xs={12}>
                <ExpansionPanel defaultExpanded className={classes.colorB}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <div className={classes.column}>
                            <Typography className={classes.heading}>Language</Typography>
                            {/* <GTranslateIcon /> */}

                        </div>
                        {/* <div className={classes.column}>
                            <Typography className={classes.secondaryHeading}>Select your language</Typography>
                        </div> */}
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.details}>
                        <div className={classes.column} />
                        <div className={classes.column}>
                            <LanguOption />
                        </div>
                    </ExpansionPanelDetails>
                    <Divider />
                    <ExpansionPanelActions>
                        <Button size="small">Cancel</Button>
                        <Button size="small" color="primary">
                            Save
                        </Button>
                    </ExpansionPanelActions>
                </ExpansionPanel>
            </Grid>
        </Grid>
        </div>
    );
}

ChooseLangu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChooseLangu);