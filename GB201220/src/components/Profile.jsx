import React from 'react';
import '../styles/styles.css'

class Profile extends React.Component {
    render() {
        return (
            <form class="message-field">  
            <label>
                Nickname: User
            </label><br /><br />
            <label>
                Пол:	Мужской
            </label><br /><br />
            <label>
                Последний раз в чате:	Сейчас онлайн
            </label><br /><br />
            <label>
                Сообщений в «общак»:	48 297
            </label><br /><br />
            <label>
                Сообщений всего:	51 482
            </label><br /><br />
            <label>
                Входов в чат:	547
            </label>
            </form>
        )
      }
}

export default Profile;