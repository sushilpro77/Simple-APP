import React from 'react'
import {TouchableHighlight,View, Text, Image } from 'react-native'
import Theme from 'src/config/style';
import { TextInput } from 'react-native';
// import CustellaIcon from './CustellaIcon'

export default class CustomText extends React.PureComponent{
    render() {
      const { size, backgroundColor, color, weight, onPress, numberOfLines, style, iconLeft, iconRight, iconSize, iconColor, textDecoration='none', iconStyle, ellipsizeMode} = this.props;
      return (
        <View style={{flexDirection: 'row', backgroundColor:Theme.colors[backgroundColor], alignItems:'center',  marginBottom:2, marginTop:2, ...style}}>
          {/* {iconLeft && <CustellaIcon name={iconLeft} size={iconSize} style={{marginRight: 5, color:Theme.colors[iconColor]}}/>}  */}
          {/* {iconLeft && (typeof iconLeft === "string") && <CustellaIcon name={iconLeft} size={iconSize} style={{marginRight: 5, color:Theme.colors[iconColor]}}/>} */}
          {iconLeft && (typeof iconLeft === "function") && <Image source={iconLeft.call()} style={{marginRight: 5,width:15, height:15, marginLeft: 10, borderRadius: 10, ...iconStyle }}/>}
          <Text ellipsizeMode={ellipsizeMode} numberOfLines={numberOfLines} onPress={onPress} style={{...styles.size[size], textDecorationLine:textDecoration, color: Theme.colors[color], fontWeight: weight || 'normal'}}>{this.props.children}</Text>
          {/* {iconRight && <CustellaIcon name={iconRight} size={iconSize} style={{marginLeft: 5, color:Theme.colors[iconColor]}}/>} */}
          {/* {iconRight && (typeof iconRight === "string") && <CustellaIcon name={iconRight} size={iconSize} style={{marginLeft: 5, color:Theme.colors[iconColor]}}/>} */}
          {iconRight && (typeof iconRight === "function") && <Image source={iconRight.call()} style={{width:15, height:15, marginLeft: 10}}/>}
        </View>
      )
    }
  }

  CustomText.defaultProps = {
    size: 'normal',
    color: 'primary',
    iconColor: 'grey',
    backgroundColor:'none',
    iconSize: 16
  };

  const styles = {
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
        },
        extralargeplus: {
          fontSize: 25
        }
      }
  }

  