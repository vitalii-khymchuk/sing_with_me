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

const MainResult = ({
  song: {
    full_title,
    header_image_url,
    release_date_for_display,
    header_image_thumbnail_url,
    id,
  },
  inMainInSaved = () => false,
  onMainCardClick = () => {},
  resetResults,
  toggleToSaved,
}) => {
  const isInSaved = inMainInSaved(id);

  const onAddToSavedClick = () => {
    toggleToSaved(
      {
        full_title,
        header_image_thumbnail_url,
        release_date_for_display,
        id,
      },
      isInSaved
    );
  };

  const onMainCardClickHandler = () => {
    onMainCardClick(id);
  };
  return (
    <Card maxW="sm" bgColor="transparent" color="white" p={2} boxShadow="none">
      <CardBody p={2}>
        <Box
          display="flex"
          justifyContent="center"
          onClick={onMainCardClickHandler}
        >
          <Image
            objectFit="cover"
            boxSize="20rem"
            borderRadius="lg"
            src={header_image_url}
            alt={`${full_title} cover`}
          />
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <IconButton
            aria-label="Reset result"
            type="button"
            bg="transparent"
            icon={<RxReset size="24" />}
            onClick={resetResults}
          />
          <Stack
            mt="6"
            spacing="3"
            alignItems="start"
            onClick={onMainCardClickHandler}
          >
            <Heading size="md">{full_title}</Heading>
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
              isInSaved ? (
                <AiFillHeart size="24" />
              ) : (
                <AiOutlineHeart size="24" />
              )
            }
            onClick={onAddToSavedClick}
          />
        </Box>
      </CardBody>
    </Card>
  );
};

export { MainResult };
