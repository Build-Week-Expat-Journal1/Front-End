import React from "react";
// import App from "../App.css";
import { deleteStory  } from "../actions/deleteUpdateAction";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Display = props => {
  const { push } = useHistory();



  //---------------//
  //  DELETE STORY //
  //---------------//
  const handleDelete = e => {
    e.preventDefault();
    props.deleteStory(props.id);
    push('/Discover');

    // window.location.reload(false);
  };

  return (
    <div className="DataDisplay">

      <img src={props.img} alt="travel-img" />
      <h2>{props.storyTitle}</h2>
      <h3>Date written: {props.storyDate}</h3>
      <p>{props.story}</p>

      <button onClick={handleDelete}>Delete</button>
      <button> <Link to={`/stories/update/${props.id}`} >Edit</Link></button>
    </div>
  );
};
// /stories/update/:id


export default connect(null, { deleteStory})(Display);
