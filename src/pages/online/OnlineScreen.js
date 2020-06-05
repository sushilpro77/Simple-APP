import React, { Component } from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet, InteractionManager } from 'react-native';
import { FAB, Text } from 'react-native-paper';
import AppHeader from 'src/components/AppHeader';
import Theme from 'src/config/style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import settings from 'src/config/settings';
import CustomText from 'src/components/CustomText';
import axios from 'axios';
import ListEmpty from 'src/components/ListEmpty';
import Loader from "src/components/Loader";

class OnlineScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading:false,
      products: null,
    }
  }
  componentDidMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener('focus', () => {
      InteractionManager.runAfterInteractions(() => {
        this._onRefresh();
      })
    })
  }

  componentWillUnmount() {
    this.focusListener();
  }

  _onRefresh() {
    let self = this;
    self.setState({loading:true})
    axios.get(settings.API_URL + '/product')
      .then(function (response) {
        self.setState({loading:false})
        self.setState({
          products: response.data
        })
        
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  _onEndScrollReached() {
    console.log('====================================');
    console.log('end scroll');
    console.log('====================================');
  }

  onItemClicked(item) {
    alert(item?.name+' Clicked.')
  }

  handleOnlineClick() {
    this.props.navigation.navigate('OnlineCreate', { title: 'Create Online Product' });
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
          { this.state.loading === true &&
            < Loader />
          }
        <AppHeader {...this.props} title={this.props.route.params?.title} icon='menu' />
        <View style={Theme.container}>
          <FlatList
            data={this.state.products}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <TouchableOpacity style={styles.button} onPress={() => { this.UNSAFE_componentWillReceivePropsonItemClicked(item) }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 0 }}>
                  <View style={{ flex: 1 }}>
                    <CustomText size='medium' weight='bold' color='white' style={{ marginBottom: 10 }}>Name: {item?.name}</CustomText>
                    <CustomText color='white' style={{ marginBottom: 5 }}>Rs.{item?.price}</CustomText>
                    <CustomText color='white' style={{ marginBottom: 5 }}>Quantity: {item?.qty}</CustomText>
                    <CustomText color='white' style={{ marginBottom: 5 }}>Virtual: {item?.virtual == '1' ? 'Yes':'No'}</CustomText>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            showsVerticalScrollIndicator={false}
            onRefresh={() => this._onRefresh()}
            refreshing={false}
            ListEmptyComponent={() => (
              <ListEmpty message='No online product to display' />
            )}
            onEndReached={() => this._onEndScrollReached.bind(this)}
            onEndReachedThreshold={0.2}

          />
          <FAB
            style={Theme.ButtonStyle.fab}
            icon={() => (<Icon name="control-point" color={Theme.colors.white} size={25} />)}
            onPress={() => this.handleOnlineClick()}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Theme.colors.buttonBackground,
    borderRadius: 10,
    padding: 8,
    marginHorizontal: 8,
    marginVertical: 7
  },
});

export default OnlineScreen;