import React, { Component } from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import RootStack from './src/config/router';
import Theme from './src/config/style';
import AsyncStorage from '@react-native-community/async-storage';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Theme.colors.primary,
    accent: Theme.colors.accent,
  }
};


XMLHttpRequest = GLOBAL.originalXMLHttpRequest ?
  GLOBAL.originalXMLHttpRequest :
  GLOBAL.XMLHttpRequest;


export default class App extends Component {


  constructor(props) {
    super(props)
    this.state = {
    };

  }

  render() {
    return (
      <PaperProvider theme={theme}>
        <RootStack />
      </PaperProvider>
    )
  }
}

// const styles = StyleSheet.create({

// });
