
import React from 'react';
import { View } from 'react-native';
import { Checkbox } from 'react-native-paper';
import CustomText from './CustomText';
import Theme from 'src/config/style';


export default class CustomCheckBox extends React.PureComponent {
    constructor (props) {
      super(props)
      //console.log(props);
      
      this.state = {
        checked: (props.model && props.model.values[props.field]) || false
      }
      
    }

    _onPress () {
      
      this.setState({checked: !this.state.checked}, () => {
        if(this.props.onPress) {
          this.props.onPress(this.state.checked)
        }
        if(this.props.itemSelect) {
          this.props.itemSelect(this.state.checked) //added to find clicked or not on parent componets
        }
        if(this.props.model.setFieldValue)
            this.props.model.setFieldValue(this.props.field, this.state.checked)

      })
      
    }

    componentDidUpdate(prevProps, prevState) {
      if(prevProps.model.values[this.props.field] != this.props.model.values[this.props.field]) {
        this.setState({checked: this.props.model.values[this.props.field]})
      }
    }
  

    render() {
      const {model = {},  labelColor, labelStyle, weight, componentStyle={}, containerStyle, label , field, disabled} = this.props;
      let hasErrors = model.touched && ((model.touched[field] ) || model.touched[field]) && model.errors && model.errors[field]
      return (
        <View style={{flexDirection:'row', alignItems:'center',  ...componentStyle}}>
          <Checkbox.Android color={Theme.colors.purple} status={this.state.checked ? 'checked' : 'unchecked'} disabled={disabled} onPress={this._onPress.bind(this)} />
          {label && <CustomText size="normal" style={{...labelStyle}} weight={weight} color={!hasErrors?(labelColor || 'primary'):'errorText'}> {label} </CustomText>}
        </View>
      )
    }
  }

  



  