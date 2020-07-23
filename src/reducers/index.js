import { combineReducers } from "redux";

import { loginReducer } from "../reducers/loginReducer";
import { signUpReducer } from "../reducers/signUpReducer";


export const rootReducer = combineReducers({
  loginReducer,
  signUpReducer,
});
