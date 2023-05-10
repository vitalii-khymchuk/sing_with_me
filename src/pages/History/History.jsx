import { Box } from "@chakra-ui/react";
import { HistoryList } from "modules/History";
import { useSearchStore, setResultsManuallySelector } from "modules/Recorder";

const History = () => {
  const setResultsManually = useSearchStore(setResultsManuallySelector);

  return (
    <Box pt="1rem">
      <HistoryList setResultsManually={setResultsManually} />
    </Box>
  );
};

export { History };
