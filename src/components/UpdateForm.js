import React, { useState, useEffect, useReducer } from "react";
import { editStoryReducer, initialState } from "../reducers/editStoryReducer";
import { connect } from "react-redux";
import { editStoryAction } from "../actions/createStoryAction";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useParams, useHistory } from "react-router-dom";
import './comp.css';

const UpdateForm = (props) => {
  let d = new Date().toISOString();

  const [editStory, setEditStory] = useState({
    user_id: localStorage.getItem("user_id"),
    id: "",
    storyAdded: d,
    story: "",
    storyTitle: "",
    img: "",
  });

  const { id } = useParams();
  const { push } = useHistory();

  const [state] = useReducer(editStoryReducer, initialState);

  useEffect(() => {
    axiosWithAuth()
      .get(`/stories/${id}`)
      .then((res) => {
        console.log("get story update", res.data);
        setEditStory(res.data);
      });
  }, [id]);

  const changeHandler = (event) => {
    setEditStory({ ...editStory, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/stories/update/${id}`, editStory)
      .then(res => {
        console.log("Story updated SUCCESSFULLY", res);

        setEditStory(res.data);
        push("/Discover");
      })
      
      .catch((err) => {
        console.log("story did not update", err);
      });
  };

  return (
    <div className="update">
        
        <h1 className="create-title">Update <span className="text-primary">Story</span></h1>

      <form onSubmit={handleSubmit}>
        <h3>Story ID: {editStory.id}</h3>
        <h3>User ID: {editStory.user_id}</h3>
        <h3>STORY ADDED DATE: {editStory.storyAdded}</h3>
        <label></label>
        <input
          type="text"
          name="storyTitle"
          onChange={changeHandler}
          placeholder="storyTitle"
          value={editStory.id}
        />
        <input
          type="text"
          name="storyTitle"
          onChange={changeHandler}
          placeholder="storyTitle"
          value={editStory.storyTitle}
        />
        <div className="baseline" />

        <input
          type="text"
          name="story"
          onChange={changeHandler}
          placeholder="Story"
          value={editStory.story}
        />
        <div className="baseline" />

        <button
          className="md-button form-button"
          onClick={() => props.editStoryAction(editStory)}
        >
          Update
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    storyAdded: state.storyAdded,
    story: state.story,
    storyTitle: state.storyTitle,
  };
};

export default connect(mapStateToProps, { editStoryAction })(UpdateForm);
