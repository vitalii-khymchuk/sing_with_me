import { Box } from "@chakra-ui/react";
import { SavedList } from "modules/SavedLibrary";
import { useNavigate } from "react-router-dom";

const Saved = () => {
  const navigate = useNavigate();
  const navToDetails = (id) => {
    navigate(`/details/${id}`);
  };
  return (
    <Box pt="0.7rem">
      <SavedList onCardClick={navToDetails} />
    </Box>
  );
};

export { Saved };
