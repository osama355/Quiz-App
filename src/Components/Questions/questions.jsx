import React, { useState } from "react";
import './questions.css'

function Questions({
  curquest,
  setcurquest,
  questions,
  setquestions,
  correct,
  options,
  score,
  setscore,
}) {

  const [select, setselect] = useState();
  const [error, seterror] = useState(false);

  const handleSelect=(i)=>{
      if(select===i && select===correct){
          return 'select'
      }
      else if(select===i && select!==correct){
          return 'wrong'
      }
      else if(i===correct){
          return 'select'
      }
  }

  const handleCheck=(i)=>{
      setselect(i)
      if(i===correct) setscore(score+1)
      seterror(false)
  }

  return (
    <div className="question">
      <h1>Question {curquest + 1}</h1>
      <div className="singleQuestion">
        <p>{questions[curquest].question}</p>
      </div>
      <div className="options">
        {options && options.map((i) => {
          return (
            <button onClick={()=>handleCheck(i)} key={i} disabled={select} className={`singleOption ${select && handleSelect(i)}`} >
              {i}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Questions;
