import { Tab } from "@chakra-ui/react";

const NavLink = ({ name }) => {
  return (
    <Tab
      fontSize="lg"
      _active={{ color: "while", borderBottom: "1px solid white" }}
    >
      {name}
    </Tab>
  );
};

export { NavLink };
