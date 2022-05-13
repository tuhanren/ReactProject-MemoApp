import React from "react";

const Item = ({ todo, date, time }) => {
  return (
    <div className="item">
      <div>
        <p>{todo}</p>
        <p>{`${date} ${time}`}</p>
      </div>
      <button className="remove">Remove</button>
    </div>
  );
};

export default Item;
