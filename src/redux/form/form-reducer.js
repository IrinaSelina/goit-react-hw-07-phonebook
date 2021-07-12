import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./form-actions";
const {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  addFilter,
} = actions;
const items = createReducer([], {
  [fetchContactsSuccess]: (state, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) =>
    state.some(
      (someContact) =>
        someContact.name.toLocaleLowerCase() ===
        payload.name.toLocaleLowerCase()
    )
      ? (alert(`${payload.name} is already in contacts`), state)
      : [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [addFilter]: (state, { payload }) => payload,
});
export default combineReducers({
  items,
  filter,
});
