import { combineReducers } from "@reduxjs/toolkit";
import auth from "./auth";
import transactions from "./transactions";
import balance from './balance'
import transaction from './transaction'

export default combineReducers({ auth, transactions, balance, transaction })