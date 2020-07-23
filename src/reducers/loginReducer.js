//---------------------------//
//     IMPORT ACTIONS        //
//---------------------------//
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions/loginAction";


//---------------------------//
//     INITIAL STATE         //
//---------------------------//




//---------------------------//
//      LOGIN REDUCER        //
//---------------------------//

export const loginReducer = (state = initialState, action){
    switch(action.type){
       case LOGIN_REQUEST:
            return{

            }

        case LOGIN_SUCCESS:
            return{
                    
            }

        case LOGIN_FAILURE:
            return{
                
            }
    }
}