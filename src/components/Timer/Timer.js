import React, { useEffect, useCallback, useState } from "react";

const Timer = ({
  initialTime,
  updateTimer,
  timerReset,
  updateTakenAnswer,
  takenAnswer,
}) => {
  const [seconds, setSeconds] = useState(initialTime);

  const reset = useCallback(() => setSeconds(initialTime), [initialTime]);

  useEffect(() => {
    const interval = setInterval(() => setSeconds(seconds - 1), 1000);
    if (takenAnswer) {
      updateTakenAnswer(false);
      reset();
    }
    if (timerReset) {
      updateTimer(false);
      reset();
    }
    if (seconds === -1) {
      updateTimer(true);
      reset();
    }
    return () => clearInterval(interval);
  }, [seconds, updateTimer, timerReset, updateTakenAnswer, takenAnswer, reset]);

  const time = new Date(seconds * 1000);

  const getSec = () => {
    let s = time.getSeconds();
    if (s < 10) {
      return `0${s}`;
    } else return s;
  };

  const sec = getSec();
  const min = time.getMinutes();

  if (seconds < initialTime / 10) {
    return (
      <p className="time colorRed">
        {min}:{sec}
      </p>
    );
  }

  return (
    <p className="time">
      {min}:{sec}
    </p>
  );
};

export default Timer;
