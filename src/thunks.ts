import axios from 'axios';

import { AppState, AppThunk, setError } from './store';
import { listFetchSuccess, resetList } from './store/list/actions';

import { playerFetchSuccess } from './store/selectedPlayer/actions';

export const listFetchRequest = (): AppThunk => async dispatch => {
  try {
    const response = await axios.get('https://api.monpetitgazon.com/stats/championship/1/2018');
    dispatch(listFetchSuccess(response.data));
  } catch (e) {
    dispatch(setError(true));
  }
}

export const playerFetchRequest = (id: string): AppThunk => async dispatch => {
  dispatch(resetList());

  try {
    const response = await axios.get(`https://api.monpetitgazon.com/stats/player/${id}?season=2018`);
    dispatch(playerFetchSuccess(response.data));
  } catch (e) {
    dispatch(setError(true));
  }

}
