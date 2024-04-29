import { useState } from "react";
import styles from "./AddTodo.module.css";
function AddTodo({ onButtonClick }) {
  const [input, setInput] = useState();
  const [date, setDate] = useState();
  const handleInput = (event) => {
    setInput(event.target.value);
  };
  const handleDate = (event) => {
    setDate(event.target.value);
  };
  const handleOnButtonClicked = () => {
    onButtonClick(input, date);
    setInput(" ");
    setDate(" ");
  };
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col 6">
          <input
            classNameName={styles.input}
            type="text"
            placeholder="Enter Todo here"
            value={input}
            onChange={handleInput}
          ></input>
        </div>
        <div className="col-4">
          <input type="date" value={date} onChange={handleDate}></input>
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleOnButtonClicked}
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
