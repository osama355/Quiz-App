import "./App.css";
import { useState } from "react";
import axios from 'axios'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";

function App() {
  const [name, setname] = useState("")
  const [questions, setquestions] = useState("")
  const [score, setscore] = useState(0)

  const fetchQuestion=async(category="", difficulty="")=>{
    // const {data}= await axios.get(`https://opentdb.com/api.php?amount=10${category && `&category=${category}`}${difficulty && `&difficulty=${difficulty}`}&type=multiple`);
    const {data}=await axios.get(`https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple`)
    setquestions(data.results)
  }

  return (
    <BrowserRouter>
      <div className="app">
        <Header/>
      </div>
      <Switch>
        <Route path="/" exact>
          <Home name={name} setname={setname} fetchQuestion={fetchQuestion} />
        </Route>
        <Route path="/quiz" exact>
          <Quiz questions={questions} setquestions={setquestions} score={score} setscore={setscore} name={name} />
        </Route>
        <Route path="/result" exact>
          <Result/>
        </Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
