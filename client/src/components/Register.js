import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { Component } from "react"


const Register = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: ""
  });

  const { email, password, name } = inputs;

  const buttonStyle = {
    backgroundColor: "#6059F6", padding: "10px", border: "none", marginLeft: "47%"
   };

   const inputStyle = {
     width: "20%",
     marginLeft: "40%"
   };

  const onChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { email, password, name };
      const response = await fetch(
        "http://localhost:5000/authentication/register",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(body)
        }
      );
      const parseRes = await response.json();

      if (parseRes.jwtToken) {
        localStorage.setItem("token", parseRes.jwtToken);
        setAuth(true);
        toast.success("Register Successfully");
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 style={{fontFamily:"Avenir"}} className="mt-5 text-center">Trackr Register</h1>
      <form onSubmit={onSubmitForm}>
        <input
          style={inputStyle}
          type="text"
          name="email"
          value={email}
          placeholder="email"
          onChange={e => onChange(e)}
          className="form-control my-3"
        />
        <input
          style={inputStyle}
          type="password"
          name="password"
          value={password}
          placeholder="password"
          onChange={e => onChange(e)}
          className="form-control my-3"
        />
        <input
          style={inputStyle}
          type="text"
          name="name"
          value={name}
          placeholder="name"
          onChange={e => onChange(e)}
          className="form-control my-3"
        />
        <button style={buttonStyle} className="btn btn-success">Submit</button>
      </form>
      <Link to="/login" style={{marginLeft: "42%", marginTop: "10%"}}>Already a User? Login</Link>
    </Fragment>
  );
}; // end of register

export default Register;
