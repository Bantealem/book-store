import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/book';
import categoriesReducer from './categories/categories';

const rootReducer = configureStore({
  reducer: combineReducers({
    books: booksReducer,
    categories: categoriesReducer,
  }),
});

export default rootReducer;
