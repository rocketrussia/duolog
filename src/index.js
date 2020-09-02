import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import StartPage from "./pages/start/StartPage";
import { downloadFile } from "./utils/downloadFile";

const App = () => {
  const [audioReady, setAudioReady] = useState(false);

  const mediaRecorder = useRef(null);
  const voice = useRef([]);

  if (!audioReady) {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      mediaRecorder.current = new MediaRecorder(stream);
      mediaRecorder.current.addEventListener("dataavailable", (event) => {
        voice.current.push(event.data);
      });
      mediaRecorder.current.addEventListener("stop", () => {
        const voiceBlob = new Blob(voice.current, {
          type: "audio/wav",
        });
        downloadFile(voiceBlob);
      });
      setAudioReady(true);
    });

    return null;
  }

  return (
    <div>
      <StartPage recorder={mediaRecorder.current} />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
