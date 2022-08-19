import { GET_TRANSACTIONS } from "../actions/actionTypes";

export default function balance(state = { total: 0, ingresos: 0, egresos: 0 }, action) {
  switch(action.type){
    case GET_TRANSACTIONS:
      return action.payload.balance
    default:
      return state
  }
}