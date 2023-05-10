import { Stack } from "@chakra-ui/react";
import { useSongInfoStore, songInfoSelector } from "../../store";
import { RelatedItem } from "./RelatedItem";

const Related = () => {
  const { relation_songs = [] } = useSongInfoStore(songInfoSelector);
  const filteredRelated = relation_songs.filter(
    ({ songs }) => songs.length !== 0
  );
  return (
    <Stack>
      {filteredRelated.length > 0 &&
        filteredRelated.map((data) => (
          <RelatedItem key={data.relationship_type} data={data} />
        ))}
    </Stack>
  );
};

export { Related };
