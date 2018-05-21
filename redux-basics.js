const redux = require('redux');
const createStore = redux.createStore;

//Reducer
const rootReducer = (state = initialState, action) => {
  return state;
};

//Store 
const store = createStore(rootReducer);
console.log(store.getState());