import { SongList } from "components/SongList";
import { MainResult } from "../MainResult";
import { Box } from "@chakra-ui/react";

const Results = ({
  results,
  resetResults = () => {},
  toggleToSaved = () => {},
  isMainInSaved,
}) => {
  const slicedResults = results?.slice(1);
  return (
    <>
      {results && results.length > 0 && (
        <Box pt="0.7rem" display="flex" justifyContent="center">
          <MainResult
            song={results[0]}
            resetResults={resetResults}
            toggleToSaved={toggleToSaved}
            inMainInSaved={isMainInSaved}
          />
        </Box>
      )}
      {results && slicedResults.length > 1 && (
        <Box py="0.7rem">
          <SongList songs={slicedResults} footerText="Release date:" />
        </Box>
      )}
    </>
  );
};

export { Results };
