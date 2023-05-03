const fetchSavedSelector = (state) => state.fetchSaved;
const addToSavedSelector = (state) => state.addToSaved;
const removeFromSaved = (state) => state.removeFromSaved;

const savedSongsSelector = (state) => state.savedSongs;

export {
  fetchSavedSelector,
  addToSavedSelector,
  removeFromSaved,
  savedSongsSelector,
};
