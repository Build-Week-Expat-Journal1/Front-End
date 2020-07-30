//---------------------------//
//     IMPORT ACTIONS        //
//---------------------------//
import * as actions from "../actions/deleteUpdateAction";

//---------------------------//
//     INITIAL STATE         //
//---------------------------//
export const initialState ={
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
 

//-------------------------------------//
//      DELETE / UPDATE REDUCER        //
//-------------------------------------//
export const reducer = (state = initialState, action) => {
  switch(action.type){
    case actions.DELETE_STORY_START:
      return{
        ...state, 
        error: '',
        isFetching: true
      }

      case actions.DELETE_STORY_SUCCESS:
        return {
          ...state, 
          error: '',
          isFetching: false, 
          stories: null
        }

        case actions.DELETE_STORY_FAIL:
          return {
            ...state, 
            error: '',
            isFetching: false
          }

          default: 
          return state;
  }
}