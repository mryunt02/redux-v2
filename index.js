const {
  createStore,
  compose,
  applyMiddleware,
  bindActionCreators,
  combineReducers,
} = require("redux");
// Redux Compose
const initialState = {
  users: [
    { id: 1, name: "Bugrahan" },
    { id: 2, name: "Yunt" },
  ],
  tasks: [{ title: "Task 1" }, { title: "Task 2" }],
};
const ADD_TASK = "ADD_TASK";
const ADD_USER = "ADD_USER";
const addTask = (title) => ({ type: ADD_TASK, payload: title });
const addUser = (name) => ({ type: ADD_USER, payload: name });

const userReducer = (users = initialState.users, action) => {
  if (action.type === ADD_USER) {
    return [...users, { id: users.length + 1, name: action.payload }];
  }
  return users;
};

const taskReducer = (tasks = initialState.tasks, action) => {
  if (action.type === ADD_TASK) {
    return [...tasks, { title: action.payload }];
  }
  return tasks;
};

const reducer = combineReducers({ tasks: taskReducer, users: userReducer });
const store = createStore(reducer, initialState);
const subscriber = () => {
  console.log("SUBSCRIBE", store.getState());
};

const actions = bindActionCreators({ addTask, addUser }, store.dispatch);
store.subscribe(subscriber);
actions.addTask("Task 3");
actions.addTask("Task 4");
