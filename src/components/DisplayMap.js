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
        <Display id={travel.id}  
        storyDate={travel.storyDate}
        storyTitle={travel.storyTitle}
        story={travel.story}
        img={travel.img}
        user_id={travel.user_id}
        
        />
      ))}
    </div>
  );
};

export default DisplayMap;
