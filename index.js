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

console.log(composeFunction("Hello"));
