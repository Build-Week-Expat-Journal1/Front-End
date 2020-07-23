//---------------------------//
//     IMPORT ACTIONS        //
//---------------------------//
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from "../actions/signUpAction";

//---------------------------//
//     INITIAL STATE         //
//---------------------------//




//---------------------------//
//     SIGNUP REDUCER        //
//---------------------------//
export const signUpReducer = (state = initalState, action) => {
    switch(action.type){
        case SIGNUP_REQUEST:
            return {};

        case SIGNUP_SUCCESS:
            return {};

        case SIGNUP_FAILURE:
            return {};
        default: 
        return state
    }
}