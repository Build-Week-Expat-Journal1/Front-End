//----------------//
//     IMPORT     //
//----------------//

import { axiosWithAuth } from '../utils/axiosWithAuth';

//------------------------------//
//  EXPORT FROM LOGIN REDUCER   //
//------------------------------//
export const LOGIN_START = "USERS_LOGIN_START";
export const LOGIN_SUCCESS = "USERS_LOGIN_SUCCESS";
export const LOGIN_FAILURE = "USERS_LOGIN_FAIL";

// ADD IN URL FROM BACKEND

//--------------//
// LOGIN ACTION //
//--------------//
export const userLogin = credentials => dispatch => {
  dispatch({ type: LOGIN_START });
  axiosWithAuth()
    .post("/api/login", credentials)
    .then(res => {
      console.log(res.data);
      localStorage.setItem("token", res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
    })
    .catch(err => {
      dispatch({
        type: LOGIN_FAILURE,
        payload: err.message
      });
    });
};
