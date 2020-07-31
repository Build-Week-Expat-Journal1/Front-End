//----------------//
//     IMPORT     //
//----------------//
import { axiosWithAuth } from "../utils/axiosWithAuth";

//-------------------------------------//
//  EXPORT FROM CREATE STORY REDUCER   //
//-------------------------------------//
export const CREATE_NEW_STORY_START = "CREATE_NEW_STORY_START";
export const CREATE_STORY_SUCCESS = "CREATE_STORY_SUCCESS";
export const CREATE_STORY_FAILURE = "CREATE_STORY_FAILURE";

//-------------------------//
// CREATE NEW STORY ACTION //
//-------------------------//

export const addNewStory = (story, adding) => (dispatch) => {
  console.log(story);
  dispatch({ type: CREATE_NEW_STORY_START });
  axiosWithAuth()
    .post('/stories/add', adding)
    .then((res) => {
      dispatch({
        type: CREATE_STORY_SUCCESS,
        payload: res.data.data.stories,
      });
    })
    .catch((err) => {
      dispatch({
        type: CREATE_STORY_FAILURE,
        payload: err
      });
    });
};
