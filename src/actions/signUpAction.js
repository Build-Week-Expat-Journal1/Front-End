//----------------//
//     IMPORT     //
//----------------//

import { axiosWithAuth } from '../utils/axiosWithAuth';


//------------------------------//
//  EXPORT FROM SIGNUP REDUCER  //
//------------------------------//
export const SIGNUP_START = "SIGNUP_USER_START";
export const SIGNUP_SUCCESS = "SIGNUP_USER_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_USER_FAILURE";

// ADD IN URL FROM BACKEND

//-----------------------//
//      SIGNUP ACTION    //
//-----------------------//
export const signUp = credentials => dispatch => {
  dispatch({ type: SIGNUP_START });
  axiosWithAuth()
    .post("/users/register", credentials) 
    .then(res => {
      localStorage.setItem("token", res.data.token);
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: res.data.token
      });
    })
    .catch(err => {
      dispatch({
        type: SIGNUP_FAILURE,
        payload: err.message
      });
    });
};
