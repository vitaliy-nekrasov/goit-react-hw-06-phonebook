import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      const findContact = state.contacts.find(contact =>
        contact.name
          .toLocaleLowerCase()
          .includes(action.payload.name.toLocaleLowerCase())
      );
      findContact
        ? alert(`${action.payload.name} is already in contacts.`)
        : state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    updateFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, updateFilter } =
  contactsSlice.actions;

// Selectors

export const getContacts = state => state.contacts.contacts;
export const getFilterValue = state => state.contacts.filter;
