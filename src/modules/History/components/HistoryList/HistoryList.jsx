import { useEffect, useState } from "react";
import { getHistoryQuery } from "modules/History/api/getHistory";
import { formateResultsForSongList } from "modules/History/helpers/formateResultsForSongList";
import { SongList } from "components/SongList";
import { useNavigate } from "react-router-dom";

const HistoryList = ({ setResultsManually = () => {} }) => {
  const navigate = useNavigate();
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getHistoryQuery()
      .then(({ data }) => {
        setResults(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
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
      isLoading={isLoading}
    />
  );
};

export { HistoryList };
