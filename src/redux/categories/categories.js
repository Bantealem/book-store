// Reducer
const initialState = [];
const categoriesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};
// Action Creator
const addCategories = (payload) => ({
  type: 'add',
  payload,
});

const removeCategories = (payload) => ({
  type: 'remove',
  payload,
});

// selector
const getCategories = (state) => state.categories;

export { addCategories, removeCategories, getCategories };

export default categoriesReducer;
