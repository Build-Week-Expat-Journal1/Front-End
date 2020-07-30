//----------//
//  IMPORTS //
//----------//
import { combineReducers } from "redux";
import { loginReducer } from "../reducers/loginReducer";
import { signUpReducer } from "../reducers/signUpReducer";
import { reducer } from "../reducers/deleteUpdateReducer";


export const rootReducer = combineReducers({
  loginReducer,
  signUpReducer,
  reducer
});
