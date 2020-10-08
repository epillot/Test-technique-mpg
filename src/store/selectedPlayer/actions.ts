import {
  SelectedPlayer,
  PLAYER_FETCH_SUCCESS,
  RESET_PLAYER,
  SelectedPlayerActionTypes
} from './types';

export function playerFetchSuccess(data: SelectedPlayer): SelectedPlayerActionTypes {
  return {
    type: PLAYER_FETCH_SUCCESS,
    data
  };
}

export function resetPlayer(): SelectedPlayerActionTypes {
  return {
    type: RESET_PLAYER,
  };
}
