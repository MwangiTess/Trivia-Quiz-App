import { BrowserRouter, Link, Routes, Route} from "react-router-dom";
import Header from "./Components/Header"
import Home from "./Components/Home"
import Questions from "./Components/Questions"
import Results from "./Components/Results"


function App() {
  return (
    <BrowserRouter>
      <div className="app">
         <Header />

         <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/questions' element={<Questions />}/>
          <Route path='/results' element={<Results />}/>
         </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
