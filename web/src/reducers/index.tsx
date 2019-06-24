import {
  combineReducers
} from "redux";
import {
  test
} from "./test";

const allReducers = combineReducers({
  test: test,
});

export default allReducers;