const ADD = 'ADD';
const DELETE = 'DELETE';
// Reducer
const initialState = [
  {
    title: 'Fikr Eske Mekabr',
    author: 'Haddis Alemayehu',
  },
];
const bookReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD:
      return [...state, action.book];
    case DELETE:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};
// Action for add books
export const addBooks = (book) => ({
  type: ADD,
  payload: book,
});
// Action for remove books
export const deleteBooks = (id) => ({
  type: 'remove',
  payload: id,
});

export default bookReducer;
