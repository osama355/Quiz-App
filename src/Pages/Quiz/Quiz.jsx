import React,{useEffect} from 'react'

function Quiz({questions,setquestions,score,setscore}) {
    useEffect(()=>{
        console.log(questions)
    },[questions])
    return (
        <div>
            Quiz Page
        </div>
    )
}

export default Quiz
