import {
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Text,
} from "@chakra-ui/react";
import { Navigate } from "react-router-dom";
import { RxReset } from "react-icons/rx";
import { InfoCard } from "../InfoCard";
import { Lyrics } from "../Lyrics";

const TabsMenu = () => {
  const TABS_ARRAY = [
    {
      label: <RxReset />,
      component: <Navigate to={-1} />,
    },
    { label: <Text>Info</Text>, component: <InfoCard /> },
    { label: <Text>Lyrics</Text>, component: <Lyrics /> },
  ];

  return (
    <>
      <Tabs defaultIndex={1} isLazy>
        <TabList
          gap={{ base: "20px" }}
          overflowX="scroll"
          overflowY="hidden"
          borderBottom="1px"
          sx={{
            "::-webkit-scrollbar": {
              display: "none",
            },
            "-ms-overflow-style": "none",
            scrollbarWidth: "none",
          }}
          position="absolute"
          top="0"
          left="0"
          width="100vw"
        >
          {TABS_ARRAY.map(({ label }, index) => (
            <Tab key={index} fontSize="lg">
              {label}
            </Tab>
          ))}
        </TabList>
        <TabPanels pt="44px">
          {TABS_ARRAY.map(({ component }, index) => (
            <TabPanel key={index}>{component}</TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </>
  );
};

export { TabsMenu };
