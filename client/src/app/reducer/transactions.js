import { GET_TRANSACTIONS, NEW_TRANSACTION } from "../actions/actionTypes";

export default function transactions(state = [], action) {
  switch(action.type){
    case GET_TRANSACTIONS:
      return action.payload.transactions
    default:
      return state
  }
}