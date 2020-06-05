import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Modal,
  ActivityIndicator
} from 'react-native';
import Theme from 'app/config/styles';

const VLine = (props) => {
  const {color} = props

  return (
    <View style={{borderRightColor: Theme.colors[color],
    borderRightWidth: 1, height:'100%'}}/>
  )
}

VLine.defaultProps = {
  color: 'inputDivider'
}

export default VLine;