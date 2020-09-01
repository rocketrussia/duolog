import React from "react";

const End = ({ initQuestions, wrong, right, audioUrl }) => {
  console.log(audioUrl)
  return (
    <div className="app">
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
      <button className="download" href={audioUrl} download="duolog-mic.mp3">
        Скачать запись
      </button>
      <button
        style={{ marginBottom: "80px" }}
        onClick={() => window.location.reload()}
      >
        Вернуться на главную
      </button>
    </div>
  );
};

export default End;
