import { combineReducers, Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { ListState } from './list/types';
import { listReducer } from './list/reducer';
import { SelectedPlayerState } from './selectedPlayer/types';
import { selectedPlayerReducer } from './selectedPlayer/reducer';

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  null,
  Action<string>
>;

export type AppThunkDispatch = ThunkDispatch<AppState, null, Action<string>>;

// The top-level state object
export interface AppState {
  list: ListState;
  selectedPlayer: SelectedPlayerState;
  error: boolean;
}

const SET_ERROR = 'SET_ERROR';

interface SetErrorAction {
  type: typeof SET_ERROR;
  error: boolean;
}

export function setError(error: boolean): SetErrorAction {
  return {
    type: SET_ERROR,
    error,
  };
}

function errorReducer(state = false, action: SetErrorAction): boolean {
  switch (action.type) {

    case SET_ERROR:
     return action.error;

    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  list: listReducer,
  selectedPlayer: selectedPlayerReducer,
  error: errorReducer
});
