const formatTime = (timeInSeconds: number) => {
  const hours = String(Math.floor(timeInSeconds / 3600));
  const minutes = String(Math.floor((timeInSeconds % 3600) / 60));
  const seconds = String(timeInSeconds % 60);

  return `${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}:${seconds.padStart(2, "0")}`;
};

function StopWatch() {
  return (
    <main className="dashboard-app-container">
      <h1>Stopwatch</h1>
      <section>
        <div className="stopwatch">
          <h2>00:00:00</h2>
          <button>Start</button>
          <button>Reset</button>
        </div>
      </section>
    </main>
  );
}

export default StopWatch;
