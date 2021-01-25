import AppState from "../models/AppState";
export type Action =
  | { type: "changeMonth"; payload: any }
  | { type: "changeCurrency"; payload: any };
export function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case "changeCurrency":
      return { ...state, selectedMonth: action.payload.month };
    case "changeMonth":
      return state;
    default:
      return state;
  }
}

