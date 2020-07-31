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


// export const EDIT_STORY = 'SELECT_STORY';

// export const selectStory = (props, editedStory) => dispatch => {
//   dispatch({ type: START_FETCHING })
//   axiosWithAuth()
//   .put(`/stories/update/${id}`, editedStory)
//   .then(res => props.history.push('/Discover'))
//   .catch(err => dispatch({ type: FETCH_FAILURE, payload: err}))
// }