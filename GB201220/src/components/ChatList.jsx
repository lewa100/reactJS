import React from 'react';
import {List, ListItem, ListItemText, withStyles } from '@material-ui/core';
import { connect } from "react-redux";
import { push} from 'connected-react-router';
import PropTypes from "prop-types";
import {deleteChat} from '../redux/actions';

class ChatList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // changeBackGround(key){
  //   const {} = this.props;
  //   if (chats[key].flash){

  //   }
  // }

  goTo(link) {
    this.props.dispatch(push(link));
  };

  render() {
    const { classes, chats } = this.props;
    var listItems = Object.keys(chats).map((key) => {
      if (key != 0) {
        return (
          <div>
            <ListItem button selected={chats[key].selected}>
              <ListItemText primary={chats[key].title} onClick={() => this.goTo(`/chat/${key}`)}/>
              <button onClick={() => this.props.dispatch(deleteChat(key))}>X</button>
            </ListItem>
          </div>
        )
      }
    })
    return (
      <div className={classes.root}>
        <List component="nav" aria-label="main mailbox folders">
          {listItems}
        </List>
      </div>
    )
  }
}

ChatList.propTypes = {
  chats: PropTypes.object.isRequired,
  push: PropTypes.func.isRequired,
};

const styles = theme => ({
  root: {
    width: '30%',
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

const mapStateToProps = reducer => {
  const store = reducer.ChatReducer
  return {
    chats: store.chats
  };
};

// const mapDispatchToProps = dispatch => bindActionCreators({ push }, dispatch);

export default  withStyles(styles)(
                    connect(mapStateToProps)(ChatList)
                );