import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk'
import { repoReducer } from "./repoReducer";

const store = createStore(repoReducer, applyMiddleware(thunkMiddleware));

export default store

