import React, { useState } from "react";
import { connect } from "react-redux";
import { addStory } from "../actions/createStoryAction";

export function CreateStory({ addStory }) {
  const [post, setPostValues] = useState({ story: "", storyTitle: "" });

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
              type="text"
              name="storyTitle"
              value={post.storyTitle}
              onChange={handleChange}
              placeholder="title.."
            />
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
