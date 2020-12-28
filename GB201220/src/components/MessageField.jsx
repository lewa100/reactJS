import React from 'react';

import Message from './Message.jsx';

const MessageField = ({chat}) => chat.map((text) => <Message user={text.user} msg={text.msg}/>);
export default MessageField;