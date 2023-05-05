import { Tab, Tabs, TabList, TabPanels, TabPanel } from "@chakra-ui/react";
import { useState } from "react";

const TabsMenu = ({ tabsArray }) => {
  console.log(tabsArray);
  const [tabIndex, setTabIndex] = useState(1);
  return (
    <>
      <Tabs index={tabIndex} onChange={setTabIndex}>
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
        >
          {tabsArray.map(({ label }) => (
            <Tab>{label}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {tabsArray.map(({ component }) => (
            <TabPanel>{component}</TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </>
  );
};

export { TabsMenu };
