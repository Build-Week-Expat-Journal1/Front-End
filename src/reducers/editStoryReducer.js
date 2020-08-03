import { ADD_STORY, EDIT_STORY } from "../actions/createStoryAction";


export const initialState = {
  stories: [
        {
          id: '',
          user_id: '',
          storyTitle: '',
          storyAdded: '',
          storyDate: '',
          story: '', 
          img: ''
        }
      ]
    }

    export const editStoryReducer = (state = initialState, action) => {
        switch(action.type){
            case ADD_STORY: 
            return {
                ...state, 
                user_id: action.payload.storyTitle,
                storyTitle: action.payload.storyTitle,
                story: action.payload.story,
                storyAdded: action.payload.storyAdded
                
            }

            case EDIT_STORY: 
            return {
                ...state, 
                user_id: action.payload.storyTitle,
                storyTitle: action.payload.storyTitle,
                story: action.payload.story,
                storyAdded: action.payload.storyAdded
            }

            default: 
            return state
        }
    }

    export default editStoryReducer