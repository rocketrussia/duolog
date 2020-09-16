import React, { useEffect, useRef, useState } from "react";
import styles from "./select-test.module.css";
import { downloadFile } from "../../utils/utils";
import tests from "../../services/tests";

import Select from "../Select/Select";
import Alert from "../Alert/Alert";
import Switch from "../Switch/Switch";
import TestPage from "../../pages/test/TestPage";

// TODO: Add new style
// const TestSelect = () => {
//   return (
//     <div>
//       <div>Select Test</div>
//       <div>Switch Voice Acting</div>
//       <div>Switch Record Mic</div>
//       <div>Button Start</div>
//     </div>
//   )
// }

const TestSelect = () => {
  const [select, setSelect] = useState(null);
  const [testOn, setTestOn] = useState(false);
  const [buttonOff, setButtonOff] = useState(true);
  const [userTest, setUserTest] = useState("");
  const [withMicro, setWithMicro] = useState(false);
  const [error, setError] = useState(false);

  const recorder = useRef(null);
  const voice = useRef([]);

  useEffect(() => {
    if (withMicro && !recorder.current) {
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          recorder.current = new MediaRecorder(stream);
          recorder.current.addEventListener("dataavailable", (e) => {
            voice.current.push(e.data);
          });
          recorder.current.addEventListener("stop", () => {
            const voiceBlob = new Blob(voice.current, {
              type: "audio/mp3",
            });
            downloadFile(voiceBlob);
          });
        })
        .catch((e) => {
          setError(true);
        });
    }
  }, [withMicro]);

  const startRecorder = () => {
    if (withMicro && recorder.current) {
      recorder.current.start();
    }
  };

  const stopRecorder = () => {
    if (withMicro && recorder.current) {
      recorder.current.stop();
    }
  };

  const displayTest = () => {
    setTestOn(true);
  };

  const handleSelect = (id) => {
    setSelect(id);
  };

  const handleTextarea = (event) => {
    setUserTest(event.target.value);
  };

  const buttonTitle = () => {
    if (select === null) return "Выбирете тест";
    return buttonOff ? "Напишите хотя бы 3 вопроса для своего теста" : null;
  };

  const handleSwitch = () => {
    withMicro ? setWithMicro(false) : setWithMicro(true);
  };

  const handleError = () => {
    error ? setError(false) : setError(true);
  };

  useEffect(() => {
    if (select !== null) {
      setButtonOff(false);
    }
    tests.UserTest = userTest.split("\n");

    if (select === "UserTest" && tests.UserTest.length < 3) {
      setButtonOff(true);
    }
  }, [select, userTest]);
  return (
    <>
      {!testOn && (
        <div>
          <form>
            <Select
              select={select}
              userTest={userTest}
              handleSelect={handleSelect}
              handleTextarea={handleTextarea}
            />
            {error && (
              <Alert text={"Микрофон не подключен"} handleError={handleError} />
            )}
            <Switch handleSwitch={handleSwitch} />
            <p>
              <button
                type="submit"
                title={buttonTitle()}
                disabled={buttonOff}
                onClick={() => displayTest()}
              >
                Начать интервью
              </button>
            </p>
          </form>
        </div>
      )}
      {testOn && (
        <TestPage
          initQuestions={tests[select]}
          startRecorder={startRecorder}
          stopRecorder={stopRecorder}
        />
      )}
    </>
  );
};

export default TestSelect;
