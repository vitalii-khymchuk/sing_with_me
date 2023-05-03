import { useEffect, useState } from "react";
import { getHistoryQuery } from "modules/History/api/getHistory";
import { formateResultsForSongList } from "modules/History/helpers/formateResultsForSongList";
import { SongList } from "components/SongList";
import { useNavigate } from "react-router-dom";

const HistoryList = ({ setResultsManually = () => {} }) => {
  const navigate = useNavigate();
  const [results, setResults] = useState(null);
  useEffect(() => {
    getHistoryQuery().then(({ data }) => {
      setResults(data);
    });
  }, []);

  const onCardClick = (id) => {
    const { hits } = results.find((e) => e._id === id);
    setResultsManually(hits);
    navigate("/");
  };

  const formattedResults = results ? formateResultsForSongList(results) : [];
  return (
    <SongList
      songs={formattedResults}
      footerText="Found items:"
      onCardClick={onCardClick}
    />
  );
};

export { HistoryList };
