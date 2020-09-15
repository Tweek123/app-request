import React from "react";
import { useSelector } from 'react-redux';
import { dictElement } from "../utils"

const Messages = () =>  {
    const messages = useSelector(state => state.websocketReducer.messages);
    const messagesElements = (messages) => {
        return messages.map((message) => {
        return (<div className="messages__item">{dictElement(message)}</div>)
        })
    }
    
    return (
        <div className="messages">
            <h2>Messages Log</h2>
            {messagesElements(messages)}
        </div>
    );
}

export default Messages;