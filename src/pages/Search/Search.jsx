import { Box, useToast } from "@chakra-ui/react";
import { Results } from "modules/ShowResults";
import {
  Recorder,
  SearchForm,
  useSearchStore,
  resultsSelector,
  resetResultsSelector,
} from "modules/Recorder";
import { AddToSavedBtn } from "modules/SavedLibrary";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const toast = useToast();
  const results = useSearchStore(resultsSelector);
  const resetResults = useSearchStore(resetResultsSelector);

  const navigate = useNavigate();
  const navToDetails = (id) => {
    navigate(`/details/${id}`);
  };

  useEffect(() => {
    if (results && results.length === 0) {
      toast({
        title: "No results by your query",
        status: "info",
        isClosable: true,
      });
    }
  }, [results, toast]);

  return (
    <>
      {(!results || results.length === 0) && (
        <>
          <Box mt="1rem">
            <SearchForm />
          </Box>
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
          >
            <Recorder />
          </Box>
        </>
      )}
      {results && results.length !== 0 && (
        <Results
          results={results}
          resetResults={resetResults}
          SaveResultBtn={AddToSavedBtn}
          onCardClick={navToDetails}
        />
      )}
    </>
  );
};

export { Search };
