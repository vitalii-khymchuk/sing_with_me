import "./App.css";
import Recorder from "components/Recorder";
import Result from "components/Result";
import GoogleLogIn from "components/GoogleLogIn";
import recognizeMusic from "services/recognizeMusic";
import { useState } from "react";
import axios from "axios";
import { Heading } from "@chakra-ui/react";
import Search from "pages/Search/Search";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "components/SharedLayout";

const App = () => {
  const [currentResult, setCurrentResult] = useState({});
  const [showCurrentResult, setShowCurrentResult] = useState(false);

  const handleBlobRecord = async (blob) => {
    const formData = new FormData();
    formData.append("sample", blob, "sample.wav");

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const { data } = await axios.post(
      "http://localhost:3001/api/v1/recognition",
      formData,
      config
    );
    setCurrentResult(data?.data);
    setShowCurrentResult(true);
  };
  return (
    // <div className="container">
    //   {!showCurrentResult && <Recorder handleBlobRecord={handleBlobRecord} />}
    //   {currentResult && showCurrentResult && <Result result={currentResult} />}
    // </div>
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Search />} />
          <Route path="/library" element={"library"} />
          <Route path="/history" element={"history"} />
          <Route path="/account" element={"account"} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
