import { Action } from 'redux';
import { Actions } from './app.actions';

export interface IAppState {
  count: number;
}

export const INITIAL_STATE: IAppState = {
  count: 0,
};

export function rootReducer(lastState: IAppState, action: Action): IAppState {
  switch (action.type) {
    case Actions.INCREMENT: {
      return {
        ...lastState,
        count: lastState.count + 1
      };
    }
  }
  return lastState;
}
