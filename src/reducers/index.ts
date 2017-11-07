import app from './app';

import { combineReducers } from 'redux';

const rootReducer = (combineReducers as any)({
  app
});

export default rootReducer;