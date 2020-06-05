import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Theme from 'src/config/style';

export default class Loader extends Component {
    render() {
        return (
            <View style={styles.myloader}>
                <Text style={styles.titleText}> Please wait... </Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    myloader: {
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 100,
        backgroundColor: Theme.colors.poi ,
        opacity: 0.9,
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        height: "100%"
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold"
      }
  });
