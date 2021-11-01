import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header/>
      </div>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/quiz" exact>
          <Quiz/>
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
