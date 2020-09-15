import reducer from '../../reducers/websocket-reducer';
import * as actions from '../../actions/actions';

describe('add message in messages', () => {
    it('add message', () => {          
         const messages = [
            {message: "message"},
            {message: "message"},
            {message: "message"},
        ]

        const resultMessages = [
            {message: "message"},
            {message: "message"},
            {message: "message"},
            {message: "message"}
        ]
        
      expect(
        reducer({messages}, actions.loadWebsocketMessage(messages[0]))
      ).toEqual({messages: resultMessages})
    })

  });