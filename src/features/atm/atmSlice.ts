import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IResGetAtm } from '../../types/atm.model';

export const getAtms = createAsyncThunk('getAtm', async () => {
   const { data } = await axios.get('http://localhost:5001/api/v1/atms', {
      headers: { Authorization: localStorage.getItem('accessToken') as string },
   });
   return data;
});

export interface atmState {
   loading: boolean;
   success: boolean;
   res: IResGetAtm;
   error: string | null;
}

const initialState: atmState = {
   loading: false,
   success: false,
   res: {
      atm: [],
      queue: [],
      processedClient: '',
   },
   error: null,
};

export const getAtmsSlice = createSlice({
   name: 'atms',
   initialState,
   reducers: {
      handleDrag: (state: atmState, action) => {
         state.res.atm = action.payload;
      },
   },
   extraReducers: {
      [getAtms.pending.toString()]: (state: atmState) => {
         state.loading = true;
         state.success = false;
      },
      [getAtms.fulfilled.toString()]: (state: atmState, action) => {
         state.loading = false;
         state.res = action.payload;
         state.success = true;
      },
      [getAtms.rejected.toString()]: (state: atmState) => {
         state.loading = false;
         state.success = false;
      },
   },
});

export const { handleDrag } = getAtmsSlice.actions;

export default getAtmsSlice.reducer;
