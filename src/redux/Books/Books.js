// Reducer
const initialState = [];
const bookReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};
// Action Creator
const addBooks = (payload) => ({
  type: 'add',
  payload,
});

const removeBooks = (payload) => ({
  type: 'remove',
  payload,
});

// selector
const getBooks = (state) => state.books;

export { addBooks, removeBooks, getBooks };

export default bookReducer;
