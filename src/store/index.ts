import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import authReducer from './slices/authSlice';
import postsReducer from './slices/postsSlice';
import { AxiosInstance } from 'axios';

// Combine reducers
const rootReducer = combineReducers({
  auth: authReducer,
  posts: postsReducer,
});

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateModel;
}

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type StateModel = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch']