import {
  SelectedPlayerState,
  SelectedPlayerActionTypes,
  PLAYER_FETCH_SUCCESS,
  RESET_PLAYER
} from './types';

const initialState: SelectedPlayerState = {
  player: null,
};

export function selectedPlayerReducer(state = initialState, action: SelectedPlayerActionTypes): SelectedPlayerState {
  switch (action.type) {

    case PLAYER_FETCH_SUCCESS:
      return Object.assign({}, state, {
        player: action.data,
      });

    case RESET_PLAYER:
     return {
       player: null,
     }

    default:
      return state;
  }
}
