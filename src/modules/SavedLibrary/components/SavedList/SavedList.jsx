import {
  useSavedLibStore,
  fetchSavedSelector,
  savedSongsSelector,
  isSavedSongsLoadingSelector,
} from "modules/SavedLibrary/store";
import { SongList } from "components/SongList";
import { useEffect } from "react";

const SavedList = ({ onCardClick = () => {} }) => {
  const savedSongs = useSavedLibStore(savedSongsSelector);
  const fetchSaved = useSavedLibStore(fetchSavedSelector);
  const isLoading = useSavedLibStore(isSavedSongsLoadingSelector);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    fetchSaved();
  }, [fetchSaved]);
  return (
    <SongList
      songs={savedSongs ?? []}
      footerText="Release date:"
      onCardClick={onCardClick}
      isLoading={isLoading}
    />
  );
};
export { SavedList };
