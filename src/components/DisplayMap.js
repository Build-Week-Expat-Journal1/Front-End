import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Display from "../components/Display.js";

const DisplayMap = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(`/stories`)
      .then(res => {
        console.log("this is the res from DisplayMap", res);
        setItems(res.data);
      })
      .catch(err => {
        console.log("well..shit", err);
      });
  }, []);

  return (
    <div className="DisplayMap">
      <h2 className="DisplayMapHeader">Discover</h2>
      {items.map(travel => (
        <Display key={travel.id} item={travel} />
      ))}
    </div>
  );
};

export default DisplayMap;
