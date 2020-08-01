import React, { useState } from "react";
import { connect } from "react-redux";
import { addStory } from "../actions/createStoryAction";

export function CreateStory({ addStory }) {
  let d = new Date().toISOString();
  const [post, setPostValues] = useState({
    user_id: localStorage.getItem("user_id"),
    storyAdded: d,
    story: "",
    storyTitle: "",
    img: "",
  });

  const handleChange = (event) => {
    setPostValues({
      ...post,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(post);
    if (!post.story || !post.storyTitle) {
      return alert("!Please complete the blanks!");
    }
    addStory(post);
  };
  return (
    <div>
      <div className="create-post">
        <p className="create-title">What would you like to share?</p>
        <form onSubmit={handleSubmit} className="container">
          <label>{post.user_id}</label>

          <label>
            <input
              type="text"
              name="storyTitle"
              value={post.storyTitle}
              onChange={handleChange}
              placeholder="title.."
            />
          </label>
          <label>
            <input
              type="text"
              name="story"
              value={post.story}
              onChange={handleChange}
              placeholder="Your message here.."
            />
          </label>
          <label>
            <input
              type="date"
              name="storyAdded"
              value={post.storyAdded}
              onChange={handleChange}
            />
            <input
              type="file"
              name="fileupload"
              value={post.img}
              id="fileupload"
            ></input>
          </label>
          <button onClick={handleSubmit}>Send your Post</button>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    stories: state.stories,
  };
};

export default connect(mapStateToProps, { addStory })(CreateStory);
