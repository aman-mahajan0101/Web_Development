import React from "react";
import styles from "./css_Modules/Todo.module.css";

const Todo = ({ Title, Task, handleDelete }) => {
  // handleDelete = () => {
  //   console.log("Deleted");
  //   // console.log(Title);
  // };

  // console.log(handleDelete);
  return (
    <article className={styles.todo}>
      <h2>title : {Title}</h2>
      <h3>task : {Task}</h3>
      <button onClick={() => handleDelete(Title)}>Delete</button>
    </article>
  );
};

export default Todo;
