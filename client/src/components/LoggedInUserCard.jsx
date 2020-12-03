import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import MenuBar from './Menu';


const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);

const useStyles = makeStyles((theme) => ({
  root: {
    width: 360,
    height: 85,
    fontSize: '1rem',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
    marginBottom: '0',
  },
  icon: {
    marginBottom: '0',
  },
  header: {
    fontSize: '10px',
  }
}));

export default function LoggedInUserCard() {
  const classes = useStyles();
  return (
    <div >
      <Card style={{ paddingBottom: '1px' }} className={classes.root}>
        <CardHeader
          className={classes.header}
          avatar={
            <StyledBadge
              overlap="circle"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              variant="dot"
            >
              <Avatar aria-label="recipe" className={classes.avatar}>
                R
          </Avatar>
            </StyledBadge>
          }
          action={
            <MenuBar />
          }
          title="Abhijeet Bhagat"
          subheader="This is my Status"
        />
        <Typography variant="subtitle1" color="textSecondary" style={{ marginTop: '0', fontSize: '10px' }}>
          This is my last chat
        </Typography>
      </Card>
    </div>
  );
}
