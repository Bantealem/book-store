const CHECK_STATUS = 'bookStore/categories/CHECK_STATUS';

export const initialState = [];

export default function categoriesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHECK_STATUS:
      return [...state, 'Under construction'];
    default:
      return state;
  }
}

export function checkStatus() {
  return {
    type: CHECK_STATUS,
  };
}
