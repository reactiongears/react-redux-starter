import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import counterReducer from "./counter";
import viewReducer from "./view";

export default combineReducers({
  counter: counterReducer,
  routing: routerReducer,
  view: viewReducer
});
