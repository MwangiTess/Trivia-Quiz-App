import { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate, Link } from 'react-router-dom';
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

  const navigate = useNavigate()

  function handleSelect (option) {
    if(selected === option && selected === correct) return "select";
    else if (selected === option && selected !== correct) return "wrong"
    else if (option === correct ) return "select"
  };

  function handleCheck (option) {
    setSelected(option);
    if (option === correct ) setScore(score + 1);
    setError(false);
  };

  function handleNext() {
    if (currentQuestion > 8) {
        navigate("/results");
      } else if (selected) {
        setCurrentQuestion(currentQuestion + 1);
        setSelected();
      } else setError("Please select an option first");
  }

  function handleQuit (option) {
    setSelected(option);
    if (option === correct) setScore(score + 1);
    setError(false);
  }

 
  return (
    <div className ="question">
      <h1>Question {currentQuestion + 1}: </h1>

      <div className="singleQuestion">
        <QuizQuestion question={question[currentQuestion].question} />

        <div className="optionss">
          {error && <ErrorMessage>Please Fill all the fields</ErrorMessage>}
          { options && options.map((option) => (
          <button 
          className={`singleOption ${selected && handleSelect(option)}`}
          key={option}
          onClick={() => handleCheck(option)}
          disabled={selected}
          >
            {option}
          </button>
            ))}
        </div>

        <div className="control"> 
        <Button 
        variant="contained"
        color="secondary"
        size="large"
        style={{ width: 185}}
        component={Link}
        to="/"
        onClick={handleQuit}
        >
        Quit</Button>
        <Button 
        variant="contained"
        color="primary"
        size="large"
        style={{ width: 185}}
        onClick={ handleNext }
        >
        Next Question</Button>
        </div>
      </div>
    </div>
  );
};

export default ShowQuestion;
