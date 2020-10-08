export interface ListItem {
  id: string;
  firstname: string;
  lastname: string;
  ultraPosition: number;
  position: number;
  teamId: number;
  quotation: number;
  club: string;
}

export interface ListState {
  players: Array<ListItem> | null;
  filterName: string;
  filterPos: number;
}

export const LIST_FETCH_SUCCESS = 'LIST_FETCH_SUCCESS';
export const LIST_FILTER_NAME = 'LIST_FILTER_NAME';
export const LIST_FILTER_POS = 'LIST_FILTER_POS';
export const RESET_LIST = 'RESET_LIST';

export interface ListFetchSuccessAction {
  type: typeof LIST_FETCH_SUCCESS;
  data: Array<ListItem>;
}

export interface ListFilterNameAction {
  type: typeof LIST_FILTER_NAME;
  filter: string;
}

export interface ListFilterPosAction {
  type: typeof LIST_FILTER_POS;
  filter: number;
}

export interface ResetListAction {
  type: typeof RESET_LIST;
}

export type ListActionTypes = ListFetchSuccessAction | ListFilterNameAction | ListFilterPosAction | ResetListAction;
