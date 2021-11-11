import React, { useState } from "react";
import "./questions.css";
import { Button, selectClasses } from "@mui/material";
import { useHistory } from "react-router";

function Questions({
  curquest,
  setcurquest,
  questions,
  correct,
  options,
  score,
  setscore,
}) {
  const [select, setselect] = useState();
  const [error, seterror] = useState(false);
  const history=useHistory()

  const handleSelect = (i) => {
    if (select === i && select === correct) {
      return "select";
    } else if (select === i && select !== correct) {
      return "wrong";
    } else if (i === correct) {
      return "select";
    }
  };

  const handleCheck = (i) => {
    setselect(i);
    if (i === correct) setscore(score + 1);
    seterror(false);
  };

  const handleNext=()=>{
    if (curquest>8){
      history.push('/result')
    }else if (select) {
      setcurquest(curquest+1)
      setselect()
    }else{
      seterror("Please select any option")
    }
  }

  return (
    <div className="question">
      <h1>Question {curquest + 1}</h1>
      <div className="singleQuestion">
        <p>{questions[curquest].question}</p>
      </div>
      <div className="options">
        {options &&
          options.map((i) => {
            return (
              <button
                onClick={() => handleCheck(i)}
                key={i}
                disabled={select}
                className={`singleOption ${select && handleSelect(i)}`}
              >
                {i}
              </button>
            );
          })}
      </div>
      <div className="actions">
        <Button
          variant="contained"
          size="large"
          color="secondary"
          style={{ width: 185 }}
          href="/"
        >
          Quit
        </Button>
        <Button
          variant="contained"
          size="large"
          color="primary"
          style={{ width: 185 }}
          onClick={handleNext}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default Questions;
