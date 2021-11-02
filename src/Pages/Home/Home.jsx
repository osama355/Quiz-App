import React from "react";
import "./home.css";
import {TextField, MenuItem} from '@mui/material'
import Categories, {} from '../../Data/Categories'

function Home() {
  return (
    <div>
      <div className="heading">
        <h3>Settings</h3>
      </div>
      <div className="main">
        <div className="form">
          <TextField className="textField1" style={{marginBottom:"30px"}} variant="outlined" label="Enter Name" />
          <TextField variant="outlined" className="textField2" select label="Select category">
            {
              Categories.map((val,key)=>(
                <MenuItem key={key}>
                  {val.category}
                </MenuItem>
              ))
            } 
          </TextField>
          <TextField select label="Select difficulty" variant="outlined" style={{marginTop:"30px"}} >
            <MenuItem key="easy" value="eaasy">Easy</MenuItem>
            <MenuItem key="medium" value="medium">Medium</MenuItem>
            <MenuItem key="hard" value="hard" >Hard</MenuItem>
          </TextField>
        </div>
        <div className="banner">
          <img
            className="bannerImage"
            src="./Assets/banner.svg"
            alt="bannerImage"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
