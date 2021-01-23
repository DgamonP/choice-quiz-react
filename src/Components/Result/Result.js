import React from "react";
import Transcript from "./Transcript";

const Result = props => {
  return (
    <>
      <h2>Resultados</h2>
      <p>{props.message}</p>
      <p>Tu resultado fue {props.score}%</p>
      <button className="btn-action" onClick={props.restart}>
        {props.passQuiz ? "Reiniciar" : "Try Again"}
      </button>
      {props.passQuiz && <Transcript transcript={props.transcript} />}
    </>
  );
};

export default Result;
