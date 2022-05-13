import React, { useState } from "react";
import { v4 } from "uuid";

const Edit = (props) => {
  const [todo, setTodo] = useState("");
  const todoChangeHandler = (event) => {
    setTodo(event.target.value);
  };
  const [date, setDate] = useState("");
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };
  const [time, setTime] = useState("");
  const timeChangeHandler = (event) => {
    setTime(event.target.value);
  };

  const addItem = () => {
    props.onAdd((prevData) => {
      return [...prevData, { id: v4(), todo, date, time }];
    });
  };

  return (
    <div>
      <h1>Memo</h1>
      <p>Todo:</p>
      <input type="text" value={todo} onChange={todoChangeHandler} />
      <p>Date:</p>
      <input type="date" value={date} onChange={dateChangeHandler} />
      <p>Time:</p>
      <input type="time" value={time} onChange={timeChangeHandler} />
      <button className="add" onClick={addItem}>
        Add
      </button>
    </div>
  );
};

export default Edit;
