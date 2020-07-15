import React from "react";

function Question({ question }) {
  return <h3>{decodeURIComponent(question.results[0].question)}</h3>;
}

export default Question;
