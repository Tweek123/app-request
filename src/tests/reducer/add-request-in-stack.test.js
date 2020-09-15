import reducer from '../../reducers/request-reducer';
import * as actions from '../../actions/actions';

describe('add request in stack', () => {
    it('add request', () => {        
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
  

         const stack = [
            {...requests.requestGET},
            {...requests.requestPOST},
            {...requests.requestPUT},
            {...requests.requestDELETE}
        ]
        
        const resultStack = [
            {...requests.requestGET},
            {...requests.requestPOST},
            {...requests.requestPUT},
            {...requests.requestDELETE},
            {...requests.requestGET},
        ]
      expect(
        reducer({stack}, actions.addRequest(stack[0]))
      ).toEqual({stack: resultStack})
    })

  });