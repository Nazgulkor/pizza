const initialState = {
  category: null,
  sortBy: {
    type : 'rating',
    order : 'desc'
  },
};

const filters = (state = initialState, action) => {
  if (action.type === "SORT_BY") {
    return { ...state, sortBy : action.payload };
  }
  if (action.type === "CATEGORY"){
    return {...state, category : action.payload}
  }
  return state;
};

export default filters;
