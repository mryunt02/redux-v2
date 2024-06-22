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
  tasks: [
    { title: "Task 1", asignedTo: "Bugrahan" },
    { title: "Task 2", asignedTo: "Yunt" },
  ],
};
const ADD_TASK = "ADD_TASK";
const ADD_USER = "ADD_USER";
const addTask = (title, asignedTo) => ({
  type: ADD_TASK,
  payload: title,
  asignedTo,
}); // Action
const addUser = (name) => ({ type: ADD_USER, payload: name }); // Action

const userReducer = (users = initialState.users, action) => {
  // Reducer
  if (action.type === ADD_USER) {
    return [...users, { id: users.length + 1, name: action.payload }];
  }
  return users;
};

const taskReducer = (tasks = initialState.tasks, action) => {
  // Reducer
  if (action.type === ADD_TASK) {
    return [...tasks, { title: action.payload, asignedTo: "Bugrahan" }];
  }
  return tasks;
};

const reducer = combineReducers({ tasks: taskReducer, users: userReducer }); // Combine Reducers
const logMiddleware = (store) => (next) => (action) => {
  console.log("old state", store.getState(), action);
  next(action);
  console.log("new state", store.getState(), action);
};
const store = createStore(
  reducer,
  initialState,
  applyMiddleware(logMiddleware) // Middleware
);
const subscriber = () => {
  console.log("SUBSCRIBE", store.getState()); // Subscribe
};

const actions = bindActionCreators({ addTask, addUser }, store.dispatch);
store.subscribe(subscriber);
actions.addTask("Task 3");
actions.addUser("Çınar");
actions.addTask("Task 4");

// Output:
// old state {
//   users: [ { id: 1, name: 'Bugrahan' }, { id: 2, name: 'Yunt' } ],
//   tasks: [
//     { title: 'Task 1', asignedTo: 'Bugrahan' },
//     { title: 'Task 2', asignedTo: 'Yunt' }
//   ]
// } { type: 'ADD_TASK', payload: 'Task 3', asignedTo: undefined }
// SUBSCRIBE {
//   tasks: [
//     { title: 'Task 1', asignedTo: 'Bugrahan' },
//     { title: 'Task 2', asignedTo: 'Yunt' },
//     { title: 'Task 3', asignedTo: 'Bugrahan' }
//   ],
//   users: [ { id: 1, name: 'Bugrahan' }, { id: 2, name: 'Yunt' } ]
// }
//
//
// new state {
//   tasks: [
//     { title: 'Task 1', asignedTo: 'Bugrahan' },
//     { title: 'Task 2', asignedTo: 'Yunt' },
//     { title: 'Task 3', asignedTo: 'Bugrahan' }
//   ],
//   users: [ { id: 1, name: 'Bugrahan' }, { id: 2, name: 'Yunt' } ]
// } { type: 'ADD_TASK', payload: 'Task 3', asignedTo: undefined }
// old state {
//   tasks: [
//     { title: 'Task 1', asignedTo: 'Bugrahan' },
//     { title: 'Task 2', asignedTo: 'Yunt' },
//     { title: 'Task 3', asignedTo: 'Bugrahan' }
//   ],
//   users: [ { id: 1, name: 'Bugrahan' }, { id: 2, name: 'Yunt' } ]
// } { type: 'ADD_USER', payload: 'Çınar' }
// SUBSCRIBE {
//   tasks: [
//     { title: 'Task 1', asignedTo: 'Bugrahan' },
//     { title: 'Task 2', asignedTo: 'Yunt' },
//     { title: 'Task 3', asignedTo: 'Bugrahan' }
//   ],
//   users: [
//     { id: 1, name: 'Bugrahan' },
//     { id: 2, name: 'Yunt' },
//     { id: 3, name: 'Çınar' }
//   ]
// }
// new state {
//   tasks: [
//     { title: 'Task 1', asignedTo: 'Bugrahan' },
//     { title: 'Task 2', asignedTo: 'Yunt' },
//     { title: 'Task 3', asignedTo: 'Bugrahan' }
//   ],
//   users: [
//     { id: 1, name: 'Bugrahan' },
//     { id: 2, name: 'Yunt' },
//     { id: 3, name: 'Çınar' }
//   ]
// } { type: 'ADD_USER', payload: 'Çınar' }
// old state {
//   tasks: [
//     { title: 'Task 1', asignedTo: 'Bugrahan' },
//     { title: 'Task 2', asignedTo: 'Yunt' },
//     { title: 'Task 3', asignedTo: 'Bugrahan' }
//   ],
//   users: [
//     { id: 1, name: 'Bugrahan' },
//     { id: 2, name: 'Yunt' },
//     { id: 3, name: 'Çınar' }
//   ]
// } { type: 'ADD_TASK', payload: 'Task 4', asignedTo: undefined }
// SUBSCRIBE {
//   tasks: [
//     { title: 'Task 1', asignedTo: 'Bugrahan' },
//     { title: 'Task 2', asignedTo: 'Yunt' },
//     { title: 'Task 3', asignedTo: 'Bugrahan' },
//     { title: 'Task 4', asignedTo: 'Bugrahan' }
//   ],
//   users: [
//     { id: 1, name: 'Bugrahan' },
//     { id: 2, name: 'Yunt' },
//     { id: 3, name: 'Çınar' }
//   ]
// }
// new state {
//   tasks: [
//     { title: 'Task 1', asignedTo: 'Bugrahan' },
//     { title: 'Task 2', asignedTo: 'Yunt' },
//     { title: 'Task 3', asignedTo: 'Bugrahan' },
//     { title: 'Task 4', asignedTo: 'Bugrahan' }
//   ],
//   users: [
//     { id: 1, name: 'Bugrahan' },
//     { id: 2, name: 'Yunt' },
//     { id: 3, name: 'Çınar' }
//   ]
// } { type: 'ADD_TASK', payload: 'Task 4', asignedTo: undefined }
