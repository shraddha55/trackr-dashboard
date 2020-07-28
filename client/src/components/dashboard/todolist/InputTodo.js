import React, { Fragment, useState } from "react";

const InputTodo = ({ setTodosChange }) => {

  const buttonStyle = {
    backgroundColor: "#6059F6", border: "none", width: "10%"
  };

  const inputStyle = {
    width: "20%", marginLeft: "3%"
  };
  const [description, setDescription] = useState("");

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const myHeaders = new Headers();

      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("jwt_token", localStorage.token);

      const body = { description };
      const response = await fetch("http://localhost:5000/dashboard/todos", {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(body)
      });

      const parseResponse = await response.json();

      console.log(parseResponse);

      setTodosChange(true);
      setDescription("");
      // window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Fragment>
      <h1 className="text-center my-5">Job Tracker</h1>
      <form style={{justifyContent: "center"}}  className="d-flex" onSubmit={onSubmitForm}>
        <input
          style={inputStyle}
          type="text"
          placeholder="add todo"
          className="form-control"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <button style={buttonStyle} className="btn btn-success ">Add</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
