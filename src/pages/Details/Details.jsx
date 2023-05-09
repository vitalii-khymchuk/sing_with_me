import {
  TabsMenu,
  useSongInfoStore,
  getSongInfoSelector,
} from "modules/AdvancedSongInfo/";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const getSongInfo = useSongInfoStore(getSongInfoSelector);
  const { id } = useParams();

  useEffect(() => {
    getSongInfo(id);
  }, [getSongInfo]);

  return <TabsMenu />;
};

export { Details };
