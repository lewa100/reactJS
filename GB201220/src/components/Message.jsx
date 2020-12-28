import React from 'react';

const Message = ({user, msg}) => <p>{user}: <span>{msg}</span></p>;
export default Message;