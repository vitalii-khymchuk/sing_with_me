import { ListItem, List, Skeleton, Text } from "@chakra-ui/react";
import { SongCard } from "./SongCard";

const SongList = ({
  songs = [],
  footerText = "",
  onCardClick = () => {},
  isLoading = false,
}) => {
  return (
    <>
      <List spacing="0.5rem">
        {songs.length > 0 &&
          !isLoading &&
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
        {isLoading && (
          <>
            <Skeleton height="8rem" borderRadius="4px" />
            <Skeleton height="8rem" borderRadius="4px" />
            <Skeleton height="8rem" borderRadius="4px" />
            <Skeleton height="8rem" borderRadius="4px" />
          </>
        )}
      </List>
      {songs.length === 0 && !isLoading && (
        <Text>There are no items here...</Text>
      )}
    </>
  );
};

export { SongList };
