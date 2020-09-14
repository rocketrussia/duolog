import React, { useState, useEffect, useRef } from "react";
import styles from "./testpage.module.css";
import Stats from "../../components/Stats/Stats";
import Timer from "../../components/Timer/Timer";

const TestPage = ({ initQuestions, startRecorder, stopRecorder }) => {
  const [questions, setQuestions] = useState(initQuestions);
  const [timerReset, setTimerReset] = useState(false);
  const [takenAnswer, setTakenAnswer] = useState(false);
  const [wrong, setWrong] = useState([]);
  const [right, setRight] = useState([]);

  const stopStatus = useRef(false)

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
    startRecorder()
    stopStatus.current = false
  }, [])

  if (questions.length === 0) {
    if (!stopStatus.current) {
      stopRecorder()
      stopStatus.current = true
    }
    return <Stats initQuestions={initQuestions} wrong={wrong} right={right} />;
  }

  return (
    <div className="app">
      <div className="center">
        <Timer
          initialTime={90}
          updateTimer={updateTimer}
          timerReset={timerReset}
          updateTakenAnswer={updateTakenAnswer}
          takenAnswer={takenAnswer}
        />
        <p className="question">{questions[randNum.current]}</p>
      </div>
      <span className="spanBottom">
        <button className="marginRight red" onClick={handleWrong}>
          Не знаю
        </button>
        <button className="green" onClick={handleRight}>
          Ответил
        </button>
      </span>
    </div>
  );
};

export default TestPage;
