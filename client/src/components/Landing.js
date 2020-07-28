import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  const buttonStyle = {
    backgroundColor: "#6059F6", padding: "10px", border: "none", color: "white"
   };

   const jumbotronStyle = {
     textAlign: "center"
    };

  return (
    <div className="jumbotron mt-5" style={jumbotronStyle}>
      <h1>WELCOME TO TRACKR</h1>
      <p>Join us in the first step to finding your dream job</p>
      <Link to="/login" className="btn" style={buttonStyle}>
        Login
      </Link>
      <Link to="/register" className="btn ml-3" style={buttonStyle}>
        Register
      </Link>
    </div>
  );
};

export default Landing;
