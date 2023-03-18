import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  const handleClick = () => {
    props.clearComplete();
  };

  return (
    <div className="todoList">
      <div className="todList items">
        {props.todo.map((item) => {
          <Todo
            handleItemToggle={props.handleItemToggle}
            key={item.id}
            todo={item}
          />;
        })}
      </div>
      <div>
        <button onClick={handleClick} className="clear-btn">
          Clear Completed
        </button>
      </div>
    </div>
  );
};
export default TodoList;
