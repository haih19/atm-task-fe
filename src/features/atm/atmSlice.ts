import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAtms = createAsyncThunk('getAtm', async (headers: { Authorization: string }) => {
   const { data } = await axios.get('http://localhost:5001/api/v1/atms', {
      headers,
   });
   return data;
});

export interface IAtmData {
   client: string;
   id: string;
   name: string;
   remove: boolean;
   status: string;
   transaction: number;
}

export interface IQueue {
   transaction: string;
   name: string;
}

export interface IRes {
   atm: IAtmData[];
   queue: IQueue[];
   processedClient: string;
}

export interface IInitialState {
   loading: boolean;
   res: IRes;
   error: string | null;
}

const initialState: IInitialState = {
   loading: false,
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
   reducers: {},
   extraReducers: {
      [getAtms.pending.toString()]: (state: IInitialState) => {
         state.loading = true;
      },
      [getAtms.fulfilled.toString()]: (state: IInitialState, action) => {
         state.res = action.payload;
         state.loading = false;
      },
      [getAtms.rejected.toString()]: (state: IInitialState) => {
         state.loading = false;
      },
   },
});

export default getAtmsSlice.reducer;
