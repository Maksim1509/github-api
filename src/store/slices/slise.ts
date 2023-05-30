import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// export const fetch = createAsyncThunk<Type>('name', async () => {
//   const response = await fetch(url);
//   return response.data;
// });

type InitialState = {
  init: string;
};

const initialState: InitialState = {
  init: '',
};

const initSlice = createSlice({
  name: 'slise',
  initialState,
  reducers: {},
});

// export const {} = initSlice.actions;
export default initSlice.reducer;
