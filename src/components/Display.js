import React from "react";
import App from "../App.css";

const Display = (props) => {
  return ( 

<div className = "DataDisplay">

  <img src ={props.img} />  
  <h2>{props.storyTitle}</h2> 
  <h3>Date written: {props.storyDate}</h3>
  <p>{props.story}</p>
  
  
  

</div>

  );


  
};

export default Display;
