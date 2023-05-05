import { ListItem, List } from "@chakra-ui/react";
import { SongCard } from "./SongCard";

const SongList = ({ songs, footerText = "", onSongCardClick = () => {} }) => {
  return (
    <List spacing="0.5rem">
      {songs.map((song) => {
        const release_date_for_display = song.release_date_for_display
          ? `${footerText} ${song.release_date_for_display}`
          : `${footerText} not available`;
        return (
          <ListItem key={song.id}>
            <SongCard
              song={{ ...song, release_date_for_display }}
              onSongCardClick={onSongCardClick}
            />
          </ListItem>
        );
      })}
    </List>
  );
};

export { SongList };
