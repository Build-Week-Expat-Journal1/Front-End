import {
    GET_POSTS_START,
    GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
    
    ADD_POST_START,
    ADD_POST_SUCCESS,
    ADD_POST_FAILURE
   
  } from "../actions/createStoryAction";
  const initialState = {
    stories: [
      {
        user_id: '',
        storyTitle: '',
        storyAdded: '',
        storyDate: '',
        story: '', 
        img: ''
      }
    ],
  
    error: null,
    gettingPosts: false,
    postingPosts: false,
    error: null,
  };
  
  export const createStoryReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_POSTS_START:
        return {
          ...state,
          isLoadingPosts: true,
          error: null,
        };
      case GET_POSTS_SUCCESS:
        return {
          ...state,
          isLoadingPosts: false,
          posts: action.payload,
          error: null,
        };
      case GET_POSTS_FAILURE:
        return {
          ...state,
          isLoadingPosts: false,
          error: action.payload,
          posts: null,
        };
  
      case ADD_POST_START:
        return {
          ...state,
          isAddingPost: true,
          error: null,
        };
      case ADD_POST_SUCCESS:
        return {
          ...state,
          isAddingPost: false,
          stories: action.payload,
          error: null,
        };
      case ADD_POST_FAILURE:
        return {
          ...state,
          isAddingPost: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  