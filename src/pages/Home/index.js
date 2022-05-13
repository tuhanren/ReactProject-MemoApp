import React, { useState, useEffect, useRef } from "react";
import { API_GET_DATA } from "../../global/constants";
import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";

//Get data from the API
async function fetchData(setData) {
  const res = await fetch(API_GET_DATA);
  const { data } = await res.json();
  setData(data);
}

//Put data to the API
async function fetchSetData(data) {
  await fetch(API_GET_DATA, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ data }),
  });
}

const Home = () => {
  const [data, setData] = useState([]);
  //useRef to avoid clean up the origin data when the component is re-rendered
  const submittingStatus = useRef(false);
  //Put data to the API
  useEffect(() => {
    if (!submittingStatus.current) {
      return;
    }
    fetchSetData(data).then((data) => (submittingStatus.current = false));
  }, [data]);

  //Get data from the API
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
      <Edit onAdd={setData} submittingStatus={submittingStatus} />
      <List
        listData={data}
        deleteData={setData}
        submittingStatus={submittingStatus}
      />
    </div>
  );
};

export default Home;
