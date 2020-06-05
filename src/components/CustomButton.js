
import React from 'react'
import {TouchableHighlight, View, Text, StyleSheet, Image, Platform} from 'react-native'
import Theme from 'src/config/style';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import CustellaIcon from './CustellaIcon'

export default class CustomButton extends React.PureComponent {
    render() {
      const { onPress, title, theme, size, iconSize=20, iconColor='white', style, textColor, centerIcon, rightIcon, height=25, width=25, marginRight=10, weight='bold', fixTextCenter = false } = this.props;
      
      return (
        <TouchableHighlight style={{...styles.button, backgroundColor: Theme.colors[theme], ...style}} onPress={onPress}>
          <View style={{justifyContent:"center", flexDirection:'row', alignItems:'center'}}>
              {/* {centerIcon  && (typeof centerIcon === "string") && <CustellaIcon name={centerIcon} size={iconSize} style={{marginRight: 5, color:Theme.colors[iconColor]}}/> } */}
              {centerIcon  && (typeof centerIcon === "function") && <Image source={centerIcon.call()} style={{height:height, width:width, marginRight:marginRight}} /> }
              <Text style={{color: textColor || Theme.colors.white, marginTop: Platform.OS=='android' && fixTextCenter?2:0, textAlign: 'center', justifyContent:'center', fontWeight:weight, ...styles.size[size]}}>
                {title}
              </Text>
              {/* {rightIcon  && (typeof rightIcon === "string") && <CustellaIcon name={rightIcon} size={iconSize} style={{margiLeft: 5, color:Theme.colors[iconColor]}}/> } */}
              {rightIcon  && (typeof rightIcon === "function") && <Image source={rightIcon.call()} style={{height:height, width:width}} /> }
          </View>
        </TouchableHighlight>
      )
    }
  }

  CustomButton.defaultProps = {
    size: 'medium'
  };

  const styles = {
    button: {
      backgroundColor: "#ff0000",
      borderRadius: 10,
      padding: 15,
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 5,
      marginTop: 5
    },
    size: {
      extrasmall: {
        fontSize: 8
      }, 
      extrasmallplus: {
        fontSize: 10
      }, 
      small: {
        fontSize: 12
      }, 
      normal: {
        fontSize: 14
      },
      medium: {
        fontSize: 16
      },
      large: {
        fontSize: 18
      },
      extralarge: {
        fontSize: 20
      }
    }
  }

  