import { BrowserRouter, Link, Routes, route} from "react-router-dom";
import Header from "./Components/Header"

function App() {
  return (
    <BrowserRouter>
      <div className="app">
      <Header />

      </div>
    </BrowserRouter>
  );
}

export default App;
