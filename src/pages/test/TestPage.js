import React, {useState} from 'react';
import './TestPage.css'
import End from '../../components/End';
import Timer from '../../components/Timer';

const TestPage = ({initQuestions}) => {
  const [questions, setQuestions] = useState(initQuestions);
  const [timerReset, setTimerReset] = useState(false)
  const [takenAnswer, setTakenAnswer] = useState(false)
  const [wrong, setWrong] = useState([])
  const [right, setRight] = useState([])

  let randNum = Math.floor(questions.length * Math.random())
  const newQuestions = questions
    .filter((question, index) => index !== randNum)

  function updateTimer(value) {
    setTimerReset(value)
  }

  function updateTakenAnswer(value) {
    setTakenAnswer(value)
  }

  const handleRight = () => {
    setRight(right.concat(questions[randNum]))
    setQuestions(newQuestions)
    setTakenAnswer(true)
  }

  const handleWrong = () => {
    setWrong(wrong.concat(questions[randNum]))
    setQuestions(newQuestions)
    setTakenAnswer(true)
  }

  if(timerReset) {
    setWrong(wrong.concat(questions[randNum]))
    setQuestions(newQuestions)
    setTimerReset(false)
  }

  if (questions.length === 0) return <End initQuestions={initQuestions} wrong={wrong} right={right} />
  return (
    <div className="app">
      <div className="center">
        <Timer
          initialTime={60}
          updateTimer={updateTimer}
          timerReset={timerReset}
          updateTakenAnswer={updateTakenAnswer}
          takenAnswer={takenAnswer}
        />
        <p className="question">{questions[randNum]}</p>
      </div>
      <span className="spanBottom">
        <button
          className="marginRight red"
          onClick={handleWrong}
        >
          Не знаю
        </button>
        <button
          className="green"
          onClick={handleRight}
        >
          Ответил
        </button>
      </span>
    </div>
  )
}

export default TestPage