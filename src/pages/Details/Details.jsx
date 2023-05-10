import {
  TabsMenu,
  useSongInfoStore,
  getSongInfoSelector,
} from "modules/AdvancedSongInfo/";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { AddToSavedBtn } from "modules/SavedLibrary";

const Details = () => {
  const getSongInfo = useSongInfoStore(getSongInfoSelector);
  const { id } = useParams();

  useEffect(() => {
    getSongInfo(id);
  }, [getSongInfo, id]);

  return <TabsMenu SaveResultBtn={AddToSavedBtn} />;
};

export { Details };
