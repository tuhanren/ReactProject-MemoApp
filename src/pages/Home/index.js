import React, { useState } from "react";
import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";

const Home = () => {
  const [data, setData] = useState([]);
  // const onAddHandler = (event) => {
  //   setData((prevData) => {
  //     return [
  //       ...prevData,
  //       {
  //         todo: event.target.value,
  //         date: event.target.value,
  //         time: event.target.value,
  //       },
  //     ];
  //   });
  // };
  return (
    <div className="app">
      <Edit onAdd={setData} />
      <List listData={data} deleteData={setData} />
    </div>
  );
};

export default Home;
