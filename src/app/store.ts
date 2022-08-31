import { configureStore } from '@reduxjs/toolkit';
import loginSlice from '../features/login/loginSlice';
import registerSlice from '../features/regiter/registerSlice';
import getAtmsSlice from '../features/atm/atmSlice';
import addAtmSlice from '../features/addAtm/addAtmSlice';
import deleteAtmSlice from '../features/deleteAtm/deleteAtmSlice';
export const store = configureStore({
   reducer: {
      register: registerSlice,
      login: loginSlice,
      atms: getAtmsSlice,
      addAtm: addAtmSlice,
      deleteAtm: deleteAtmSlice,
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
