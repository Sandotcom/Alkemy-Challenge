import { combineReducers } from "@reduxjs/toolkit";
import user from "./user";
import auth from "./auth";

export default combineReducers({ user, auth })