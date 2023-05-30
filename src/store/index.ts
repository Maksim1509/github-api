import { configureStore } from '@reduxjs/toolkit';
import sliseReducer from './slices/slise';

const store = configureStore({
  reducer: {
    slise: sliseReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
