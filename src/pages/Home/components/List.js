import React from "react";
import Item from "./Item";

const List = (props) => {
  return (
    <div className="list">
      {props.listData.map((item) => {
        const { todo, date, time } = item;
        return (
          <Item
            todo={todo}
            date={date}
            time={time}
            deleteData={props.deleteData}
          />
        ); //use destructuring to get the values from the object, to avoid null values issues
      })}
    </div>
  );
};

export default List;
// Do not use index as key, because the list will be re-rendered everytime, values will be different, dynamic. It will cost performance.
