export interface PlayerStats {
  avgRate: number;
  sumGoals: number;
  sumCleanSheet: number;
  percentageSaveShot: number;
  sumGoalAssist: number;
  [index: string]: number;
}

export interface SelectedPlayer {
  firstname: string;
  lastname: string;
  club: string;
  ultraPosition: number;
  quotation: number;
  stats: PlayerStats;
  [index: string]: string | number | PlayerStats;
}

export interface SelectedPlayerState {
  player: SelectedPlayer | null;
}

export const PLAYER_FETCH_SUCCESS = 'PLAYER_FETCH_SUCCESS';
export const RESET_PLAYER = 'RESET_PLAYER';

export interface PlayerFetchSuccessAction {
  type: typeof PLAYER_FETCH_SUCCESS;
  data: SelectedPlayer;
}

export interface ResetPlayerAction {
  type: typeof RESET_PLAYER;
}

export type SelectedPlayerActionTypes = PlayerFetchSuccessAction | ResetPlayerAction;
