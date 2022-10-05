import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { reducer as formReducer } from 'redux-form';
import bookReducer, { getBooks } from './Books/Books';
import categoriesReducer, { getCategories } from './categories/categories';

const persistConfig = {
  key: 'root',
  storage,
  whilelist: ['books', 'categories'],
};

const rootReducers = combineReducers({
  books: bookReducer,
  categories: categoriesReducer,
  form: formReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export {
  store, persistor, getBooks, getCategories,
};
