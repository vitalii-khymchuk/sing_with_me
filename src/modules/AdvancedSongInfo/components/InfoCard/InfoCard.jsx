import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Box,
} from "@chakra-ui/react";
import {
  useSongInfoStore,
  songInfoSelector,
  isSongInfoLoadingSelector,
} from "modules/AdvancedSongInfo/store";
import { CarouselSlider } from "../CarouselSlider";

import { Skeleton, SkeletonText } from "@chakra-ui/react";

const InfoCard = ({ SaveResultBtn = <></> }) => {
  const songInfo = useSongInfoStore(songInfoSelector) ?? {};
  const isLoading = useSongInfoStore(isSongInfoLoadingSelector);

  const {
    description,
    artist_names,
    header_image_url,
    release_date_for_display,
    title,
    album,
    id,
  } = songInfo;

  const dataToSave = {
    full_title: `${title} by ${artist_names}`,
    header_image_thumbnail_url: header_image_url,
    header_image_url: header_image_url,
    release_date_for_display,
    id,
  };

  // if (isLoading) return <p>loading...</p>;

  return (
    <>
      <Box display="flex" justifyContent="center">
        <Card
          maxW="sm"
          bgColor="transparent"
          color="white"
          p={2}
          boxShadow="none"
        >
          <CardBody p={2}>
            <Box display="flex" justifyContent="center">
              <Skeleton isLoaded={!isLoading} borderRadius="6px">
                <Image
                  objectFit="cover"
                  boxSize="20rem"
                  borderRadius="lg"
                  src={header_image_url}
                  alt={`${title} cover`}
                />
              </Skeleton>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Stack mt="6" spacing="3">
                <SkeletonText isLoaded={!isLoading} borderRadius="6px">
                  <Heading
                    size="md"
                    px={0}
                    fontWeight="400"
                  >{`Name: ${title}`}</Heading>
                </SkeletonText>
                <SkeletonText isLoaded={!isLoading} borderRadius="6px">
                  <Heading
                    size="md"
                    px={0}
                    fontWeight="400"
                  >{`Artist: ${artist_names}`}</Heading>
                </SkeletonText>
                <Text color="gray.400">{`Album: ${
                  album?.name ?? "not available"
                }`}</Text>

                <Text color="gray.400">{`Release date: ${
                  release_date_for_display ?? "not available"
                }`}</Text>
              </Stack>

              <SaveResultBtn dataToSave={dataToSave} />
            </Box>
          </CardBody>
        </Card>
      </Box>
      <Box pb="40px">
        <CarouselSlider description={description} />
      </Box>
    </>
  );
};

export { InfoCard };
