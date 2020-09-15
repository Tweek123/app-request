import reducer from '../../reducers/request-reducer';
import * as actions from '../../actions/actions';

describe('load history from storage', () => {
    it('should load history in state from localstorage', () => {
        const response = {
            status: 200
        }
        
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
  

        const history = [
            {request: {...requests.requestGET}, response},
            {request: {...requests.requestPOST}, response},
            {request: {...requests.requestPUT}, response},
            {request: {...requests.requestDELETE}, response}
        ]
  
  
      localStorage.setItem('history', JSON.stringify(history));
      
      expect(
        reducer({}, actions.loadHistoryFromStorage())
      ).toEqual({
            history
          }
        )
    })

    it('should load empty array if no have history', () => {
      const history = [];
      localStorage.removeItem('history');
      expect(
        reducer({}, actions.loadHistoryFromStorage())
      ).toEqual({
            history
          }
        )
    })
  });