import React from 'react';
import PropTypes from 'prop-types'
import '../styles/styles.css';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

class Header extends React.Component {
    render() {
        return (
          <div className="header">
            <div>
              <Button variant="contained" color="secondary" onClick={this.props.addChat}>
                  +
              </Button>
            </div>
            <span className="header-text" style={ { fontSize: '20px' } }>{ this.props.chatTitle }</span>
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

export default Header;