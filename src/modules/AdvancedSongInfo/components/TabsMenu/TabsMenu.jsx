import {
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Text,
  Box,
} from "@chakra-ui/react";
import { Navigate, useParams } from "react-router-dom";
import { RxReset } from "react-icons/rx";
import { InfoCard } from "../InfoCard";
import { Lyrics } from "../Lyrics";
import { Media } from "../Media";
import { Artists } from "../Artists";
import { Related } from "../Related";
import { useEffect, useState } from "react";

const TabsMenu = ({ SaveResultBtn = <></> }) => {
  const TABS_ARRAY = [
    {
      label: <RxReset />,
      component: <Navigate to={-1} />,
    },
    {
      label: <Text>Info</Text>,
      component: <InfoCard SaveResultBtn={SaveResultBtn} />,
    },
    { label: <Text>Lyrics</Text>, component: <Lyrics /> },
    { label: <Text>Media</Text>, component: <Media /> },
    { label: <Text>Artists</Text>, component: <Artists /> },
    { label: <Text>Related</Text>, component: <Related /> },
  ];

  const { id } = useParams();
  const [tabIndex, setTabIndex] = useState(1);
  useEffect(() => {
    setTabIndex(1);
  }, [id]);

  return (
    <>
      <Tabs isLazy index={tabIndex} onChange={setTabIndex} overflow="hidden">
        <TabList
          gap={{ base: "20px" }}
          overflowX="scroll"
          overflowY="hidden"
          borderBottom="1px"
          sx={{
            "::-webkit-scrollbar": {
              display: "none",
            },
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
          position="absolute"
          top="0"
          left="0"
          width="100vw"
        >
          {TABS_ARRAY.map(({ label }, index) => (
            <Tab key={index} fontSize="lg">
              <Box color={index === tabIndex ? "rgb(193, 4, 192)" : "inherit"}>
                {label}
              </Box>
            </Tab>
          ))}
        </TabList>
        <TabPanels overflowY="scroll">
          {TABS_ARRAY.map(({ component }, index) => (
            <TabPanel key={index}>{component}</TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </>
  );
};

export { TabsMenu };
