import {React, useState, useEffect} from  'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./Components/Header"
import Home from "./Components/Home"
import Questions from "./Components/Questions"
import Results from "./Components/Results"


function App() {

  const [name, setName] = useState('')
  const [question, setQuestion] = useState()
  const [score, setScore] = useState(0)

  function fetchQuestions(category = "", difficulty = "") {
    fetch(`https://opentdb.com/api.php?amount=10${category && `&category=${category}`}${difficulty && `&difficulty=${difficulty}`}&type=multiple`, {
      method: "GET"
    })
    .then((res) => res.json())
    .then((quiz) => {
      setQuestion(quiz.results);
      console.log(quiz); 
    })
  }

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
         <Header />
         <Routes>
          <Route path='/' element={<Home 
          name={name} 
          setName={setName} 
          fetchQuestions={fetchQuestions}/>}/>
         
          <Route path='/questions' element={<Questions 
          name={name}
          question={question}
          setQuestion={setQuestion}
          score={score}
          setScore={setScore}
          />}/>

          <Route path='/results' element={<Results 
          name={name}
          score={score}
          />}/>
         </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
