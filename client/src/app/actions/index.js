import { AUTH, GET_TRANSACTIONS, NEW_TRANSACTION } from './actionTypes';
import * as api from '../api';

export const signIn = (userData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(userData)
    dispatch({ type: AUTH, payload: data })
    navigate('/')
  } catch (error) {
    console.log(error)
  }
}

export const signUp = (userData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(userData)
    dispatch({ type: AUTH, payload: data })
    navigate('/')
  } catch (error) {
    console.log(error)
  }
}

export const newTransaction = (transaction, navigate) => async (dispatch) => {
  try {
    await api.newTransaction(transaction)
    navigate('/')
  } catch (error) {
    console.log(error)
  }
}

export const getTransactions = () => async (dispatch) => {
  try {
    const { data } = await api.getTransactions()
    dispatch({ type: GET_TRANSACTIONS, payload: data })
  } catch (error) {
    console.log(error)
  }
}