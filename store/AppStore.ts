import AppState from "../models/AppState";
export type Action =
  | { type: "changeMonth"; payload: any }
  | { type: "changeCurrency"; payload: any };
export function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case "changeMonth":
      return { ...state, selectedMonth: action.payload };
    case "changeCurrency":
      return {...state,currency:action.payload};
    default:
      return state;
  }
}

