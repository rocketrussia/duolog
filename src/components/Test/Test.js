import React, { useState, useEffect, useRef } from "react";
import Stats from "../Stats/Stats";
import Timer from "../Timer/Timer";

import styles from "./test.module.css";
import {cn} from '../../utils/utils';

const Test = ({ initQuestions, startRecorder, stopRecorder }) => {
  const [questions, setQuestions] = useState(initQuestions);
  const [timerReset, setTimerReset] = useState(false);
  const [takenAnswer, setTakenAnswer] = useState(false);
  const [wrong, setWrong] = useState([]);
  const [right, setRight] = useState([]);

  const stopStatus = useRef(false);

  const randNum = useRef(Math.floor(questions.length * Math.random()));
  const prevLength = useRef(questions.length);

  if (questions.length !== prevLength.current) {
    randNum.current = Math.floor(questions.length * Math.random());
    prevLength.current = questions.length;
  }

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
    setRight(right.concat(questions[randNum.current]));
    setQuestions(getNewQuestions());
    setTakenAnswer(true);
  };

  const handleWrong = () => {
    setWrong(wrong.concat(questions[randNum.current]));
    setQuestions(getNewQuestions());
    setTakenAnswer(true);
  };

  useEffect(() => {
    if (timerReset) {
      setWrong(wrong.concat(questions[randNum.current]));
      setQuestions(getNewQuestions());
      setTimerReset(false);
    }
  });

  useEffect(() => {
    startRecorder();
    stopStatus.current = false;
  }, []);

  if (questions.length === 0) {
    if (!stopStatus.current) {
      stopRecorder();
      stopStatus.current = true;
    }
    return <Stats initQuestions={initQuestions} wrong={wrong} right={right} />;
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
      <p className={styles.question}>{questions[randNum.current]}</p>
      <span className={styles.buttonBlock}>
        <button className={cn(styles.button, styles.marginRight, styles.red)} onClick={handleWrong}>
          Не знаю
        </button>
        <button className={cn(styles.button, styles.green)} onClick={handleRight}>
          Ответил
        </button>
      </span>
    </div>
  );
};

export default Test;
