import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface IHeaders {
   header: {
      Authorization: string;
   };
}

export const deleteAtm = createAsyncThunk('deleteAtm', async (id: string) => {
   const { data } = await axios.delete(`http://localhost:5001/api/v1/atms/${id}`, {
      headers: {
         Authorization: localStorage.getItem('accessToken') as string,
      },
   });
   return data;
});

export interface deleteAtmState {
   loading: boolean;
   success: boolean;
   error: string | null;
}

const initialState: deleteAtmState = {
   loading: false,
   success: false,
   error: null,
};

export const deleteAtmSlice = createSlice({
   name: 'addAtm',
   initialState,
   reducers: {
      resetDelete: (state: deleteAtmState) => {
         state.success = false;
      },
   },
   extraReducers: {
      [deleteAtm.pending.toString()]: (state: deleteAtmState) => {
         state.loading = true;
      },
      [deleteAtm.fulfilled.toString()]: (state: deleteAtmState, action) => {
         state.loading = false;
         state.success = true;
      },
      [deleteAtm.rejected.toString()]: (state: deleteAtmState) => {
         state.loading = false;
         state.success = false;
      },
   },
});

export const { resetDelete } = deleteAtmSlice.actions;

export default deleteAtmSlice.reducer;
