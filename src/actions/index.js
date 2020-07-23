import { combineActions } from "redux-actions";

import { loginAction } from "../actions/loginAction";

export const rootAction = combineActions({
  loginAction,
});
