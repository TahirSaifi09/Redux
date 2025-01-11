
import { combineReducers } from "@reduxjs/toolkit";
import counter from "./reducer/counterReducer";

export const rootReducer = combineReducers({
  counter,
});
