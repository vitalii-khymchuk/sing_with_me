import { Tabs, TabList, Stack, Text, Box, Tab } from "@chakra-ui/react";
import { Fragment, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { BiSearchAlt2, BiLibrary } from "react-icons/bi";
import { VscHistory } from "react-icons/vsc";
import { RiAccountCircleFill } from "react-icons/ri";

const SITE_PAGES = [
  {
    icon: <BiSearchAlt2 size="2rem" />,
    name: "Search",
    url: "/",
    index: 0,
  },
  {
    icon: <BiLibrary size="2rem" />,
    name: "Library",
    url: "/library",
    index: 1,
  },
  {
    icon: <VscHistory size="2rem" />,
    name: "History",
    url: "/history",
    index: 2,
  },
  {
    icon: <RiAccountCircleFill size="2rem" />,
    name: "Account",
    url: "/account",
    index: 3,
  },
];

const NavBar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    const page = SITE_PAGES.find(({ url }) => url === pathname);
    if (page) {
      setTabIndex(page.index);
    } else {
      setTabIndex(-1);
    }
  }, [pathname]);

  const handleTabsChange = (tabIndex) => {
    const { url } = SITE_PAGES.find(({ index }) => index === tabIndex);
    navigate(url);
  };
  return (
    <>
      <Tabs index={tabIndex} onChange={handleTabsChange}>
        <Box display="flex" justifyContent="center" borderTop="1px">
          <TabList
            gap={{ base: "20px" }}
            overflowX="scroll"
            borderBottom="none"
            overflowY="hidden"
            sx={{
              "::-webkit-scrollbar": {
                display: "none",
              },
              "-ms-overflow-style": "none",
              scrollbarWidth: "none",
            }}
          >
            {SITE_PAGES.map(({ icon, name, url }, index) => (
              <Tab key={url}>
                <Stack>
                  <Box
                    display="flex"
                    justifyContent="center"
                    color={index === tabIndex ? "rgb(193, 4, 192)" : "inherit"}
                  >
                    {icon}
                  </Box>
                  <Text
                    fontSize="sm"
                    color={index === tabIndex ? "rgb(193, 4, 192)" : "inherit"}
                  >
                    {name}
                  </Text>
                </Stack>
              </Tab>
            ))}
          </TabList>
        </Box>
      </Tabs>
    </>
  );
};

export { NavBar };
