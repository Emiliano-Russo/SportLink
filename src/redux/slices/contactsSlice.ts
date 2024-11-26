import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Contact {
  id: string;
  name: string;
  phone: string;
}

interface ContactsState {
  contacts: Contact[];
}

const initialState: ContactsState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
    },
    removeContact: (state, action: PayloadAction<string>) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload,
      );
    },
    clearContacts: state => {
      state.contacts = [];
    },
  },
});

export const {addContact, removeContact, clearContacts} = contactsSlice.actions;
export default contactsSlice.reducer;
