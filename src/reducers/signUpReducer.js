//---------------------------//
//     IMPORT ACTIONS        //
//---------------------------//
import { SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_FAILURE } from "../actions/signUpAction";


//---------------------------//
//     INITIAL STATE         //
//---------------------------//
const initialState = {
    error: '',
    token: '' ,
    loggingIn: ''
};



//---------------------------//
//     SIGNUP REDUCER        //
//---------------------------//
export const signUpReducer = (state = initalState, action) => {
    switch(action.type){
        case SIGNUP_START:
            return {
                ...state, 
                loggingIn: true
            };

        case SIGNUP_SUCCESS:
            return {
                ...state, 
                token: action.payload,
                loggingIn: false
            };

        case SIGNUP_FAILURE:
            return {
                ...state, 
                error: action.payload,
                loggingIn: false
            };
        default: 
        return state;
    }
}