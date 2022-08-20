import { AUTH, GET_TRANSACTION, GET_TRANSACTIONS } from './actionTypes';
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

export const getTransaction = (id, setLoading) => async (dispatch) => {
  try {
    const { data } = await api.getTransaction(id)
    dispatch({ type: GET_TRANSACTION, payload: data })
    setLoading && setLoading(false)
  } catch (error) {
    console.log(error)
  }
}

export const putTransaction = (id, transaction, navigate) => async (dispatch) => {
  try {
    await api.putTransaction(id, transaction)
    navigate('/')
  } catch (error) {
    console.log(error)
  }
}

export const deleteTransaction = (id, setIsModify) => async (dispatch) => {
  try {
    await api.deleteTransaction(id)
    setIsModify((prevIsModify) => !prevIsModify)
  } catch (error) {
    console.log(error)
  }
}