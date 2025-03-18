import { IPost } from '@/models/PostModel';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IPostState {
  posts: IPost[]
}

const initialState: IPostState = {
  posts: [],
};

const postsSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<IPost[]>) => {
      state.posts = action.payload;
    },
  },
});

export const { setPosts } = postsSlice.actions;

export default postsSlice.reducer;