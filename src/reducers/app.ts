import { TypeKeys, ActionTypes } from '../actions/index';

const getInitialState = (): AppState => {
  return {
    name: 'Stencil Redux'
  }
};

const app = (state = getInitialState(), action: ActionTypes): AppState => {
  switch (action.type) {
    case TypeKeys.APP_SET_NAME: {
      return { ...state, name: action.name }
    }
  }

  return state;
};

export default app;
