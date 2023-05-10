import React, { useState, useEffect } from "react";
import { IconButton } from "@chakra-ui/react";
import { SoundRecorder } from "../../helpers";
import { useSearchStore } from "../../store/store";
import { searchByRecSelector, isLoadingSelector } from "../../store/selectors";
import { ReactComponent as RecordIcon } from "../../assets/noun-search-music-4345472.svg";
import { keyframes } from "@emotion/react";

const RECORDING_TIME = 10000;

const Recorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const searchByRec = useSearchStore(searchByRecSelector);
  const isLoading = useSearchStore(isLoadingSelector);

  const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

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
    <IconButton
      icon={
        <RecordIcon
          style={{
            fill: isRecording ? "rgb(193, 4, 192)" : "black",
            width: "4rem",
          }}
        />
      }
      onClick={onRecBtnClick}
      w="8rem"
      h="8rem"
      borderRadius="50%"
      boxShadow="0px 0px 4px 4px rgba(0, 0, 0, 0.4)"
      transition="box-shadow scale 0.3s ease-in-out"
      transform="scale(1)"
      bgGradient="radial-gradient(circle, rgb(224, 224, 224) 66%, rgb(117, 117, 117) 68%)"
      isActive={isRecording}
      animation={isLoading ? `${spinAnimation} 1s infinite linear` : "none"}
      _hover={{
        boxShadow: "0px 0px 2px 2px rgba(0, 0, 0, 0.6)",
        transform: "scale(0.98)",
        bg: "radial-gradient(circle, rgb(224, 224, 224) 66%, rgb(117, 117, 117) 68%) !important",
      }}
      _focus={{
        boxShadow: "0px 0px 2px 2px rgba(0, 0, 0, 0.6)",
        transform: "scale(0.98)",
        bg: "radial-gradient(circle, rgb(224, 224, 224) 66%, rgb(117, 117, 117) 68%) !important",
      }}
      _active={{
        boxShadow: "0px 0px 4px 4px rgb(193, 4, 192)",
        transform: "scale(0.97)",
        bg: "radial-gradient(circle, rgb(224, 224, 224) 66%, rgb(117, 117, 117) 68%) !important",
      }}
    />
  );
};

export { Recorder };
