const resultsSelector = (state) => state.results;
const isLoadingSelector = (state) => state.isLoading;
const isErrorSelector = (state) => state.isError;
const searchByRecSelector = (state) => state.searchByRec;
const searchByTextSelector = (state) => state.searchByText;
const resetResultsSelector = (state) => state.resetResults;
export {
  resultsSelector,
  isLoadingSelector,
  isErrorSelector,
  searchByRecSelector,
  searchByTextSelector,
  resetResultsSelector,
};
