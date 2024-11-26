import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import contactsReducer from './slices/contactsSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    contacts: contactsReducer,
  },
});

// Tipos de la store para usar con TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
