//---------------------------//
//     IMPORT ACTIONS        //
//---------------------------//
import { DELETE_STORY, EDIT_STORY } from "../actions/deleteUpdateAction";

//---------------------------//
//     INITIAL STATE         //
//---------------------------//
const initialState = {
  user: "",
  stories: [
    {
      user_id: "",
      storyTitle: "",
      storyAdded: "",
      storyDate: "",
      story: "",
      img: "",
    },
  ],
};

//-------------------------------------//
//      DELETE / UPDATE REDUCER        //
//-------------------------------------//
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_STORY:
      return {
        ...state,
        stories: [...action.payload],
      };
    case DELETE_FAILURE:
      return {
        ...state,
        deleteStory: false,
        error: action.payload,
      };
    case EDIT_STORY:
      return {};

    default:
      return state;
  }
};
