import { axiosWithAuth } from "../utils/axiosWithAuth";

export const DELETE_STORY_START = "DELETE_STORY_START";
export const DELETE_STORY_SUCCESS = "DELETE_STORY_SUCCESS";
export const DELETE_STORY_FAIL = "DELETE_STORY_FAIL";

export const deleteStory = id => dispatch => {
  dispatch({ type: DELETE_STORY_START });
  axiosWithAuth()
    .delete(`/stories/delete/${id}`)
    .then(res => {
      dispatch({
        type: DELETE_STORY_SUCCESS,
        payload: res.data.id
      });
      // window.location.reload();
    })

    .catch(e => {
      dispatch({ type: DELETE_STORY_FAIL, payload: e });
    });
};
