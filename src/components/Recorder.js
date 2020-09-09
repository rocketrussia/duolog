import { useRef, useState } from "react";
import { downloadFile } from "../utils/downloadFile";

const Recorder = () => {
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
};

export default Recorder;
