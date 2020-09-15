import { put,  call, all, select, take, takeEvery  } from 'redux-saga/effects'
import {eventChannel} from 'redux-saga';
import * as Api from '../api/Api';
import * as actions from '../actions/actions'

export function* watchSendRequest() {
    yield takeEvery('ADD_REQUEST_IN_STACK', checkStack);
}

export function* watchConnectWebsocket() {
    yield takeEvery('CONNECT_WEBSOCKET', initializeWebSocketsChannel);
}

export function* checkStack() {
    const stack = yield select(state => state.requestReducer.stack)
    if(stack.length === 1)  {
        yield runStack();
    }
}
export function* runStack() {
    const stack = yield select(state => state.requestReducer.stack);
    const request = stack.pop();
    yield put(actions.popStack());
    yield requestSend(request);
    if(stack.length)  {
        yield requestSend(request);
    }
}

export function* requestSend(request) {
   try {
        const result = yield apiReducer(request.type, request.url, request.data);
        result.date = Date.now();
        yield put(actions.addRequestInHistory(result))   
    }
    catch(e) {
        console.error(e)
    }
}

function apiReducer(type, url, data) {
    switch(type) {
        case "GET":
        return call(Api.fetchGET, url, data);

        case "POST":
        return call(Api.fetchPOST, url, data);


        case "PUT":
        return call(Api.fetchPUT, url, data);

        case "DELETE":
        return call(Api.fetchDELETE , url, data);

        default:
            return null
    }
}

function createEventChannel(socket) {
    return eventChannel(emit => {
      socket.onmessage = (message) => {emit(JSON.parse(message.data))}
      return () => {
        socket.close();
      };
    });
  }


  function* initializeWebSocketsChannel(action) {
    try {
        yield put(actions.disconnectWebsocket());
        const websocket = new WebSocket(action.url);
        yield put(actions.loadWebsocket(websocket));
        const channel = yield call(createEventChannel, websocket);
        while (true) {
          const message = yield take(channel);
          yield put(actions.loadWebsocketMessage(message));
        }
    } catch(e) {
        console.error(e)
    }
  }
  
  


export function* rootSaga() {
    yield all([
        watchSendRequest(),
        watchConnectWebsocket()
    ])
  }