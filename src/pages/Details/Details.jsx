import {
  TabsMenu,
  useSongInfoStore,
  getSongInfoSelector,
} from "modules/AdvancedSongInfo/";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { AddToSavedBtn } from "modules/SavedLibrary";
import { Box } from "@chakra-ui/react";

const Details = () => {
  const getSongInfo = useSongInfoStore(getSongInfoSelector);
  const { id } = useParams();

  useEffect(() => {
    getSongInfo(id);
  }, [getSongInfo, id]);

  return (
    <Box pt="44px" height="100%" overflow="hidden">
      <Box overflowY="scroll" height="100%">
        <TabsMenu SaveResultBtn={AddToSavedBtn} />
      </Box>
    </Box>
  );
};

export { Details };
