import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import doctorReducer from '../reducer/doctorReducer';
import * as types from '../action/types';

const appReducer = combineReducers(
    { doctor: doctorReducer }, 
);

const initialState = appReducer({}, {});
const rootReducer = (state, action) => {
  if (action.type === types.LOGOUT) {
    state = initialState
  }
  return appReducer(state, action)
}

const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk));
}

export default configureStore;