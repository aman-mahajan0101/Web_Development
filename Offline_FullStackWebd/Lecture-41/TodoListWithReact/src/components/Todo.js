import React from "react";
import styles from "./css_Modules/Todo.module.css";

const Todo = ({ Title, Task }) => {
  return (
    <article className={styles.todo}>
      <h2>title : {Title}</h2>
      <h3>task : {Task}</h3>
      <button>Delete</button>
    </article>
  );
};

export default Todo;
