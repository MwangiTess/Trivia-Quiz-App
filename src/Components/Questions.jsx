import { useEffect, useState } from "react";
import {  CircularProgress } from "@mui/material";


const Questions = ({ name, question, setQuestion, score, setScore}) => {

    const [options, setOptions] = useState();
    const [currentQuestion, setCurrentQuestion] = useState(0)

    useEffect (() => {
        console.log(question)//shows a list of the question in the list of the category

        setOptions(
            question && 
            handleShuffle([
                question[currentQuestion]?.correct_answer,
                ...question[currentQuestion]?.incorrect_answers,
            ]) // if there is a question shuffle the choices both correct and incorrect answers
        );
    }, [question]);

    console.log(options);// shows the list of choices in a question

    function handleShuffle (option){
        return option.sort(() => Math.random() -0.5); // shuffle the multiple choices options and have them in a different order
    };

    return ( 
        <div className="quiz">
         <span className="subtitle">Welcome, {name}</span>
            {question ? (
                <>
                <div className="quizInfo">
                    <span>{question[currentQuestion].category}</span>
                    <span>SCore : {score}</span>
                </div>
                </>
            ) : (
                <CircularProgress />
            )}
         
        </div>
    )
}
 
export default Questions;