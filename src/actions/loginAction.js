import axios from 'axios';

export const LOGIN_START = 'USERS_LOGIN_START';
export const LOGIN_SUCCESS = 'USERS_LOGIN_SUCCESS';
export const LOGIN_FAIL = 'USERS_LOGIN_FAIL';
//--------------//
// LOGIN ACTION //
//--------------//
export const userLogin = credentials => dispatch => {
   dispatch({ type: LOGIN_START });
   axios
   .post('', credentials)// api/login
   .then(res => {
       console.log(res.data);
       localStorage.setItem('token', res.data.token)
       dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
   })
   .catch(err => {
       dispatch({
           type: LOGIN_FAILURE,
           payload: err.message
       })
   })

};