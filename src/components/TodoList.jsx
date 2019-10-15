import React from 'react';

const TodoList = props => {
  const getData = props.getData;
  const todos = props.todos;
  return (
    <div>
      <h3>React</h3>
      <input
        type="button"
        value="Click me"
        onClick={getData}
        disabled={todos.length}
      />
      <div>
        <div>
          <div key={todos[0].id} className="todo-container">
            <span>{todos[0].title} - </span>
            <input
              type="checkbox"
              defaultChecked={todos[0].completed}
              className="checkbox"
            />
          </div>
          <div key={todos[1].id} className="todo-container">
            <span>{todos[1].title} - </span>
            <input
              type="checkbox"
              defaultChecked={todos[1].completed}
              className="checkbox"
            />
          </div>
        </div>
        {/* ...etc */}
      </div>
    </div>
  );
};

export default TodoList;
