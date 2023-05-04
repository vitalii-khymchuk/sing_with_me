const fetchSavedSelector = (state) => state.fetchSaved;
const addToSavedSelector = (state) => state.addToSaved;
const removeFromSavedSelector = (state) => state.removeFromSaved;

const savedSongsSelector = (state) => state.savedSongs;

export {
  fetchSavedSelector,
  addToSavedSelector,
  removeFromSavedSelector,
  savedSongsSelector,
};
