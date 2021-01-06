import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '30%',
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ChatList(props) {
  const classes = useStyles();
  const chList = props['list'];
  var listItems = Object.keys(chList).map((key) => {
    if (key != 0) {
      return (<Link to={`/chat/${key}/`}>
      <ListItem button>
        <ListItemText primary={chList[key].title} />
      </ListItem>
    </Link>)
    }
  })
  
  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        {listItems}
      </List>
    </div>
  );
}