import AsyncStorage from '@react-native-community/async-storage';
import { Formik } from 'formik';
import React, { Component, Fragment } from 'react';
import { View } from 'react-native';
import AppHeader from 'src/components/AppHeader';
import CustomButton from 'src/components/CustomButton';
import CustomCheckBox from 'src/components/CustomCheckBox';
import CustomInput from 'src/components/CustomInput';
import * as Yup from "yup";
import axios from 'axios';
import Loader from "src/components/Loader";

class Create extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false
    },
      this.formSchema = {

      };
      this.validationSchema = Yup.object().shape({
        name: Yup.string()
          .required("Required"),
        price: Yup.string()
          .required("Required").matches(/^\d+(\.\d{1,2})?$/, 'Invalid Entry'),
        qty: Yup.string()
          .required("Required").matches(/^\d+$/, 'Invalid Entry'),
      });
  }


  _onSaveOfflineClicked = async (values) => {
    // AsyncStorage.clear();
    let value = await AsyncStorage.getItem("OFFLINE_PRODUCT");
    if(value !== null) {
      let newArr = [];
      value = JSON.parse(value);
      newArr = [value,values];
      await AsyncStorage.setItem("OFFLINE_PRODUCT", JSON.stringify(newArr))
    } else {
      await AsyncStorage.setItem("OFFLINE_PRODUCT", JSON.stringify(values))
    }

    /* if (value !== null) {
        await AsyncStorage.setItem("OFFLINE_PRODUCT", JSON.stringify(newArr))
    } else {
    } */
    this.formSchema={}
    this.props.navigation.goBack();
    
  }

  render() {
    
    return (
      <View style={{ flex: 1 }}>
        <AppHeader {...this.props} title={this.props.route.params?.title} icon='back' />
        <Formik
          initialValues={this.formSchema}
          validationSchema={this.validationSchema}
          onSubmit={values => this._onSaveOfflineClicked(values)}>
          {(model) => (
            <Fragment>
              <View style={{ margin: 15 }}>
                <CustomInput
                  componentStyle={{ marginTop: 15 }}
                  containerStyle={{ flexDirection: 'row', alignItems: 'center' }}
                  label='Name'
                  labelSize='large'
                  field="name"
                  model={model}
                  placeholder='Enter Name'
                />
                <CustomInput
                  componentStyle={{ marginTop: 15 }}
                  containerStyle={{ flexDirection: 'row', alignItems: 'center' }}
                  label='Price'
                  labelSize='large'
                  field="price"
                  model={model}
                  placeholder='Enter Price'
                />
                <CustomInput
                  componentStyle={{ marginTop: 15 }}
                  containerStyle={{ flexDirection: 'row', alignItems: 'center' }}
                  label='Quantity'
                  labelSize='large'
                  field="qty"
                  model={model}
                  placeholder='Enter Quantity'
                />
                <CustomCheckBox
                  componentStyle={{ marginTop: 15 }}
                  containerStyle={{ flexDirection: 'row', alignItems: 'center' }}
                  label="Virtual"
                  weight='bold'
                  model={model}
                  field="virtual"
                />
              </View>
              <View style={{ alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20, flexDirection: "row", marginBottom: 20 }}>
                <CustomButton
                  style={{ width: '35%', borderRadius: 25, height: 50, justifyContent: "center", alignItems: 'center' }}
                  title='save'
                  theme='menuHeader'
                  size='5'
                  onPress={model.handleSubmit}
                />
              </View>
            </Fragment>
          )}
        </Formik>
      </View>
    )
  }
}



export default Create;
