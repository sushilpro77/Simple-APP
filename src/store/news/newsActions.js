// import { progressAction, snackbarAction } from 'src/store';
import axiosclient from 'src/config/utils/axiosclient';
import moment from 'moment';
import {
  NEWS_ALL_FETCHED,
  NEWS_SINGLE_FETCHED
} from './newsTypes';


const ENDPOINT_FETCH_NEWS = 'pkstest/'
const ENDPOINT_FETCH_SINGLE_NEWS = 'single-post-api'

export const fetchNewsAction = () => {

  let api = axiosclient.get(ENDPOINT_FETCH_NEWS)
  return (dispatch, getState) => {
   
    api.then(res => {
      dispatch({ type: NEWS_ALL_FETCHED, payload: { resource: res.data } })
    }).catch(err => {
      console.log(err)
      dispatch(snackbarAction(true, "Error on fetching news."))
    })
  }
}


export const fetchSingleNewsAction = (postId) => {

  let api = axiosclient.get(ENDPOINT_FETCH_SINGLE_NEWS,{ params:{ postid : postId } })
  return (dispatch, getState) => {
   
    api.then(res => {
      dispatch({ type: NEWS_SINGLE_FETCHED, payload: { resource: res.data } })
    }).catch(err => {
      console.log(err)
      dispatch(snackbarAction(true, "Error on fetching news."))
    })
  }
}