export const setSortBy = (name) => ({
  type: "SORT_BY",
  payload: name,
});

export const setCategory = (index) => ({
  type: "CATEGORY",
  payload: index,
});
