import {
  FETCH_CATEGORY,
} from './categoryActionTypes';

export const categoryReducer = (state = {
  newsCategory:[],
}, action) => {
  switch (action.type) {
    case FETCH_CATEGORY:
      return { ...state, newsCategory: action.payload.resource }
    default:
      return state
    
  }
}
