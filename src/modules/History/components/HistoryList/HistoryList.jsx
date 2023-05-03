import { useEffect, useState } from "react";
import { getHistoryQuery } from "modules/History/api/getHistory";
import { formateResultsForSongList } from "modules/History/helpers/formateResultsForSongList";
import { SongList } from "components/SongList";

const HistoryList = () => {
  const [results, setResults] = useState(null);
  useEffect(() => {
    getHistoryQuery().then(({ data }) => {
      setResults(data);
    });
  }, []);
  console.log(results);
  const formattedResults = results ? formateResultsForSongList(results) : [];
  return <SongList songs={formattedResults} footerText="Found items:" />;
};

export { HistoryList };
