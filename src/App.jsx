import { useState } from "react";
import Quiz from "./components/Quiz";
import LandingPage from "./components/LandingPage";
import "./App.css";

function App() {
  const [started, setStarted] = useState(false);
  return (
    <>
      <div className="main-app">
        {started ? (
          <Quiz onExit={() => setStarted(false)} />
        ) : (
          <LandingPage onStart={() => setStarted(true)} />
        )}
      </div>
    </>
  );
}

export default App
