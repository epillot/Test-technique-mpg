import {
  ListItem,
  LIST_FETCH_SUCCESS,
  LIST_FILTER_NAME,
  LIST_FILTER_POS,
  RESET_LIST,
  ListActionTypes
} from './types';

export function listFetchSuccess(data: Array<ListItem>): ListActionTypes {
  return {
    type: LIST_FETCH_SUCCESS,
    data
  };
}

export function listFilterName(filter: string): ListActionTypes {
  return {
    type: LIST_FILTER_NAME,
    filter
  };
}

export function listFilterPos(filter: number): ListActionTypes {
  return {
    type: LIST_FILTER_POS,
    filter
  };
}

export function resetList(): ListActionTypes {
  return {
    type: RESET_LIST,
  };
}
