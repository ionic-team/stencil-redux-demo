import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/index';


const configureStore = (preloadedState: any) =>
  createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger));

export { configureStore };