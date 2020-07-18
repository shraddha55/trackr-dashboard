import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";

const Login = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });

  const { email, password } = inputs;
  const buttonStyle = {
    backgroundColor: "#6059F6", padding: "10px", border: "none"
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
      const body = { email, password };
      const response = await fetch(
        "http://localhost:5000/authentication/login",
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
        toast.success("Logged in Successfully");
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
      <h1 className="mt-5 text-center">Trackr Login</h1>
      <form className="mt-5 text-center" style={{textAlign: "center"}} onSubmit={onSubmitForm}>
        <input
          style={inputStyle}
          type="text"
          name="email"
          value={email}
          onChange={e => onChange(e)}
          className="form-control my-3"
        />
        <input
        style={{textAlign: "center"}}
          style={inputStyle}
          type="password"
          name="password"
          value={password}
          onChange={e => onChange(e)}
          className="form-control my-3"
        />
        <button style={buttonStyle} className="btn btn-success">Submit</button>
      </form>
      <Link to="/register" style={{marginLeft: "40%", marginTop: "10%"}}> Here for the first time? Register</Link>
    </Fragment>
  );
};

export default Login;
