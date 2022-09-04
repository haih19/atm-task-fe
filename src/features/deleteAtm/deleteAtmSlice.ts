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

export interface deleteState {
   loading: boolean;
   success: boolean;
   error: string | null;
}

const initialState: deleteState = {
   loading: false,
   success: false,
   error: null,
};

export const deleteAtmSlice = createSlice({
   name: 'addAtm',
   initialState,
   reducers: {
      resetDelete: (state: deleteState) => {
         state.success = false;
      },
   },
   extraReducers: {
      [deleteAtm.pending.toString()]: (state: deleteState) => {
         state.loading = true;
      },
      [deleteAtm.fulfilled.toString()]: (state: deleteState, action) => {
         state.loading = false;
         state.success = true;
      },
      [deleteAtm.rejected.toString()]: (state: deleteState) => {
         state.loading = false;
         state.success = false;
      },
   },
});

export const { resetDelete } = deleteAtmSlice.actions;

export default deleteAtmSlice.reducer;
