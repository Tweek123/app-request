const initialState = {
    history: [],
    stack: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
      case "ADD_REQUEST_IN_HISTORY": 
      state.history.push(action.request);
      localStorage.setItem('history', JSON.stringify(state.history));  
      return {...state, history: [...state.history]};
      
      case "ADD_REQUEST_IN_STACK":
      state.stack.push(action.request);
      return {...state}

      case "LOAD_HISTORY":
      state.history = JSON.parse(localStorage.getItem('history'));
      if(!state.history) {
        state.history = [];
      }
      return {...state, history: [...state.history]}

      case "POP_STACK":
      state.stack.pop();
      return {...state}
      
      default:
        return state;
    }
  }