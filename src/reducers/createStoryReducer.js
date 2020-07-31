//---------------------------//
//     IMPORT ACTIONS        //
//---------------------------//
import {
    CREATE_NEW_STORY_START, 
    CREATE_STORY_SUCCESS, 
    CREATE_STORY_FAILURE
} from "../actions/createStoryAction";

//---------------------------//
//     INITIAL STATE         //
//---------------------------//

export const initialState = {
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
  isFetching: false
};
 

//----------------------------//
//      CREATE REDUCER        //
//----------------------------//
export const createStoryReducer = (state = initialState, action) => {
    switch(action.type){
        case CREATE_NEW_STORY_START: 
        return{
            ...state, 
            isFetching: true
        };

        case CREATE_STORY_SUCCESS:
            return { 
                ...state, 
                error: "",
                isFetching: true,
                stories: action.payload
            };

        case CREATE_STORY_FAILURE:
            return{
                ...state, 
                error: "", 
                isFetching: false
            };

            default:
                return state;
            
    }
}