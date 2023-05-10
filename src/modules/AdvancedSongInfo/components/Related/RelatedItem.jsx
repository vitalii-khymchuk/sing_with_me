import { useDisclosure, Button, Collapse, Box, Text } from "@chakra-ui/react";
import { AiOutlineDown } from "react-icons/ai";
import { SongList } from "components/SongList";
import { useNavigate } from "react-router-dom";

const formatStr = (str) =>
  str[0].toUpperCase() + str.slice(1, str.length).replace(/_/g, " ");

const RelatedItem = ({ data = {} }) => {
  const { isOpen, onToggle } = useDisclosure();
  const navigate = useNavigate();

  const { relationship_type, songs } = data;

  const redirectTo = (id) => {
    navigate(`/details/${id}`);
  };

  const arrowStyles = {
    transform: `rotate(${isOpen ? "180deg" : "0"})`,
    transition: "transform 0.3s ease-in-out",
  };

  return (
    <>
      <Button
        onClick={onToggle}
        variant="outline"
        borderColor={isOpen ? "rgb(193, 4, 192) !important" : "white"}
        _active={{ borderColor: "rgb(193, 4, 192)" }}
      >
        <Box display="flex" justifyContent="space-between" width="100%">
          <Box></Box>
          <Text>{formatStr(relationship_type)}</Text>
          <AiOutlineDown style={arrowStyles} />
        </Box>
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <SongList
          songs={songs}
          footerText="Release date: "
          onCardClick={redirectTo}
        />
      </Collapse>
    </>
  );
};

export { RelatedItem };
