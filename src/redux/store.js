import { createStore } from "redux";
import {rootReducer} from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension';
// import { initialState } from "./initialState";

// export const store = createStore(reducer, initialState);
export const store = createStore(rootReducer, composeWithDevTools());

// console.log(store.getState());
// store.dispatch({ type: INCREMENT });
// console.log(store.getState());
// store.dispatch({ type: DECREMENT });
// console.log(store.getState());
// store.dispatch({ type: WITHDRAW, payload: 50 });
// console.log(store.getState());
