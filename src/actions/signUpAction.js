import axios from "axios";

export const SIGNUP_START = 'SIGNUP_USER_START';
export const SIGNUP_SUCCESS = 'SIGNUP_USER_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_USER_FAILURE';

export const signUp = credentials => dispatch =>{
    dispatch({ type: SIGNUP_START });
    axios
    .post('', credentials)//api/register or signup
    .then(res => {
        localStorage.setItem('token', res.data.token);
        dispatch({
            type: SIGNUP_SUCCESS,
            payload: res.data.token
        });
    })
    .catch(err => {
        dispatch({
            type: SIGNUP_FAILURE,
            payload: err.message
        })
    })
}