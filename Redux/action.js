import * as types from "./type";

let nextId = 0;
export const addExpense = ({ amount, text }) => {
  return (dispatch) => {
    return dispatch({
      type: types.ADD_EXPENSE,
      id: nextId++,
      text,
      amount,
    });
  };
};

export const removeExpense = ({ id }) => {
  return (dispatch) => {
    return dispatch({
      type: types.REMOVE_EXPENSE,
      id: id,
    });
  };
};

export const addIncome = ({ amount, text }) => {
  return (dispatch) => {
    return dispatch({
      type: types.ADD_INCOME,
      id: nextId++,
      text,
      amount,
    });
  };
};

export const removeIncome = ({ id }) => {
  return (dispatch) => {
    return dispatch({
      type: types.REMOVE_INCOME,
      id: id,
    });
  };
};
