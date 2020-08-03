import { axiosWithAuth } from '../utils/axiosWithAuth';

// getPosts action suite for Posts.js
export const GET_POSTS_START = 'GET_POSTS_START';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';

export const ADD_POST_START = 'ADD_POST_START';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const EDIT_STORY = 'EDIT_STORY';
export const ADD_STORY = 'ADD_STORY';

export const getPosts = () => dispatch => {
  dispatch({ type: GET_POSTS_START });
  axiosWithAuth()
    .get(`/stories`)
    .then(response => {
      dispatch({
        type: GET_POSTS_SUCCESS,
        payload: response.data.stories,
      });
    })
    .catch(error => {
      dispatch({
        type: GET_POSTS_FAILURE,
        payload: error,
      });
      console.log(error);
    });
};
export const addStory = post => dispatch => {
  const token = localStorage.getItem('token');
  dispatch({ type: ADD_POST_START });
  console.log(post);
  axiosWithAuth()
    .post(`/stories/add`, post, {
      headers: {
        Authorization: token,
      },
    })
    .then(response => {
      console.log(response.data.stories);
      dispatch({ type: ADD_POST_SUCCESS, payload: response.post });
    })
    .catch(error => {
      console.log(error.response);
      dispatch({ type: ADD_POST_FAILURE, payload: error.errorMessage });
    });
};

export const getData = () => dispatch => {
  dispatch({ type: ADD_STORY });
  axiosWithAuth()
  .get("/stories")
  .then(res => {
    dispatch({ type: EDIT_STORY, payload: res.data.stories})
  })
  .catch(err => {
    console.log("ERROR fetching:", err)
  })

}

export const editStoryAction = storyEdit => {
  return ({ type: EDIT_STORY, payload: storyEdit})
}

