import { createStore,combineReducers, applyMiddleware } from 'redux'
import requestReducer from './reducers/request-reducer';
import websocketReducer from './reducers/websocket-reducer';
import createSagaMiddleware from 'redux-saga'; 
import { rootSaga } from './sagas/sagas';
import rootReducer from './reducers/reducer'
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
  )

sagaMiddleware.run(rootSaga);

export default store;