import {
  ListState,
  ListActionTypes,
  LIST_FETCH_SUCCESS,
  LIST_FILTER_NAME,
  LIST_FILTER_POS,
  RESET_LIST,
} from './types';

const initialState: ListState = {
  players: null,
  filterName: '',
  filterPos: 0,
};

export function listReducer(state = initialState, action: ListActionTypes): ListState {
  switch (action.type) {

    case LIST_FETCH_SUCCESS:
      return Object.assign({}, state, {
        players: action.data,
      });

    case LIST_FILTER_NAME:
      return Object.assign({}, state, {
        filterName: action.filter,
      });

    case LIST_FILTER_POS:
      return Object.assign({}, state, {
        filterPos: action.filter,
      });

    case RESET_LIST:
      return Object.assign({}, state, {
        players: null,
      });

    default:
      return state;
  }
}
