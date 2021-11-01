import React from "react";
import "./home.css";

function Home() {
  return (
    <div>
      <div className="heading">
        <h3>Settings</h3>
      </div>
      <div className="main">
        <div className="form">Form</div>
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
