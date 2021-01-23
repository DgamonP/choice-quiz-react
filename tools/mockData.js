const quiz = {
  id: 1,
  title: "Cuestionario",
  introMessage: "Cuestionario N°1: Cultura",
  passMessage: "Felicitaciones!",
  failMessage: "Fallaste en tus Respuestas.",
  minScore: 50,
  questions: [
    {
      id: 1,
      type: "SingleSelect",
      text: "Pandemia mundial 2019?",
      randomiseAnswers: true,
      answers: [
        {
          text: "AH1N1",
          correct: false
        },
        {
          text: "Covid-19",
          correct: true
        },
        {
          text: "Gripe Española",
          correct: false
        }
      ]
    },
    {
      id: 2,
      type: "MultiSelect",
      text: "paises area mayor a 5.000.000 m2?",
      randomiseAnswers: false,
      answers: [
        {
          text: "Canada",
          correct: true
        },
        {
          text: "Japan",
          correct: false
        },
        {
          text: "Brazil",
          correct: true
        }
      ]
    },
    {
      id: 3,
      type: "OrderSelect",
      text: "que empresa es mas antigua (1) mas nueva (3)",
      randomiseAnswers: false,
      answers: [
        {
          text: "Apple",
          correctOrder: 2
        },
        {
          text: "Microsoft",
          correctOrder: 1
        },
        {
          text: "Google",
          correctOrder: 3
        }
      ]
    }
  ]
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  quiz
};
