export const addRequestInHistory = (request) => {
    return {type: "ADD_REQUEST_IN_HISTORY", request}
};
export const addRequest = (request) => { return {type: "ADD_REQUEST_IN_STACK", request}};
export const loadHistoryFromStorage = () => { return {type: "LOAD_HISTORY"}};
export const popStack = () => {return {type: "POP_STACK"}};
export const connectWebsocket = (url) => {return {type: "CONNECT_WEBSOCKET", url}};
export const loadWebsocketMessage = (message) => {return {type: "LOAD_WEBSOCKET_MESSAGE", message}};
export const loadWebsocket = (websocket) => {return {type: "LOAD_WEBSOCKET", websocket}}
export const disconnectWebsocket = () => {return {type: "DISCONNECT_WEBSOCKET"}}