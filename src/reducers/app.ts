import { TypeKeys, ActionTypes } from '../actions/index';

interface AppState {
  name: string;
}

const getInitialState = () => {
  return {
    name: 'Stencil Redux'
  }
};

const app = (state: AppState = getInitialState(), action: ActionTypes) => {
  switch (action.type) {
    case TypeKeys.APP_SET_NAME: {
      return { ...state, name: action.name }
    }
  }

  return state;
};

export default app;
