import { combineReducers } from "redux";

import { reducer as toastr } from "react-redux-toastr";
import auth from "./authReducers";

export default combineReducers({
  toastr,
  auth
});
