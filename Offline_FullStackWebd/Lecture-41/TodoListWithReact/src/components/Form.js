import React, { useRef } from "react";
import styles from "./css_Modules/Form.module.css";

const Form = (props) => {
  // const [name, setName, resetName] = useFormState("");
  // const [age, setAge, resetAge] = useFormState("");

  const titleInputRef = useRef();
  const taskInputRef = useRef();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const title = titleInputRef.current.value;
    const task = taskInputRef.current.value;
    props.addPerson({ title, task });
    titleInputRef.current.value = "";
    taskInputRef.current.value = "";
    // resetName();
    // resetAge();
  };

  return (
    <form onSubmit={formSubmitHandler} className={styles.form}>
      <div>
        <input
          className={styles["form-control"]}
          type="text"
          placeholder="Title"
          // onChange={setName}
          // value={name}
          ref={titleInputRef}
        />
      </div>
      <div>
        <input
          className={styles["form-control"]}
          type="text"
          placeholder="Task"
          min="0"
          // onChange={setAge}
          // value={age}
          ref={taskInputRef}
        />
      </div>
      <button type="submit" className={styles.btn}>
        Add
      </button>
    </form>
  );
};

export default Form;
