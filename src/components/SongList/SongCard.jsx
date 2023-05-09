import {
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
} from "@chakra-ui/react";

const SongCard = ({
  song: {
    full_title,
    header_image_thumbnail_url,
    release_date_for_display,
    id,
  },
  onCardClick,
}) => {
  const onCardClickHandler = () => {
    onCardClick(id);
  };
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      h="7rem"
      _hover={{
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        cursor: "pointer",
      }}
      _focus={{
        backgroundColor: "rgba(255, 255, 255, 0.8)",
      }}
      onClick={onCardClickHandler}
    >
      <Image
        objectFit="cover"
        boxSize="7rem"
        borderRadius="md"
        src={header_image_thumbnail_url}
        alt={`${full_title} cover`}
      />

      <Stack>
        <CardBody
          p="sm"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
          height="7rem"
        >
          <Heading size="sm" maxH="2.5em" overflow="hidden">
            {full_title}
          </Heading>
        </CardBody>
        <CardFooter p="0.3rem" mt="0">
          <Text color={"gray.600"}>{release_date_for_display}</Text>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export { SongCard };
