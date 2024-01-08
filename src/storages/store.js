import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import wordsReducer from './wordSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    words: wordsReducer,
  }
});

export default store;
