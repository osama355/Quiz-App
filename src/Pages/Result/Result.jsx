import React from 'react'
import { useHistory } from 'react-router'
import './result.css'

function Result({name,score}) {
    const history =useHistory()
    const goHome=()=>{
        history.push('/')
    }
    return (
        <div className="mainResult">
            <h1>Quiz Result</h1>
            <div className="resultData">
                <p>Name : {name}</p>
                <p>Score : {score}</p>
            </div>
            <button className="homeButton" onClick={goHome}>
                <span>Home</span>
            </button>
        </div>
    )
}

export default Result
