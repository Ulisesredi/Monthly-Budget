import * as types from "./type";

function income(state = {}, action) {
  switch (action.type) {
    case types.ADD_INCOME:
      return {
        id: action.id,
        type: "INCOME",
        text: action.text,
        amount: action.amount,
      };
    default:
      return state;
  }
}
function expense(state = {}, action) {
  switch (action.type) {
    case types.ADD_EXPENSE:
      return {
        id: action.id,
        type: "EXPENSE",
        text: action.text,
        amount: action.amount,
      };
    default:
      return state;
  }
}

export default function calc(state = [], action) {
  switch (action.type) {
    case types.ADD_EXPENSE:
      return [...state, expense(undefined, action)];

    case types.REMOVE_EXPENSE:
      return state.filter((it) => it.id != action.id);

    case types.ADD_INCOME:
      return [...state, income(undefined, action)];

    case types.REMOVE_INCOME:
      return state.filter((it) => it.id != action.id);
    default:
      return state;
  }
}
