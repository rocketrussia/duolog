import React, {useState} from "react";
import TestSelect from '../TestSelect/TestSelect';

const Stats = ({ initQuestions, wrong, right, voiceUrl }) => {
  const [restart, setRestart] = useState(false)
  return (
    <>
      {!restart && (<div className="app">
        <p style={{ fontSize: "32px" }}>Спасибо за уделенное время!</p>
        <p>
          Ответил: {right.length} / {initQuestions.length}{" "}
        </p>
        <p>
          Не дал ответа: {wrong.length} / {initQuestions.length}:{" "}
        </p>
        <ol style={{ marginBottom: "80px" }}>
          {wrong.map((noanswer, index) => (
            <li
              style={{
                marginTop: "20px",
                fontSize: "18px",
                textAlign: "left",
              }}
              key={index}
            >
              {noanswer}
            </li>
          ))}
        </ol>
        {voiceUrl && (
          <button className="download" href={voiceUrl} download="duolog-mic.wav">
            Скачать запись
          </button>
        )}
        <button
          style={{ marginBottom: "80px" }}
          onClick={() => setRestart(true)}
        >
          Вернуться к выбору тестов
        </button>
      </div>)}
      {restart && (<TestSelect />)}
    </>
  );
};

export default Stats;
