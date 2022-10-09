import React, { useState, useEffect } from "react";

// useState:
// --- allows us to store state in a function based component
// --- used to store the timers time + whether the stopwatch is running or not

// useEffect:
// --- checks if the timer is running and if it is, updates the time

const TaskTimer = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="timer">
      <div className="numbers">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>

      </div>
      <div className="buttons">
        <button onClick={() => setRunning(true)}>Start</button>
        <button onClick={() => setRunning(false)}>Pause</button>
        <button onClick={() => setTime(0)}>Reset</button>
      </div>
    </div>
  )
}

// --------------------------------------------------------------------------------------------------
export default TaskTimer;
