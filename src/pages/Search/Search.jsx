import { Box, useToast } from "@chakra-ui/react";
import { Results } from "modules/ShowResults";
import {
  Recorder,
  SearchForm,
  useSearchStore,
  resultsSelector,
  resetResultsSelector,
} from "modules/Recorder";
import {
  useSavedLibStore,
  addToSavedSelector,
  savedSongsSelector,
  removeFromSavedSelector,
} from "modules/SavedLibrary";
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

  const addToSaved = useSavedLibStore(addToSavedSelector);
  const removeFromSaved = useSavedLibStore(removeFromSavedSelector);

  const toggleToSaved = async (data, isInSaved) => {
    if (isInSaved) {
      await removeFromSaved(data.id);
    } else {
      await addToSaved(data);
    }
    toast({
      title: `Song has ${isInSaved ? "removed from" : "added to"} saved`,
      status: "info",
      isClosable: true,
    });
  };

  const savedSongs = useSavedLibStore(savedSongsSelector);

  const isMainInSaved = (id) => savedSongs.some((item) => item.id === id);

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
          toggleToSaved={toggleToSaved}
          isMainInSaved={isMainInSaved}
        />
      )}
    </>
  );
};

export { Search };
