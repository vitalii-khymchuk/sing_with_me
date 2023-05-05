import {
  useSongInfoStore,
  songInfoSelector,
} from "modules/AdvancedSongInfo/store";
import { useRef, useEffect } from "react";

const Lyrics = () => {
  const { embed_content } = useSongInfoStore(songInfoSelector);

  const iframeRef = useRef(null);

  useEffect(() => {
    const iframeDocument = iframeRef.current.contentDocument;

    iframeRef.current.style.height =
      iframeRef.current.contentWindow.document.body.scrollHeight ?? 200 + "px";
    // Create a style element and add your styles
    const style = iframeDocument.createElement("style");
    style.textContent = `
      body, div {
        background-color: transparent !important;
        overflow: hidden;
      }
      a, p {
        color: white !important;
        text-align: center;
      }
    `;

    // Append the style element to the head of the iframe document
    iframeDocument.head.appendChild(style);
  }, [embed_content]);
  return (
    <iframe ref={iframeRef} srcDoc={embed_content} style={{ width: "100%" }} />
  );
};

export { Lyrics };
