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

const MainResult = ({
  song,
  SaveResultBtn = <></>,
  onMainCardClick = () => {},
  resetResults,
}) => {
  const {
    full_title,
    header_image_thumbnail_url,
    header_image_url,
    release_date_for_display,
    id,
  } = song;
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
          _hover={{ cursor: "pointer" }}
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
            _hover={{ cursor: "pointer" }}
          >
            <Heading size="md">{full_title}</Heading>
            <Text color="gray.400">{`Release date: ${
              release_date_for_display ?? "not available"
            }`}</Text>
          </Stack>
          <SaveResultBtn dataToSave={song} />
        </Box>
      </CardBody>
    </Card>
  );
};

export { MainResult };
