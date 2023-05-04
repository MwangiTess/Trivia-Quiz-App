import { useState } from "react";
import ErrorMessage from "/home/tess/Development/Code/Mod2/trivia-quiz-app/src/Components/ErrorMessage.jsx";

const QuizQuestion = ({ question }) => {
  const decodedQuestion = question.replace(/&quot;/g, '"');

  return (
    <div>
      <h2>{decodedQuestion}</h2>
    </div>
  );
};

const ShowQuestion = ({ currentQuestion, setCurrentQuestion, question, setQuestion, score, setScore, options, correct}) => {

  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);

  function hnadleSelect (option) {
    if(selected === option && selected === correct) return "select";
    else if (selected === option && selected !== correct) return "wrong"
    else if (option === correct ) return "select"
  };

  return (
    <div >
      <h1>Question {currentQuestion + 1}: </h1>

      <div className="singleQuestion">
        <QuizQuestion question={question[currentQuestion].question} />

        <div className="optionss">
          {error && <ErrorMessage>Please Fill all the fields</ErrorMessage>}
          { options && options.map((option) => (
          <button 
          className={`singleoption ${selected && hnadleSelect(option)}`}
          key={option}
          onClick={() => handleCheck(option)}
          disabled={selected}
          >
            {option
            }</button>))}
        </div>
      </div>
    </div>
  );
};

export default ShowQuestion;
