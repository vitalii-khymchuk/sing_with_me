import { Stack, Link, Heading } from "@chakra-ui/react";
import { useSongInfoStore, songInfoSelector } from "../../store";
import YouTube from "react-youtube";
import { BsSpotify } from "react-icons/bs";
import { RiSoundcloudLine } from "react-icons/ri";

const Media = () => {
  const { media = [] } = useSongInfoStore(songInfoSelector);

  const youtube = media.find(({ provider }) => provider === "youtube");
  const videoId = youtube && youtube.url && youtube.url.split("v=")[1];

  const spotify = media.find(({ provider }) => provider === "spotify");

  const soundcloud = media.find(({ provider }) => provider === "soundcloud");
  return (
    <>
      {videoId && <YouTube videoId={videoId} opts={{ width: "100%" }} />}
      <Stack pt="2rem" justifyContent="space-around">
        {spotify && (
          <Link
            href={spotify.url}
            isExternal
            display="flex"
            alignItems="center"
          >
            <BsSpotify size="3rem" />
            <Heading ml={6}>Listen on spotify</Heading>
          </Link>
        )}
        {soundcloud && (
          <Link
            href={soundcloud.url}
            isExternal
            display="flex"
            alignItems="center"
          >
            <RiSoundcloudLine size="3rem" />
            <Heading ml={6}>Listen on soundcloud</Heading>
          </Link>
        )}
      </Stack>
    </>
  );
};

export { Media };
