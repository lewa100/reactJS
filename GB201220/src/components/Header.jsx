import React from 'react';
import PropTypes from 'prop-types'
import '../styles/styles.css';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import {addChat} from "../redux/actions";
import { connect } from "react-redux";

class Header extends React.Component {
    render() {
      const {chatId, chats, profile} = this.props;
        return (
          <div className="header">
            <div>
              <Button variant="contained" color="secondary" onClick={this.props.AddChat}>
                  +
              </Button>
            </div>
            <span className="header-text" style={ { fontSize: '20px' } }>{ chats[`${chatId}`].title }({profile.nickname})</span>
            <div className="profile">
              <Link to="/profile/">
                <Button variant="contained" color="primary">
                  Profile
                </Button>
              </Link>
            </div>
          </div>

        )
      }
}

Header.propTypes = {
  chatTitle: PropTypes.string,
};

Header.defaultProps = {
  chatTitle: "Chat Empty",
};

const mapStateToProps = reducer => {
  const store = reducer.ChatReducer
  return {
    chatId: store.chatId,
    chats: store.chats,
    profile: store.profile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    AddChat: () => dispatch(addChat())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);