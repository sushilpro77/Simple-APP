import {
  NEWS_ALL_FETCHED,
  NEWS_SINGLE_FETCHED
} from './newsTypes';

export const newsReducer = (state = {
  news:[],
  singleNews:false,
}, action) => {
  switch (action.type) {
    case NEWS_ALL_FETCHED:
      return { ...state, news: action.payload.resource }
    case NEWS_SINGLE_FETCHED:
      return { ...state, singleNews: action.payload.resource }
    default:
      return state
    
  }
}
