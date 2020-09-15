import {combineReducers } from 'redux'
import requestReducer from './request-reducer';
import websocketReducer from './websocket-reducer';
export default combineReducers({
    requestReducer,
    websocketReducer
  })