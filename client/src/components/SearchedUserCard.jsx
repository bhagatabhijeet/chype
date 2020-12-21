import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: 8,
    backgroundColor:'transparent',
    color:'blue',
    boxSizing:'border-box',
    padding:0,    
  },
   
  icon: {
    marginBottom: '0',
  },
  header: {
    fontSize: 8,
    backgroundColor:'transparent',
    color:'black'
  }
}));

export default function SearchedUserCard(props) {
  
  const classes = useStyles();
  
  const handleClick = (event) => {    
    props.addFriendHandler(props.data._id);
  };

 

  return (
      <div >
        <Card  className={classes.root}>
        <CardHeader
          className={classes.header}
          component="div"
          titleTypographyProps={{variant:'body2' }}
          action={    
            props.data.isFriend?     
            <IconButton aria-label="settings" className={classes.icon} onClick={handleClick} disabled>             
              <AddCircleIcon style={{color: 'grey'}}/>
            </IconButton>:
            <IconButton aria-label="settings" className={classes.icon} onClick={handleClick}>             
            <AddCircleIcon style={{color: 'blue'}}/>
          </IconButton>

          }

          title={`${props.data.firstName} ${props.data.lastName}`}
          subheader={`${props.data.email}`}
        />
        
      </Card>
    </div>
  );
}
