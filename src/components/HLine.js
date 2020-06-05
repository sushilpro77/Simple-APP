import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Modal,
  ActivityIndicator
} from 'react-native';
import Theme from 'src/config/style';

const HLine = (props) => {
  const {color='barGray', style} = props

  return (
    <View style={[{borderBottomColor: Theme.colors[color],
    borderBottomWidth: 1}, style]}/>
  )
}

HLine.defaultProps = {
  color: 'inputDivider'
}

export default HLine;