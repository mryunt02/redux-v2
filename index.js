const {
  createStore,
  compose,
  applyMiddleware,
  bindActionCreators,
} = require("redux");
// Redux Compose
const function1 = (string) => string.toUpperCase();
const function2 = (string) => string.repeat(3);
const function3 = (string) => string.bold();
composeFunction = compose(function1, function2, function3); // compose function helps to combine multiple functions into a single function
// console.log(composeFunction("Hello")); // HELLOHELLOHELLO

// Redux createStore
const initialState = { value: 0 };
const increment = { type: "INCREMENT", payload: 3 };
const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return { value: state.value + action.payload };
  }
  return state;
}; // //Reducers are functions that take the current state and an action as arguments, and return a new state result. In other words, (state, action) => newState
const store = createStore(reducer, initialState); // createStore function is used to create a store expect a reducer as the first argument and an initial state as the second argument
console.log(store.getState()); // { value: 0 }
store.dispatch(increment);
console.log(store.getState()); // { value: 3 }
