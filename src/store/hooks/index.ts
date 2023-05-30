import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import store, { RootState } from '..';

type AppDispatch = typeof store.dispatch;

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const useAppDispatch = () => useDispatch<AppDispatch>();

export { useAppSelector, useAppDispatch };
