import { createSelector } from "@reduxjs/toolkit";
const getFilter = (state) => state.contacts.filter;
const getAllItems = (state) => state.contacts.items;
const getVisibleContacts = createSelector(
  [getFilter, getAllItems],
  (filter, contacts) =>
    contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    )
);
// const getVisibleContacts = (state) => {
//   const filter = getFilter(state);
//   const contacts = getAllItems(state);
//   return contacts.filter(({ name }) =>
//     name.toLowerCase().includes(filter.toLowerCase())
//   );
// };

export default {
  getFilter,
  getAllItems,
  getVisibleContacts,
};
