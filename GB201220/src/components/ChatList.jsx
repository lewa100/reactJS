// import React from 'react';
// import '../styles/styles.css';
// import { List } from '@material-ui/core';

// class ChatList extends React.Component {
//     // constructor(props) {
//     //     super(props);
//     // }

//     render() {
//         return (
//           // <div class="chat-list">
//           //   <ul>
//           //     <li>Item 1</li>
//           //     <li>Item 2</li>
//           //     <li>Item 3</li>
//           //     <li>Item 4</li>
//           //     <li>Item 5</li>
//           //   </ul>
//           // </div>
//           <List />
//         )
//       }
// }

// export default ChatList;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '30%',
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function ChatList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemText primary="Chat 1" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Chat 2" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Chat 3" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Chat 4" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Chat 5" />
        </ListItem>
      </List>
    </div>
  );
}