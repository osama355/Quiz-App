import React,{useEffect,useState} from 'react'
import {CircularProgress} from '@mui/material'
import './quiz.css'

function Quiz({questions,setquestions,score,setscore}) {
    const [options, setoptions] = useState();
    const [curquest, setcurquest] = useState(0);

    useEffect(()=>{
        console.log(questions)
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

    return (
        <div className="main">
            <h4>Welcome</h4>
            <div className="quiz">
                <div>
                    {
                        questions ? (
                            <h1>Question</h1>
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
