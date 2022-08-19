import { combineReducers } from "@reduxjs/toolkit";
import user from "./user";
import auth from "./auth";
import transactions from "./transactions";

export default combineReducers({ user, auth, transactions })