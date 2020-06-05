import React from 'react'
import {View, StyleSheet, Text, Dimensions, Image} from 'react-native'
import Theme from 'src/config/style';
import CustomText from './CustomText';
const windowHeight = Dimensions.get('window').height;
const ListEmpty = ({message, image, smallMessage='', textColor='while', weight='normal', smallWeight='normal'}) => {
    return (
      //View to show when list is empty
      <View style={{flex: 1,  justifyContent: 'center', alignItems: 'center', height: (windowHeight-250)}}>
        {image && <Image source={image} style={{height: 50, width: 50}} />}
        <CustomText size="medium" weight={weight} color={textColor} style={{ textAlign: 'center', marginVertical: 10 }}>{message}</CustomText>
        <CustomText size="small" weight={smallWeight} color={textColor} style={{ textAlign: 'center',marginVertical: 10 }}>{smallMessage}</CustomText>
      </View>
    );
  };
12


  export default ListEmpty