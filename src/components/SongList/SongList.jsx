import { ListItem, List } from "@chakra-ui/react";
import { SongCard } from "./SongCard";

const SongList = ({ songs }) => {
  return (
    <List spacing="0.5rem">
      {songs.map((song) => (
        <ListItem key={song.id}>
          <SongCard song={song} />
        </ListItem>
      ))}
    </List>
  );
};

export { SongList };
