import React from "react";
import App from "../App.css";
import { deleteStory } from "../actions/deleteUpdateAction";
import { connect } from "react-redux";

const Display = props => {
  const handleDelete = e => {
    e.preventDefault();
    props.deleteStory(props.user_id, props.history);
  };

  return (
    <div className="DataDisplay">
      <img src={props.img} alt="travel-img" />
      <h2>{props.storyTitle}</h2>
      <h3>Date written: {props.storyDate}</h3>
      <p>{props.story}</p>

      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default connect(null, { deleteStory })(Display);
