
import rootReducer from '../../reducers/reducer';
import * as sagas from '../../sagas/sagas';
import { expectSaga } from 'redux-saga-test-plan';
import * as actions from '../../actions/actions';
import * as Api from '../../api/Api';
import * as matchers from 'redux-saga-test-plan/matchers';



  describe('integration send request test', () => {

    const requests = {
      requestGET: {
          type: 'GET',
          url: 'testurl'
      },
      requestPOST: {
          type: 'POST',
          url: 'testurl',
          data: 'testdata'
      },
      requestPUT: {
          type: 'PUT',
          url: 'testurl',
          data: 'testdata'
      },
      requestDELETE: {
          type: 'DELETE',
          url: 'testurl',
          data: 'testdata'
      }
  }


    it('should load GET request  in history', async () => {
      const response = {
          status: 200
      }
      
      const history = [
          {request: {...requests.requestGET}, response}
        ];

    const { storeState } = await expectSaga(sagas.watchSendRequest, requests.requestGET)
    .withReducer(rootReducer)
    .provide([
      [matchers.call.fn(Api.fetchGET), {request: {...requests.requestGET}, response}],
      ])
     .dispatch(actions.addRequest(requests.requestGET))
     .put(actions.shiftStack())
     .put.like({ action: actions.addRequestInHistory({response,request: requests.requestGET}) })
     .run()

     expect(storeState.requestReducer.history).toMatchObject(history);
    })

    it('should load POST requests in history', async () => {
      const response = {
          status: 200
      }
      



    const history = [
          {request: {...requests.requestGET}, response},
          {request: {...requests.requestPOST}, response}
        ];
        
    const { storeState } = await expectSaga(sagas.watchSendRequest, requests.requestPOST)
    .withReducer(rootReducer)
    .provide([
      [matchers.call.fn(Api.fetchPOST), {request: {...requests.requestPOST}, response}],
      ])
     .dispatch(actions.addRequest(requests.requestPOST))
     .put(actions.shiftStack())
     .put.like({ action: actions.addRequestInHistory({response,request: requests.requestPOST}) })
     .run()

     expect(storeState.requestReducer.history).toMatchObject(history);
    })

    it('should load PUT requests in history', async () => {
      const response = {
          status: 200
      }
      
    const history = [
          {request: {...requests.requestGET}, response},
          {request: {...requests.requestPOST}, response},
          {request: {...requests.requestPUT}, response}
        ];
        
    const { storeState } = await expectSaga(sagas.watchSendRequest, requests.requestPUT)
    .withReducer(rootReducer)
    .provide([
      [matchers.call.fn(Api.fetchPUT), {request: {...requests.requestPUT}, response}],
      ])
     .dispatch(actions.addRequest(requests.requestPUT))
     .put(actions.shiftStack())
     .put.like({ action: actions.addRequestInHistory({response,request: requests.requestPUT}) })
     .run()

     expect(storeState.requestReducer.history).toMatchObject(history);
    })

    it('should load DELETE requests in history', async () => {
      const response = {
          status: 200
      }
  
    const history = [
          {request: {...requests.requestGET}, response},
          {request: {...requests.requestPOST}, response},
          {request: {...requests.requestPUT}, response},
          {request: {...requests.requestDELETE}, response}
        ];
        
    const { storeState } = await expectSaga(sagas.watchSendRequest, requests.requestDELETE)
    .withReducer(rootReducer)
    .provide([
      [matchers.call.fn(Api.fetchDELETE), {request: {...requests.requestDELETE}, response}],
      ])
     .dispatch(actions.addRequest(requests.requestDELETE))
     .put(actions.shiftStack())
     .put.like({ action: actions.addRequestInHistory({response,request: requests.requestDELETE}) })
     .run()

     expect(storeState.requestReducer.history).toMatchObject(history);
    })

    
})

    