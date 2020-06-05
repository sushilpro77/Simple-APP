import { combineReducers } from 'redux';
import { newsReducer } from "./news/newsReducer";
import { categoryReducer } from "./category/categoryReducer";


export const HANDLE_SNACK = "HANDLE_SNACK"

export const snackbarAction = (show, message) => {
  return {
    type: 'HANDLE_SNACK', payload: { show, message, error: false }
  }
}
export const snackbarErrorAction = (show, message, error) => {
  return {
    type: 'HANDLE_SNACK', payload: { show, message, error }
  }
}


const mainReducer = (state = { loading: false, showSnack: false, snackMessage: '', snackErrorType: false, journey: null, isOffline: false }, action) => {
  let newState = {}
  switch (action.type) {
    case HANDLE_SNACK:
      newState = { ...state, showSnack: action.payload.show, snackMessage: action.payload.message, snackErrorType: action.payload.error || false }
      return newState
    default:
      return state
  }
}


export const rootReducer = combineReducers({
  mainReducer,
  newsReducer,
  categoryReducer
})