import React, { useState, useEffect, useCallback } from "react";
import { SoundRecorder } from "../helpers";
import useSearchStore from "../store/store";
import { searchByRecSelector } from "../store/selectors";

const RECORDING_TIME = 10000;

const Recorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const searchByRec = useSearchStore(searchByRecSelector);

  const handleBlob = async (blob) => {
    const formData = new FormData();
    formData.append("sample", blob, "sample.wav");
    searchByRec(formData);
  };

  const startRecording = () => {
    SoundRecorder.startRecording(handleBlob);
    setIsRecording(true);
  };

  const stopRecording = () => {
    SoundRecorder.stopRecording();
    setIsRecording(false);
  };

  const onRecBtnClick = () =>
    isRecording ? stopRecording() : startRecording();

  useEffect(() => {
    let timer;
    if (isRecording) {
      timer = setTimeout(stopRecording, RECORDING_TIME);
    }
    return () => clearTimeout(timer);
  }, [isRecording]);

  return (
    <div>
      <button onClick={onRecBtnClick} className="recBtn">
        {isRecording ? "Stop Recording" : "Start Recording"}
      </button>
    </div>
  );
};

export { Recorder };
