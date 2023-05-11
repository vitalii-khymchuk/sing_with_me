import { ListItem, List, Skeleton, Stack } from "@chakra-ui/react";
import { SongCard } from "./SongCard";

const SongList = ({ songs = [], footerText = "", onCardClick = () => {} }) => {
  console.log(songs.length === 0);
  return (
    <List spacing="0.5rem">
      {songs.length > 0 &&
        songs.map((song) => {
          const release_date_for_display = song.release_date_for_display
            ? `${footerText} ${song.release_date_for_display}`
            : `${footerText} not available`;
          return (
            <ListItem key={song.id}>
              <SongCard
                song={{ ...song, release_date_for_display }}
                onCardClick={onCardClick}
              />
            </ListItem>
          );
        })}
      {songs.length === 0 && (
        <Stack>
          <Skeleton height="8rem" borderRadius="4px" />
          <Skeleton height="8rem" borderRadius="4px" />
          <Skeleton height="8rem" borderRadius="4px" />
          <Skeleton height="8rem" borderRadius="4px" />
        </Stack>
      )}
    </List>
  );
};

export { SongList };
