import { useState } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState();

  const padZero = (integer) => {
    return integer < 10 ? `0${integer}` : `${integer}`;
  };

  const formatTime = (time) => {
    const seconds = Math.floor((time % 60000) / 1000);
    const minute = Math.floor((time % 3600000) / 60000);
    const hour = Math.floor(time / 3600000);

    return `${padZero(hour)} : ${padZero(minute)} : ${padZero(seconds)}`;
  };

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);

      setIntervalId(interval);
    }
  };

  const stopTimer = () => {
    if (isRunning) {
      clearInterval(intervalId);
      setIsRunning(!isRunning);
    }
  };

  const clearTimer = () => {
    setTime(0);
    setIsRunning(false);
    clearInterval(intervalId);
  };

  return (
    <>
      <div className="p-20 w-2/4 h-60 flex flex-col justify-center items-center mx-auto bg-slate-300  border-black border rounded-xl justify-self-center self-center my-20">
        <h1 className="text-center text-7xl mb-12">
          {formatTime(time)}{" "}
          <span className="text-sm block">
            {time < 100
              ? "00" + Math.floor(time % 1000)
              : Math.floor(time % 1000)}
          </span>
        </h1>
        <div className="flex gap w-full items-center justify-center gap-10">
          <button
            onClick={isRunning ? stopTimer : startTimer}
            className={`text-4xl border border-black rounded-lg px-10 py-3 ${
              isRunning
                ? " bg-yellow-500 hover:bg-yellow-700 active:bg-yellow-950"
                : " bg-green-500 hover:bg-green-700 active:bg-green-950"
            }`}
          >
            {isRunning ? "Pause" : "Start"}
          </button>

          <button
            onClick={clearTimer}
            className="text-4xl border border-black rounded-lg px-10 py-3 bg-red-500 hover:bg-red-700 active:bg-red-950"
          >
            Clear
          </button>
        </div>
      </div>
    </>
  );
};

export default StopWatch;
