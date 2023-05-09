import {
  useSavedLibStore,
  fetchSavedSelector,
  savedSongsSelector,
} from "modules/SavedLibrary/store";
import { SongList } from "components/SongList";
import { useEffect } from "react";

const SavedList = ({ onCardClick = () => {} }) => {
  const savedSongs = useSavedLibStore(savedSongsSelector);
  const fetchSaved = useSavedLibStore(fetchSavedSelector);
  useEffect(() => {
    fetchSaved();
  }, [fetchSaved]);
  return (
    <SongList
      songs={savedSongs ?? []}
      footerText="Release date:"
      onCardClick={onCardClick}
    />
  );
};
export { SavedList };
