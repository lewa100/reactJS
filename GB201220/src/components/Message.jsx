import React from 'react';

const Message = ({className, user, msg}) => 
        <div class={className}>
            <p><span>{msg}</span></p>
            <div className="message-sender">{ user }</div>
        </div>;
export default Message;