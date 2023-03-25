import "./App.css";
import Recorder from "components/Recorder";
import Result from "components/Result";
import recognizeMusic from "services/recognizeMusic";
import { useState } from "react";

const App = () => {
  const [currentResult, setCurrentResult] = useState({});
  const [showCurrentResult, setShowCurrentResult] = useState(false);

  const handleBlobRecord = async (blob) => {
    const result = await recognizeMusic.getInfo(blob);
    setCurrentResult(result);
    setShowCurrentResult(true);
  };
  return (
    <div className="container">
      {!showCurrentResult && <Recorder handleBlobRecord={handleBlobRecord} />}
      {showCurrentResult && <Result result={currentResult} />}
    </div>
  );
};

export default App;
