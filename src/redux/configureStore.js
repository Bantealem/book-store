import { combineReducers, configureStore } from '@reduxjs/toolkit';
import bookReducer from './Books/Books';
import categoryReducer from './categories/categories';

const rootReducer = combineReducers({
  books: bookReducer,
  categories: categoryReducer,
});
const store = configureStore({ reducer: rootReducer });

export default store;
