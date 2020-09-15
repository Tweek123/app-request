const initialState = {
    messages: [],
    websocket: null
}

export default function reducer(state = initialState, action) {
    switch (action.type) {          
        case "CONNECT_WEBSOCKET":
        return {...state}
        case "LOAD_WEBSOCKET_MESSAGE":
        state.messages.push(action.message);
        return {...state, messages: [...state.messages]}
        case "LOAD_WEBSOCKET":
        state.websocket = action.websocket;
        return {...state}
        case "DISCONNECT_WEBSOCKET":
        if(state.websocket) {
            state.websocket.close();
        }
        return {...state}

        default:
          return state;
      }
  }