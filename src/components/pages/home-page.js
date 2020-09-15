import React from 'react';
import FormSendRequest from '../forms/form-send-request'
import FormWebsocket from '../forms/form-websocket'
import History from '../history'
import Messages from '../messages'
export default function HomePage() {
    return (
      <div>
        <FormSendRequest/>
        <FormWebsocket/>
        <History/>
        <Messages/>
      </div>
    );
}