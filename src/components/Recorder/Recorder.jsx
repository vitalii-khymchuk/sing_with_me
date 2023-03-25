import React, { useState, useEffect, useCallback } from "react";

const RECORDING_TIME = 15000;

const Recorder = ({ handleBlobRecord }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioStream, setAudioStream] = useState(null);
  const [audioRecorder, setAudioRecorder] = useState(null);

  const stopRecording = useCallback(() => {
    audioRecorder.stop();
    audioStream.getTracks().forEach((track) => track.stop());
    setIsRecording(false);
  }, [audioRecorder, audioStream]);

  const startRecording = useCallback(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);

    setAudioStream(stream);
    setAudioRecorder(recorder);

    const chunks = [];
    recorder.addEventListener("dataavailable", (event) => {
      chunks.push(event.data);
    });

    recorder.addEventListener("stop", () => {
      const blob = new Blob(chunks);
      handleBlobRecord(blob);
    });

    recorder.start();
    setIsRecording(true);
  }, [handleBlobRecord, stopRecording]);

  useEffect(() => {
    let timer;
    if (isRecording) {
      timer = setTimeout(() => {
        stopRecording();
      }, RECORDING_TIME);
    }
    return () => clearTimeout(timer);
  }, [isRecording]);

  const onRecBtnClick = () =>
    isRecording ? stopRecording() : startRecording();

  return (
    <div>
      <button onClick={onRecBtnClick} className="recBtn">
        {isRecording ? "Stop Recording" : "Start Recording"}
      </button>
    </div>
  );
};

export default Recorder;
