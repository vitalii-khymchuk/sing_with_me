import { SongList } from "components/SongList";
import { MainResult } from "../MainResult";
import { Box } from "@chakra-ui/react";

const Results = ({
  results,
  resetResults = () => {},
  SaveResultBtn = <></>,
  onCardClick = () => {},
}) => {
  const slicedResults = results?.slice(1);
  return (
    <>
      {results && results.length > 0 && (
        <Box pt="0.7rem" display="flex" justifyContent="center">
          <MainResult
            song={results[0]}
            resetResults={resetResults}
            SaveResultBtn={SaveResultBtn}
            onMainCardClick={onCardClick}
          />
        </Box>
      )}
      {results && slicedResults.length > 1 && (
        <Box py="0.7rem">
          <SongList
            songs={slicedResults}
            onCardClick={onCardClick}
            footerText="Release date:"
          />
        </Box>
      )}
    </>
  );
};

export { Results };
