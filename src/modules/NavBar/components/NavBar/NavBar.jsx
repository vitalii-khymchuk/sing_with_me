import { Tabs, TabList } from "@chakra-ui/react";
import { NavLink } from "../NavLink";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const SITE_PAGES = [
  { name: "Search", url: "/", index: 0 },
  { name: "Library", url: "/library", index: 1 },
  { name: "History", url: "/history", index: 2 },
  { name: "Account", url: "/account", index: 3 },
];

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    const { index } = SITE_PAGES.find(({ url }) => url === location.pathname);
    setTabIndex(index);
  }, [location.pathname]);

  const handleTabsChange = (tabIndex) => {
    const { url } = SITE_PAGES.find(({ index }) => index === tabIndex);
    navigate(url);
  };

  return (
    <>
      <Tabs index={tabIndex} onChange={handleTabsChange}>
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
          {SITE_PAGES.map(({ name, url }) => (
            <NavLink key={name} name={name} url={url} />
          ))}
        </TabList>
      </Tabs>
    </>
  );
};

export { NavBar };
