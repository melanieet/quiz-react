import React from "react";

function Answers({ question, checkAnswer }) {
  const answersArray = [];

  if (question) {
    answersArray.push(
      question.results[0].correct_answer,
      ...question.results[0].incorrect_answers
    );
  }

  return (
    <div>
      {answersArray
        .sort(() => Math.random() - 0.5)
        .map((answer) => {
          return (
            <button onClick={() => checkAnswer(answer)}>
              {decodeURIComponent(answer)}
            </button>
          );
        })}
    </div>
  );
}

export default Answers;
