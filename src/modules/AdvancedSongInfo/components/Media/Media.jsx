import { HStack, Link } from "@chakra-ui/react";
import { useSongInfoStore, songInfoSelector } from "../../store";
import YouTube from "react-youtube";
import { BsSpotify } from "react-icons/bs";
import { SiApplemusic } from "react-icons/si";

const Media = () => {
  const { media = [] } = useSongInfoStore(songInfoSelector);

  const youtube = media.find(({ provider }) => provider === "youtube");
  const videoId = youtube && youtube.url && youtube.url.split("v=")[1];

  const spotify = media.find(({ provider }) => provider === "spotify");
  console.log(media);
  return (
    <>
      {videoId && <YouTube videoId={videoId} opts={{ width: "100%" }} />}
      <HStack pt="2rem" justifyContent="space-around">
        {spotify && (
          <Link href={spotify.url} isExternal>
            <BsSpotify size="3rem" />
          </Link>
        )}
      </HStack>
    </>
  );
};

export { Media };
