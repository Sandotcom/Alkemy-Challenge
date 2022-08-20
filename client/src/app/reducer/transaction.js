import { GET_TRANSACTION } from "../actions/actionTypes";

export default function transaction (state = {}, action){
  switch(action.type){
    case GET_TRANSACTION:
      return action.payload
    default:
      return state
  }
}