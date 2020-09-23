import React, { useEffect, useRef, useState } from "react";
import styles from "./test-select.module.css";
import { createFileUrl } from "../../utils/utils";
import tests from "../../services/tests";

import Select from "../Select/Select";
import Alert from "../Alert/Alert";
import Switch from "../Switch/Switch";
import Test from "../Test/Test";

const TestSelect = () => {
  const [select, setSelect] = useState(null);
  const [testOn, setTestOn] = useState(false);
  const [buttonOff, setButtonOff] = useState(true);
  const [userTest, setUserTest] = useState("");
  const [withSynth, setWithSynth] = useState(false)
  const [withMic, setWithMic] = useState(false);
  const [error, setError] = useState(false);

  const recorder = useRef(null);
  const voice = useRef([]);

  useEffect(() => {
    if (withMic && !recorder.current) {
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          recorder.current = new MediaRecorder(stream);
          recorder.current.addEventListener("dataavailable", (e) => {
            voice.current.push(e.data);
          });
          recorder.current.addEventListener("stop", () => {
            const voiceBlob = new Blob(voice.current, {
              type: "audio/wav",
            });
            createFileUrl(voiceBlob);
          });
        })
        .catch((e) => {
          setError(true);
        });
    }
  }, [withMic]);

  const startRecorder = () => {
    if (withMic && recorder.current) {
      recorder.current.start();
    }
  };

  const stopRecorder = () => {
    if (withMic && recorder.current) {
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
    if (select === null) return "Выбери тест";
    return buttonOff ? "Напишите хотя бы 3 вопроса для своего теста" : null;
  };

  const handleSynthQuestion = () => {
    if ('speechSynthesis' in window) {
      withSynth
        ? setWithSynth(false)
        : setWithSynth(true)
    }else{
      return <Alert
        text={"Твой браузер не поддерживает синтез звука"}
        handleError={handleError}
      />
    }
  }

  const handleMic = () => {
    withMic ? setWithMic(false) : setWithMic(true);
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
        <>
          <Select
            select={select}
            userTest={userTest}
            handleSelect={handleSelect}
            handleTextarea={handleTextarea}
          />
          {/*TODO: Adapt to other errors, no one microphone not provided*/}
          {error && (
            <Alert text={"Микрофон не подключен"} handleError={handleError} />
          )}
          <Switch
            description={'Озвучивание вопросов устройством'}
            sub={'Должно быть доступно для пользователей Chrome'}
            handleSwitch={handleSynthQuestion}
          />
          <Switch
            description={'Запись с микрофона'}
            sub={'Не забудь разрещить браузеру доступ к микрофону'}
            handleSwitch={handleMic}
          />
          <p>
            <button
              className={styles.button}
              type="submit"
              title={buttonTitle()}
              disabled={buttonOff}
              onClick={() => displayTest()}
            >
              Начать интервью
            </button>
          </p>
        </>
      )}
      {testOn && (
        <Test
          initQuestions={tests[select]}
          startRecorder={startRecorder}
          stopRecorder={stopRecorder}
          withSynth={withSynth}
          withMic={withMic}
          select={select}
        />
      )}
    </>
  );
};

export default TestSelect;
