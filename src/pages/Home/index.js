import React, { useState, useEffect } from "react";
import { API_GET_DATA } from "../../global/constants";
import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";

async function fetchData(setData) {
  const res = await fetch(API_GET_DATA);
  const { data } = await res.json();
  setData(data);
}

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData(setData);
  }, []);

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
