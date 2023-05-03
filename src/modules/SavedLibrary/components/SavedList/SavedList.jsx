import {
  useSavedLibStore,
  fetchSavedSelector,
  savedSongsSelector,
} from "modules/SavedLibrary/store";
import { SongList } from "components/SongList";
import { useEffect } from "react";

const SavedList = () => {
  const savedSongs = useSavedLibStore(savedSongsSelector);
  const fetchSaved = useSavedLibStore(fetchSavedSelector);
  useEffect(() => {
    fetchSaved();
  }, [fetchSaved]);
  console.log(savedSongs);
  return <SongList songs={savedSongs ?? []} footerText="Release date:" />;
};
export { SavedList };
