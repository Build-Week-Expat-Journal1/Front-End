import React, {useState} from "react";
import { addNewStory } from "../actions/createStoryAction";
import { connect } from "react-redux";


const NewStory = (props) => {
  const [createStory, setCreateStory] = useState({
    storyTitle: "",
    story: "",
  });

  const handleChanges = (e) => {
    setCreateStory({ ...createStory, [e.target.name]: e.target.value });
  };

  const addStory = (e) => {
    e.preventDefault();
    props.addNewStory(createStory);
    setCreateStory({ storyTitle: "", story: "" });
  };

  return (
    <div>
      <form onSubmit={addStory}>
        <div>
          <input
            id="storyTitle"
            type="text"
            name="storyTitle"
            onChange={handleChanges}
            value={createStory.storyTitle}
          />
          <input
            id="story"
            type="text"
            name="story"
            onChange={handleChanges}
            value={createStory.story}
          />
        </div>
        <button type="submit"> ADD STORY </button>
      </form>
    </div>
  );
};
const mapStateToProps = state =>{
 
        return {
            stories: state.stories, 
            error: state.error
          };};
   
export default connect(mapStateToProps, {addNewStory})(NewStory);