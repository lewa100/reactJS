import React from 'react';
import {connect} from 'react-redux';
import '../styles/styles.css';
import {loadProfile} from '../redux/actions';

class Profile extends React.Component {
    componentDidMount() {
        fetch('/api/profile.json'
        ).then(body => body.json()).
        then(item => {
                let prof = {
                                nickname:item.nickname,
                                sex:item.sex,
                                last_vizit:item.last_vizit,
                                countAllMsg:item.countAllMsg,
                                connectToChat:item.connectToChat
                        }
                this.props.LoadProfile(prof);
        })
    }

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

const mapDispatchToProps = dispatch => {
    return {
      LoadProfile: (profile) => dispatch(loadProfile(profile)),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Profile);