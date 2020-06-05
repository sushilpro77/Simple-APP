
import React from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import Theme from 'src/config/style';
import CustomText from './CustomText';

export default class CustomInput extends React.PureComponent {
    render() {
      const {model = {}, placeholder, numberOfLines=1, componentStyle={}, borderMode, backgroundMode, textColor, iconColor=false, icon, iconRight, password, onChangeText=()=>{}, labelColor, labelStyle, containerStyle, inputStyle, label , field, editable=true, keyboardType='default'} = this.props;
      //console.log("Input",model)
      return (
        <View pointerEvents="box-none"  style={{flexDirection:'column', ...componentStyle}}>
          {label && <CustomText size="normal" weight="bold" style={{...labelStyle}} color={labelColor || 'primary'}> {label} </CustomText>}
          <View pointerEvents="box-none" style={{...Theme.InputStyle.TextField, height:45*numberOfLines, ...containerStyle,  borderColor: Theme.colors[(borderMode === undefined)?'acent':borderMode], backgroundColor: Theme.colors[backgroundMode || 'white'] }} >
            <TextInput multiline={numberOfLines>1} numberOfLines={4} secureTextEntry={password} onChangeText={(e)=> {
              if(model.setFieldValue)
                model?.setFieldValue(field, e)
              onChangeText(e)
            }} keyboardType={keyboardType} placeholder={placeholder} value={model.values && model.values[field]?.toString()} style={{flex: 1, fontSize: 14, textAlign:'center', color: Theme.colors[textColor || 'fieldText']}} editable={editable}/>
            {(model && model?.touched && model.touched[field] || model.submitCount>0) && model.errors && model.errors[field] && <Text style={{color: Theme.colors.errorText}}>{model.errors[field]}</Text>}
          </View>
        </View>
      )
    }
  }

  

  

  