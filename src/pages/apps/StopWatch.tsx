import { useEffect, useState } from "react";

const formatTime = (timeInSeconds: number) => {
  const hours = String(Math.floor(timeInSeconds / 3600));
  const minutes = String(Math.floor((timeInSeconds % 3600) / 60));
  const seconds = String(timeInSeconds % 60);

  const hoursInString = hours.toString().padStart(2, "0");
  const minutesInStrings = minutes.toString().padStart(2, "0");
  const secondsInStrings = seconds.toString().padStart(2, "0");

  return `${hoursInString}:${minutesInStrings}:${secondsInStrings}`;
};

function StopWatch() {
  const [time, setTime] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);

  const resetHandler = () => {
    setTime(0);
    setIsActive(false);
  };

  useEffect(() => {
    let intervalId: number;

    if (isActive) {
      intervalId = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isActive]);

  return (
    <main className="dashboard-app-container">
      <h1>Stopwatch</h1>
      <section>
        <div className="stopwatch">
          <h2>{formatTime(time)}</h2>
          <button onClick={() => setIsActive((prev) => !prev)}>
            {isActive ? "Stop" : "Start"}
          </button>
          <button onClick={resetHandler}>Reset</button>
        </div>
      </section>
    </main>
  );
}

export default StopWatch;
