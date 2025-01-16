import { useState } from "react";
import styles from "./AddTodo.module.css";

const AddTodo = ({ onClickButton }) => {
  // name function and state
  const [name, setName] = useState();
  const handleTodoInput = (event) => {
    setName(event.target.value);
  };

  // date function and state
  const [date, setDate] = useState();
  const handleDateValue = (event) => {
    setDate(event.target.value);
  };

  //time function and state
  const [time, setTime] = useState();
  const handleTimeValue = (event) => {
    setTime(event.target.value);
  };

  //handleOnClick function
  const handleOnClick = () => {
    onClickButton(name, date, time);
    setName("");
    setDate("");
    setTime("");
  };

  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col-4">
            <input
              type="text"
              placeholder="Task add here"
              value={name}
              className={`${styles.addTodo}`}
              onChange={handleTodoInput}
            />
          </div>
          <div className="col-3">
            <input
              type="date"
              value={date}
              className={`${styles.addTodo}`}
              onChange={handleDateValue}
            />
          </div>
          <div className="col-3">
            <input
              type="time"
              value={time}
              className={`${styles.addTodo}`}
              onChange={handleTimeValue}
            />
          </div>
          <div className="col-2">
            <button
              className={`${styles.addTodo} btn btn-success`}
              onClick={handleOnClick}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTodo;
