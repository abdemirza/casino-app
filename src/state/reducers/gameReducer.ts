import { ActionType } from "../action-types";
import Action from "../actions";

const initialState = {
  balance: 9.99,
  gameOver: false,
  gameData: [],
  user: {},
  id: 0,
  isLoggedIn: false,
};

const reducer = (state: any = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.LOGIN:
      return { ...state, user: action.payload, isLoggedIn: true };
    case ActionType.JACKPOT:
    case ActionType.SAME:
    case ActionType.PAIR:
      return { ...state, balance: action.payload + state.balance };
    case ActionType.SPIN:
      return { ...state, balance: state.balance - 2 };
    case ActionType.DEBUG:
      return { ...state, balance: state.balance + 5, gameOver: false };
    case ActionType.ADD_DATA:
      return { ...state, gameData: [...state.gameData, action.payload] };
    case ActionType.GAMEOVER:
      return { ...state, balance: 0, gameOver: true };

    default:
      return state;
  }
};

export default reducer;
