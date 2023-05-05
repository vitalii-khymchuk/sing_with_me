import { TabsMenu, InfoCard, Lyrics } from "modules/AdvancedSongInfo/";
import { RxReset } from "react-icons/rx";
import { Navigate, useNavigate } from "react-router-dom";
import { Text } from "@chakra-ui/react";

const Details = () => {
  const navigate = useNavigate();
  const onBackClick = () => navigate(-1);

  const TABS_ARRAY = [
    { label: <RxReset onClick={onBackClick} />, component: <></> },
    { label: <Text>Info</Text>, component: <InfoCard /> },
    { label: <Text>Lyrics</Text>, component: <Lyrics /> },
  ];

  return <TabsMenu tabsArray={TABS_ARRAY} />;
};

export { Details };
