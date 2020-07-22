import React, { Fragment, useState, useEffect } from "react";
import EditTodo from "./EditTodo";

const ListTodos = ({ allTodos, setTodosChange }) => {
  console.log(allTodos);
  const [todos, setTodos] = useState([]); //empty array
  const buttonStyle = {
    backgroundColor: "#6059F6", border: "none", marginLeft: "595%", color:"white"
  };

  //delete todo function

  async function deleteTodo(id) {
    try {
      await fetch(`http://localhost:5000/dashboard/todos/${id}`, {
        method: "DELETE",
        headers: { jwt_token: localStorage.token }
      });

      setTodos(todos.filter(todo => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    setTodos(allTodos);
  }, [allTodos]);

  console.log(todos);

  return (
    <Fragment>
      {" "}
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Company Name</th>
            <th>Location</th>
            <th>Date Applied</th>
            <th>Description</th>
            <th>Notes</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}

          {todos.length !== 0 &&
            todos[0].todo_id !== null &&
            todos.map(todo => (
              <tr key={todo.todo_id}>
                <td>{todo.description}</td>
                <td>
                  <EditTodo todo={todo} setTodosChange={setTodosChange} />
                </td>
                <td>
                  <button
                    style={buttonStyle}
                    className="btn"
                    onClick={() => deleteTodo(todo.todo_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodos;
