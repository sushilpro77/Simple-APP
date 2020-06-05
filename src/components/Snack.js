import { snackbarAction } from 'src/store';
import React from 'react';
import { Snackbar } from 'react-native-paper';
import { connect } from 'react-redux';

const Snack = (props) => {
  return (
    <Snackbar 
    style = {{
      backgroundColor: props.snackErrorType?'black':'red'
    }}
    visible={props.showSnack} 
    duration={3000} 
    onDismiss={() => props.hideSnackbar(props.snackMessage)}>{props.snackMessage}</Snackbar>
  )  
}

const mapDispatchToProps = (dispatch) => {
  return {
      hideSnackbar : (message) => {
        return dispatch(snackbarAction(false, message))
      }
  }
}

export default connect((state) => {
  return {
      snackMessage: state.mainReducer.snackMessage,
      showSnack: state.mainReducer.showSnack,
      snackErrorType: state.mainReducer.snackErrorType
  }
}, mapDispatchToProps) (Snack)