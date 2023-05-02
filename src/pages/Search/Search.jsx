import { Box, useToast } from "@chakra-ui/react";
import { Results } from "modules/ShowResults";
import {
  Recorder,
  SearchForm,
  useSearchStore,
  resultsSelector,
  resetResultsSelector,
} from "modules/Recorder";
import { useEffect } from "react";

const Search = () => {
  const toast = useToast();
  const results = useSearchStore(resultsSelector);
  const resetResults = useSearchStore(resetResultsSelector);

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
        <Results results={results} resetResults={resetResults} />
      )}
    </>
  );
};

export  {Search};
