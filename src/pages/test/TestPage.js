import React, { useState, useEffect, useRef, useCallback } from "react";
import "./TestPage.css";
import End from "../../components/End";
import Timer from "../../components/Timer";

const TestPage = ({ initQuestions }) => {
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
  const getNewQuestions = useCallback(
    () => questions.filter((_, index) => index !== randNum.current),
    [questions]
  );

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
  }, [timerReset, wrong, questions, getNewQuestions]);

  if (questions.length === 0) {
    return (
      <End
        initQuestions={initQuestions}
        wrong={wrong}
        right={right}
        audioUrl={'blob-link'}
      />
    );
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
