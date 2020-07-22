import React, { Fragment, useState } from "react";

const EditTodo = ({ todo, setTodosChange }) => {
  //editText function

  const buttonStyle = {
    backgroundColor: "#6059F6", border: "none", color: "white", marginLeft: "420%"
  };

  const editText = async id => {
    try {
      const body = { description };

      const myHeaders = new Headers();

      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("jwt_token", localStorage.token);

      await fetch(`http://localhost:5000/dashboard/todos/${id}`, {
        method: "PUT",
        headers: myHeaders,
        body: JSON.stringify(body)
      });

      setTodosChange(true);

      // window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  const [description, setDescription] = useState(todo.description);
  return (
    <Fragment>
      <button
        type="button"
        className="btn"
        style={buttonStyle}
        data-toggle="modal"
        data-target={`#id${todo.todo_id}`}
      >
        Edit
      </button>
      {/* id = "id21"*/}
      <div
        className="modal"
        id={`id${todo.todo_id}`}
        onClick={() => setDescription(todo.description)}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Todo</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setDescription(todo.description)}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button
                style={buttonStyle}
                type="button"
                className="btn"
                data-dismiss="modal"
                onClick={() => editText(todo.todo_id)}
              >
                Edit
              </button>
              <button
                style={buttonStyle}
                type="button"
                className="btn"
                data-dismiss="modal"
                onClick={() => setDescription(todo.description)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditTodo;
