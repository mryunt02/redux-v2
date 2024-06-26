import { initialState, reducer } from "./reducer";
import { createStore } from "redux";

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducer, initialState, enhancer);

export { store };