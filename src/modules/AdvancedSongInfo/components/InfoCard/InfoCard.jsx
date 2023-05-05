import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Box,
  IconButton,
} from "@chakra-ui/react";
import { RxReset } from "react-icons/rx";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import {
  useSongInfoStore,
  getSongInfoSelector,
  songInfoSelector,
} from "modules/AdvancedSongInfo/store";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const InfoCard = () => {
  const getSongInfo = useSongInfoStore(getSongInfoSelector);
  const { id } = useParams();

  useEffect(() => {
    console.log("query");
    getSongInfo(id);
  }, [getSongInfo]);

  const songInfo = useSongInfoStore(songInfoSelector);

  if (!songInfo) return <></>;

  const {
    description,
    artist_names,
    embed_content,
    header_image_url,
    release_date_for_display,
    title,
  } = songInfo;

  console.log("description", description);
  console.log("artist_names", artist_names);
  console.log("embed_content", embed_content);

  return (
    <Card maxW="sm" bgColor="transparent" color="white" p={2} boxShadow="none">
      <CardBody p={2}>
        <Box display="flex" justifyContent="center">
          <Image
            objectFit="cover"
            boxSize="20rem"
            borderRadius="lg"
            src={header_image_url}
            alt={`${title} cover`}
          />
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <IconButton // onClick={resetResults}
            aria-label="Reset result"
            type="button"
            bg="transparent"
            icon={<RxReset size="24" />}
          />
          <Stack mt="6" spacing="3" alignItems="start">
            <Heading size="md">{title}</Heading>
            <Heading size="md">{artist_names}</Heading>
            <Text color="gray.400">{`Release date: ${
              release_date_for_display ?? "not available"
            }`}</Text>
          </Stack>
          <IconButton
            aria-label="Add song to saved"
            type="button"
            bg="transparent"
            // justifyContent="end"
            icon={
              true ? <AiFillHeart size="24" /> : <AiOutlineHeart size="24" />
            }
            //   onClick={onAddToSavedClick}
          />
        </Box>
      </CardBody>
    </Card>
  );
};

export { InfoCard };
