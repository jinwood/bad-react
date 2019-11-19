import React, { useState } from "react";

const TodoList = props => {
  const [filterDone, setFilterDone] = useState(false);
  const getData = props.getData;
  const todos = props.todos;
  return (
    <div>
      <h3>React</h3>
      <input type="button" value="Click me" onClick={getData} />
      <br />
      {todos.length && (
        <input
          type="button"
          value="filter"
          onClick={() => setFilterDone(!filterDone)}
        />
      )}

      <div>
        {todos.length &&
          todos.map(todo => {
            if (filterDone && todo.completed === false) return null;
            return (
              <div key={todo.id} className="todo-container">
                <span>{todo.title} - </span>
                <input
                  type="checkbox"
                  defaultChecked={todo.completed}
                  className="checkbox"
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TodoList;
