import React from "react";

const Item = ({ todo, date, time, deleteData, id, submittingStatus }) => {
  const deleteItem = () => {
    // before delete, set submittingStatus to true, to avoid the data is not updated when the user click the delete button
    submittingStatus.current = true;
    // use filter api to remove the item from the list
    deleteData((prevData) => {
      return prevData.filter((item) => item.id !== id);
    });
  };

  return (
    <div className="item">
      <div>
        <p>{todo}</p>
        <p>{`${date} ${time}`}</p>
      </div>
      <button className="remove" onClick={deleteItem}>
        Remove
      </button>
    </div>
  );
};

export default Item;
