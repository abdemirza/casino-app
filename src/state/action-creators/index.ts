import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import Action from "../actions";

export const jackpot = (amount: number = 5) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.JACKPOT,
      payload: amount,
    });
  };
};
export const same = (amount: number = 2) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SAME,
      payload: amount,
    });
  };
};
export const pair = (amount: number = 0.5) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.PAIR,
      payload: amount,
    });
  };
};

export const spin = (amount: number = -2) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SPIN,
      payload: amount,
    });
  };
};

export const gameOverReducer = (gameOver: boolean = true) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GAMEOVER,
      payload: gameOver,
    });
  };
};

export const debug = (credit: number = 5) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DEBUG,
      payload: credit,
    });
  };
};
export const addData = (tableData: any) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADD_DATA,
      payload: tableData,
    });
  };
};

export const login = (user: object) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LOGIN,
      payload: user,
    });
  };
};

