import { React, useState} from "react";
import {  TextField, MenuItem, Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import  ErrorMessage from "/home/tess/Development/Code/Mod2/trivia-quiz-app/src/Components/ErrorMessage.jsx";
import  SelectCategory from "/home/tess/Development/Code/Mod2/trivia-quiz-app/src/Components/SelectCategory.js"

const Home = ({ name, setName, fetchQuestions}) => {

    const [category, setCategory] = useState("")
    const [difficulty, SetDifficulty] = useState("")
    const [error, setError] = useState(false)

    const navigate = useNavigate()

    function handleSubmit () {
        if(!category || !difficulty || !name) {
            setError(true)
            return
        }
        else {
            setError(false)
            fetchQuestions(category, difficulty)
            navigate("/questions")
        }
    }


    return (
        <div className="home">
            <div className="settings">
                <span style={{ fontSize: 30 }}> Risky Quizness</span>

                <div className="settingsSelect">
                 {error && <ErrorMessage>Please Fill all the fields</ErrorMessage>}


                    <TextField 
                    style={{ marginBottom: 25}}
                     label="Enter Your Name" 
                     variant="outlined"
                     onChange={(e) => setName(e.target.value)}
                    />

                    <TextField 
                        select
                        label="Select Category"
                        variant="outlined"
                        style={{ marginBottom: 30}}
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}
                    >
                        {SelectCategory.map((categories) => (
                             <MenuItem key={categories.category} value={categories.value}>
                             {categories.category}
                             </MenuItem>
                        ))}
                       
                    </TextField>

                    <TextField 
                    select
                    label="Select Difficulty"
                    variant="outlined"
                    value={difficulty}
                    onChange={(e) => SetDifficulty(e.target.value)}
                     style={{ marginBottom: 30 }}
                    >
                        <MenuItem key="Easy" value="easy"> Easy </MenuItem>
                        <MenuItem key="Medium" value="medium"> Medium </MenuItem>
                        <MenuItem key="Hard" value="hard"> Hard </MenuItem>
                    </TextField>

                    <Button variant="contained" size="large"
                    onClick={handleSubmit}
                    >
                        Start Quiz
                    </Button>
                </div>
            </div>

            <img src="https://static.vecteezy.com/system/resources/previews/003/206/208/original/quiz-time-neon-signs-style-text-free-vector.jpg" alt="quiz img" className="banner" />
        </div>
     );
}
 
export default Home;