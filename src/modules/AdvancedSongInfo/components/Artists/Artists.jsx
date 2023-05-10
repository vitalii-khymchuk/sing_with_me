import { Stack, Card, CardBody, Image, Heading, Link } from "@chakra-ui/react";
import { useSongInfoStore, songInfoSelector } from "../../store";

const Artists = () => {
  const { producer_artists = [] } = useSongInfoStore(songInfoSelector);
  return (
    <Stack>
      {producer_artists.map(({ name, header_image_url, url }) => (
        <Link url={url} isExternal>
          <Card maxW="sm">
            <CardBody>
              <Image
                src={header_image_url}
                alt={name}
                borderRadius="lg"
                boxSize="22rem"
                objectFit="cover"
              />
              <Heading size="md">{name}</Heading>
            </CardBody>
          </Card>
        </Link>
      ))}
    </Stack>
  );
};

export { Artists };
