import React, { useState } from "react";
import "./App.css";
import Question from "./Question";
import Answers from "./Answers";

function App() {
  const [question, setQuestion] = useState("");
  const [lives, setLives] = useState(3);
  const [points, setPoints] = useState(0);

  function fetchQ() {
    fetch("https://opentdb.com/api.php?amount=1&difficulty=easy&encode=url3986")
      .then((response) => response.json())
      .then((data) => setQuestion(data));
  }

  function checkAnswer(guessedAnswer) {
    if (guessedAnswer === question.results[0].correct_answer) {
      alert("Correct!");
      setPoints(points + 1);
      fetchQ();
    } else {
      alert("Better luck next time!");
      setLives(lives - 1);
      fetchQ();
      if (lives < 1) {
        alert("GAME OVER :(");
      }
    }
  }

  return (
    <div className="App">
      {question ? (
        <div>
          <h2>
            Lives: {lives} / Score: {points}
          </h2>
          {lives >= 1 ? (
            <div className="Question-answers">
              <Question question={question} />

              <Answers question={question} checkAnswer={checkAnswer} />
            </div>
          ) : null}
        </div>
      ) : (
        <button className="Start-button" onClick={fetchQ}>
          Start!
        </button>
      )}
    </div>
  );
}

export default App;
