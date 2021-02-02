import React from 'react';
import {connect} from 'react-redux';
import '../styles/styles.css'

class Profile extends React.Component {
    render() {
        const {profile} = this.props;
        return (
            <form class="message-field">  
            <label>
                Nickname: {profile.nickname}
            </label><br /><br />
            <label>
                Пол:	{profile.sex}
            </label><br /><br />
            <label>
                Последний раз в чате:	{profile.last_vizit}
            </label><br /><br />
            <label>
                Сообщений всего:	{profile.countAllMsg}
            </label><br /><br />
            <label>
                Входов в чат:	{profile.connectToChat}
            </label>
            </form>
        )
      }
}

const mapStateToProps = reducer => {
    const store = reducer.ChatReducer
    return {
        profile: store.profile
    };
};

export default connect(mapStateToProps)(Profile);