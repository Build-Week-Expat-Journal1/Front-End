//---------------------------//
//     IMPORT ACTIONS        //
//---------------------------//
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions/loginAction";


//---------------------------//
//     INITIAL STATE         //
//---------------------------//
const initialState = {
    error: '',
    token: '' ,
    loggingIn: ''
};

//---------------------------//
//      LOGIN REDUCER        //
//---------------------------//

export const loginReducer = (state = initialState, action)=>{
    switch(action.type){
       case LOGIN_START:
            return{
                ...state, 
                loggingIn: true
            }

        case LOGIN_SUCCESS:
            return{
                ...state,
                token: action.payload,
                loggingIn: false
            }

        case LOGIN_FAILURE:
            return{
                ...state,
                loggingIn: false, 
                error: action.payload
                
            }

            default: 
        return state;
    }
}