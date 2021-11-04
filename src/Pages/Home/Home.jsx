import React,{useState} from "react";
import {useHistory} from 'react-router-dom'
import "./home.css";
import {TextField, MenuItem,Button} from '@mui/material'
import Categories from '../../Data/Categories'
import Error from '../../Components/Error/error'

function Home({name,setname, fetchQuestion}) {
  const [category, setcategory] = useState("")
  const [difficulty, setdifficulty] = useState("")
  const [error, seterror] = useState(false)
  const history= useHistory()

  const checkError=()=>{
    if(!name ||!category ||!difficulty){
      seterror(true)
      return
    }
    else{
      seterror(false);
      fetchQuestion(category,difficulty);
      history.push('/quiz')
    }
  }

  return (
    <div className="home">
      <div className="main">
        <div className="form">
          {error && <Error />}
          <TextField className="textField1" style={{marginBottom:"30px"}} variant="outlined" label="Enter Name" onChange={(e)=>setname(e.target.value)} />
          <TextField variant="outlined" className="textField2" select label="Select category" onChange={(e)=>setcategory(e.target.value)} value={category} >
            {
              Categories.map((val,key)=>(
                <MenuItem key={key} value={key}>
                  {val.category}
                </MenuItem>
              ))
            } 
          </TextField>
          <TextField select label="Select difficulty" variant="outlined" style={{marginTop:"30px"}} onChange={(e)=>setdifficulty(e.target.value)}  value={difficulty}>
            <MenuItem key="easy" value="easy">Easy</MenuItem>
            <MenuItem key="medium" value="medium">Medium</MenuItem>
            <MenuItem key="hard" value="hard" >Hard</MenuItem>
          </TextField>
          <Button onClick={checkError} variant="contained" className="button">Start Quiz</Button>
        </div>

        <div className="banner">
          <img
            className="bannerImage"
            src="./Assets/banner2.svg"
            alt="bannerImage"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
