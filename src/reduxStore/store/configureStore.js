import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import doctorReducer from '../reducer/doctorReducer';

const rootReducer = combineReducers(
    { doctor: doctorReducer },
    
);

const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk));
}



export default configureStore;