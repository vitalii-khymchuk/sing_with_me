import {
  useSongInfoStore,
  songInfoSelector,
} from "modules/AdvancedSongInfo/store";
import { useRef, useEffect, useState, useCallback } from "react";

const Lyrics = () => {
  const { embed_content } = useSongInfoStore(songInfoSelector);

  const [isDocumentLoaded, setIsDocumentLoaded] = useState(false);

  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    const callback = () => setIsDocumentLoaded(true);
    if (iframe) {
      iframe.addEventListener("load", callback);
    }
    return () => {
      if (iframe) {
        iframe.removeEventListener("load", callback);
      }
    };
  }, [iframeRef]);

  const applyStyles = useCallback(() => {
    const iframe = iframeRef.current;
    const iframeDocument = iframeRef.current.contentDocument;
    //sets full hight
    iframe.style.height =
      iframe.contentWindow.document.body.scrollHeight + "px";

    //sets inline styles
    const style = iframeDocument.createElement("style");
    style.textContent = `
      body, div {
        background-color: transparent !important;
        overflow: hidden;
        border: none !important;
        width: 100% !important;
      }
      body {margin: 0;
      font-family: sans-serif;
      }
      a, p {
        color: white !important;
        text-align: center;
      }
      .rg_embed_header {display: none}
      .rg_embed_body {padding: 0 !important}
    `;
    iframeDocument.head.appendChild(style);
  }, []);

  useEffect(() => {
    if (isDocumentLoaded && embed_content) {
      applyStyles();
    }
  }, [isDocumentLoaded, applyStyles, embed_content]);

  return (
    <iframe
      ref={iframeRef}
      srcDoc={embed_content}
      style={{ width: "100%", display: isDocumentLoaded ? "block" : "none" }}
      title="lyrics"
    />
  );
};

export { Lyrics };
