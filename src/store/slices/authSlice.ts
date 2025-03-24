import apiAxios from '@/http/api';
import axios from 'axios';
import { AuthResponse } from '@/models/response/AuthResponse';
import { IUser } from '@/models/UserModel';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUserState {
  user: IUser | null,
  isAuth: boolean,
  error?: string;
  isLoading: boolean,
}

const initialState: IUserState = {
  user: {} as IUser,
  isAuth: false,
  isLoading: false,
  error: '',
};

export const login = createAsyncThunk<
  { user: IUser; accessToken: string; refreshToken: string },
  { email: string; password: string }
>('auth/login', async ({ email, password }, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI; 

  try {
    const response = await apiAxios.post<AuthResponse>('/login', { email, password });
    const { accessToken, refreshToken, user } = response.data;
    dispatch(setAuth(true));
    dispatch(setUser(user))
  
    localStorage.setItem('accessToken', accessToken);

    return { user, accessToken, refreshToken };
  } catch (error: any) {
    if (error.response)  {
      return rejectWithValue(error.response.data.message || 'Login failed');
    }
    return rejectWithValue('An unexpected error occurred');
  }
});

const authSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message
      });
  },
});

export const { setUser, setAuth } = authSlice.actions;

export default authSlice.reducer;