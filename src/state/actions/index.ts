interface JackpotAction {
  type: "jackpot";
  payload: number;
}

interface SameAction {
  type: "same";
  payload: number;
}

interface EvenAction {
  type: "pair";
  payload: number;
}
interface SpinAction {
  type: "spin";
  payload: number;
}
interface GameOverAction {
  type: "gameOver";
  payload: boolean;
}

interface DebugAction {
  type: "debug";
  payload: number;
}
interface AddDataAction {
  type: "addData";
  payload: Array<object>;
}
interface Login {
  type: "login";
  payload: object;
}
type Action =
  | JackpotAction
  | SameAction
  | EvenAction
  | SpinAction
  | GameOverAction
  | DebugAction
  | AddDataAction
  | Login;

export default Action;
