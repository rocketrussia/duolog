import React, { useEffect, useRef, useState } from "react";
import styles from "./test-select.module.css";
import { createFileUrl } from "../../utils/utils";
import getTests from '../../services/tests';

import Select from "../Select/Select";
import Alert from "../Alert/Alert";
import Switch from "../Switch/Switch";
import Test from "../Test/Test";
import {useTranslation} from 'react-i18next';

const TestSelect = ({lang}) => {
  const { t } = useTranslation();
  const [select, setSelect] = useState(null);
  const [testOn, setTestOn] = useState(false);
  const [tests, setTests] = useState(getTests(lang))
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
    if (select === null) return t('buttons.chooseTest');
    return buttonOff ? t('buttons.writeThreeQuestions') : null;
  };

  const handleSynthQuestion = () => {
    if ('speechSynthesis' in window) {
      withSynth
        ? setWithSynth(false)
        : setWithSynth(true)
    }else{
      return <Alert
        text={t('errors.notSynthesis')}
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
    setTests(getTests(lang))
  }, [lang, tests])

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
            tests={tests}
            select={select}
            userTest={userTest}
            handleSelect={handleSelect}
            handleTextarea={handleTextarea}
          />
          {error && (
            <Alert text={t('errors.micNotConnected')} handleError={handleError} />
          )}
          <Switch
            description={t('testSelect.soundingDevice')}
            sub={t('testSelect.chromeAvailable')}
            handleSwitch={handleSynthQuestion}
          />
          <Switch
            description={t('testSelect.micRecording')}
            sub={t('testSelect.dontForgetMicOn')}
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
              {t('buttons.startInterview')}
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
          lang={{lang}}
        />
      )}
    </>
  );
};

export default TestSelect;
