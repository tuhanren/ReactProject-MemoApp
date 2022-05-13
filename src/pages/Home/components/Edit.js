import React from "react";

const Edit = () => {
  return (
    <div>
      <h1>Memo</h1>
      <p>Todo:</p>
      <input type="text" />
      <p>Date:</p>
      <input type="date" />
      <p>Time:</p>
      <input type="time" />
      <button className="add">Add</button>
    </div>
  );
};

export default Edit;
