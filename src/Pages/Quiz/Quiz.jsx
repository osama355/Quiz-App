import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import Questions from "../../Components/Questions/questions";
import "./quiz.css";

function Quiz({ questions, setquestions, score, setscore, name }) {
  const [options, setoptions] = useState();
  const [curquest, setcurquest] = useState(0);

  useEffect(() => {
    console.log("questions ", questions);
    setoptions(
      questions &&
        handleShuffle([
          questions[curquest]?.correct_answer,
          ...questions[curquest]?.incorrect_answers,
        ])
    );
  }, [questions,curquest]);

  const handleShuffle = (option) => {
    return option.sort(() => Math.random() - 0.5);
  };
  console.log(options);

  const handleQuestion = () => {
    setcurquest(curquest++);
  };

  return (
    <div className="quiz-main">
      <div className="quiz">
        {questions ? (
          <div>
            <div>
              <h4>Welcome {name}</h4>
              <p>{questions[curquest].category}</p>
              <p>Score : {score}</p>
            </div>
            <Questions
              curquest={curquest}
              setcurquest={setcurquest}
              questions={questions}
              setquestions={setquestions}
              correct={questions[curquest]?.correct_answer}
              options={options}
              score={score}
              setscore={setscore}
            />
          </div>
        ) : (
          <CircularProgress
            color="inherit"
            size={40}
            thickness={3.6}
            variant="indeterminate"
          />
        )}
      </div>
    </div>
  );
}

export default Quiz;
