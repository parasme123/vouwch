import {createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import rootReducer from '../reducer'
import{ composeWithDevTools } from 'redux-devtools-extension'
// import logger from "redux-logger"

export const store = createStore(  applyMiddleware(thunk) );
// const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware( thunk))
    ;


export default store;
 