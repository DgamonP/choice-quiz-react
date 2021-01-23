import React from "react";

const Intro = props => {
  return (
    <>
      <h1>{props.title}</h1>
      <p>{props.introMessage}</p>
      <button className="btn btn-primary" onClick={props.onStartQuiz}>
        Iniciar
      </button>
    </>
  );
};

export default Intro;
