import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addAtm = createAsyncThunk('addAtm', async (name: string) => {
   try {
      const { data } = await axios.post(
         'http://localhost:5001/api/v1/atms',
         { name },
         {
            headers: {
               Authorization: localStorage.getItem('accessToken') as string,
            },
         }
      );
      return data;
   } catch (error) {
      console.log(error);
   }
});

export interface addAtmState {
   loading: boolean;
   success: boolean;
   error: string | null;
}

const initialState: addAtmState = {
   loading: false,
   success: false,
   error: null,
};

export const addAtmSlice = createSlice({
   name: 'addAtm',
   initialState,
   reducers: {
      resetAdd: (state: addAtmState) => {
         state.success = false;
      },
   },
   extraReducers: {
      [addAtm.pending.toString()]: (state: addAtmState) => {
         state.loading = true;
      },
      [addAtm.fulfilled.toString()]: (state: addAtmState) => {
         state.loading = false;
         state.success = true;
      },
      [addAtm.rejected.toString()]: (state: addAtmState) => {
         state.loading = false;
         state.success = false;
      },
   },
});

export const { resetAdd } = addAtmSlice.actions;

export default addAtmSlice.reducer;
