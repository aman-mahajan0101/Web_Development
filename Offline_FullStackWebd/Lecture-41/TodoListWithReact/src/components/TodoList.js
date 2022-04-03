import React, { useState } from "react";
import Todo from "./Todo";
import Form from "./Form";

const TodoList = () => {
  const DUMMY_TODOS = [
    {
      title: "Shopping",
      task: "Go to mall for shopping",
    },
    {
      title: "Gym",
      task: "Gym at 9 pm",
    },
    {
      title: "Swimming",
      task: "Swimming class at 1:30pm",
    },
  ];

  const [todos, setTodos] = useState(DUMMY_TODOS);

  const addTodo = (todo) => {
    return setTodos((prevState) => {
      return [...todos, todo];
    });
  };

  const todoList = todos.map((todo, idx) => {
    return <Todo key={idx} Title={todo.title} Task={todo.task} />;
  });

  return (
    <div>
      <Form addTodo={addTodo} />
      {todoList}
    </div>
  );
};

export default TodoList;
