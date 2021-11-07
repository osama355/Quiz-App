import React,{useEffect,useState} from 'react'
import {CircularProgress} from '@mui/material'
import './quiz.css'

function Quiz({questions,setquestions,score,setscore,name}) {
    const [options, setoptions] = useState();
    const [curquest, setcurquest] = useState(0);

    useEffect(()=>{
        console.log("question ",questions)
        setoptions(
            questions && handleShuffle([
                questions[curquest]?.correct_answer,
                ...questions[curquest]?.incorrect_answers,
            ])
        )
    },[questions])

    const handleShuffle=(option)=>{
        return option.sort(()=>Math.random()-0.5)
    }
    console.log(options)

    const handleQuestion=()=>{
        setcurquest(curquest++)
    }

    return (
        <div className="quiz-main">
            <h4>Welcome {name}</h4>
            <div className="quiz">
                <div>
                    {
                        questions ? (
                            <div>
                                <button onClick={handleQuestion} >
                                    Click
                                </button>
                                
                                {
                                    questions.map((val,i)=>{
                                        return(
                                            <div>
                                                 <p key={i}>{val.question}</p>
                                                 <button onClick={()=>{val++}} >Click</button>
                                            </div>
                                           
                                        )
                                    })
                                }
                            </div>
                        ):(
                            <CircularProgress color="inherit" size={40} thickness={3.6} variant='indeterminate' />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Quiz
