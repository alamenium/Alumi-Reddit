import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import feedReducer from "../features/feed/feedSlice";
import subReducer from "../features/subreddit/subRedditSlice";

export const store = configureStore({
  reducer: {
    feed: feedReducer,
    subreddit: subReducer
  }
});
