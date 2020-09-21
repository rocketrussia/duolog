import React, { useState, useEffect, useRef } from "react";
import Stats from "../Stats/Stats";
import Timer from "../Timer/Timer";

import styles from "./test.module.css";
import {cn, synthQuestion} from "../../utils/utils";

const Test = ({
  initQuestions,
  startRecorder,
  stopRecorder,
  withSynth,
  withMic,
  select,
}) => {
  const [questions, setQuestions] = useState(initQuestions);
  const [timerReset, setTimerReset] = useState(false);
  const [takenAnswer, setTakenAnswer] = useState(false);
  const [wrong, setWrong] = useState([]);
  const [right, setRight] = useState([]);

  const randNum = useRef(Math.floor(questions.length * Math.random()));
  const prevLength = useRef(questions.length);

  if (questions.length !== prevLength.current) {
    randNum.current = Math.floor(questions.length * Math.random());
    prevLength.current = questions.length;
  }

  const question = questions[randNum.current];

  function getNewQuestions() {
    return questions.filter((_, index) => index !== randNum.current);
  }

  function updateTimer(value) {
    setTimerReset(value);
  }

  function updateTakenAnswer(value) {
    setTakenAnswer(value);
  }

  const handleRight = () => {
    setRight(right.concat(question));
    setQuestions(getNewQuestions());
    setTakenAnswer(true);
  };

  const handleWrong = () => {
    setWrong(wrong.concat(question));
    setQuestions(getNewQuestions());
    setTakenAnswer(true);
  };

  useEffect(() => {
    if (timerReset) {
      setWrong(wrong.concat(question));
      setQuestions(getNewQuestions());
      setTimerReset(false);
    }

    if(withSynth === true) {
      if(!question) return
      setTimeout(
        () =>
          synthQuestion(question),
        500)
    }
  }, [question]);

  useEffect(() => {
    startRecorder();
  }, []);

  if (questions.length === 0) {
    return (
      <Stats
        initQuestions={initQuestions}
        wrong={wrong}
        right={right}
        select={select}
        withMic={withMic}
        stopRecorder={stopRecorder}
      />
    );
  }

  return (
    <div className={styles.test}>
      <Timer
        initialTime={90}
        updateTimer={updateTimer}
        timerReset={timerReset}
        updateTakenAnswer={updateTakenAnswer}
        takenAnswer={takenAnswer}
      />
      <p className={styles.question}>{question}</p>
      <span className={styles.buttonBlock}>
        <button
          className={cn(styles.button, styles.marginRight, styles.red)}
          onClick={handleWrong}
        >
          Не знаю
        </button>
        <button
          className={cn(styles.button, styles.green)}
          onClick={handleRight}
        >
          Ответил
        </button>
      </span>
    </div>
  );
};

export default Test;
