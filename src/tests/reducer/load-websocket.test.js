import reducer from '../../reducers/websocket-reducer';
import * as actions from '../../actions/actions';

describe('load websocket in state', () => {
    it('load websocket', () => {              
        const websocket = new WebSocket("wss://ws.coincap.io/prices?assets=ALL");
    return expect(
       reducer({}, actions.loadWebsocket(websocket))
     ).toEqual({websocket})
    })

  });


