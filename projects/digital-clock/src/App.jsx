import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [time, updateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      updateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="App">
        <div className="container">
          <h1>My Digital Clock</h1>
          <div className="clock-container">
            <div className="time-text-wrapper">
              <span className="time-text">{time.toLocaleTimeString()}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
