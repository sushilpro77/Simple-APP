// import { progressAction, snackbarAction } from 'src/store';
import axiosclient from 'src/utils/axiosclient';
import moment from 'moment';
import {
  FETCH_CATEGORY,
} from './categoryActionTypes';


const ENDPOINT_ALL_CATEGORIES = 'api/v1/employees'

export const fetchCategoriesAction = () => {

  let api = axiosclient.get(ENDPOINT_ALL_CATEGORIES)
  return (dispatch, getState) => {
   
    api.then(res => {
      dispatch({ type: TRIP_COUNT_FETCHED, payload: { resource: res.data } })
    }).catch(err => {
      console.log(err)
      dispatch(snackbarAction(true, "Error on fetching categories."))
    })
  }
}