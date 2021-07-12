import { createAction } from "@reduxjs/toolkit";
const fetchContactsRequest = createAction("contact/fetchItemsRequest");
const fetchContactsSuccess = createAction("contact/fetchItemsSuccess");
const fetchContactsError = createAction("contact/fetchItemsError");
const addContactRequest = createAction("contact/addItemRequest");
const addContactSuccess = createAction("contact/addItemSuccess");
const addContactError = createAction("contact/addItemError");
const deleteContactRequest = createAction("contact/deleteItemRequest");
const deleteContactSuccess = createAction("contact/deleteItemSuccess");
const deleteContactError = createAction("contact/deleteItemError");

const addFilter = createAction("contacts/Filter");

export default {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addFilter,
};
