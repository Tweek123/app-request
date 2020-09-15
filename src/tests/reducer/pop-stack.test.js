import reducer from '../../reducers/request-reducer';
import * as actions from '../../actions/actions';

describe('pop stack from state', () => {
    it('pop stack', () => {        
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
            {...requests.requestPUT}
        ]
      expect(
        reducer({stack}, actions.popStack())
      ).toEqual({stack: resultStack})
    })

  });