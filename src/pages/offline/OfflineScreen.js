import AsyncStorage from '@react-native-community/async-storage';
import React, { Component } from 'react';
import { FlatList, Text, View, TouchableOpacity, StyleSheet, InteractionManager } from 'react-native';
import { FAB } from 'react-native-paper';
import AppHeader from 'src/components/AppHeader';
import ListEmpty from 'src/components/ListEmpty';
import Theme from 'src/config/style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomText from 'src/components/CustomText';

class OfflineScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      offlineProduct: []

    }
  }
  componentDidMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener('focus', () => {
      InteractionManager.runAfterInteractions(() => {
        this.refresh();
      })
    })
  }

  componentWillUnmount() {
    this.focusListener();
  }

  async refresh() {
    let newArr = [];
    let value = (await AsyncStorage.getItem("OFFLINE_PRODUCT"));
    const item = JSON.parse(value);
    if (value !== null) {
      this.setState({
        offlineProduct: [item]
      })
    } 

  }

  _onRefresh() {
    this.refresh();
  }

  onItemClicked(item) {
    alert(item?.name + ' Clicked.')
  }

  _onEndScrollReached() {
    console.log('end');

  }

  handleOfflineClick() {
    this.props.navigation.navigate('OfflineCreate', { title: 'Create Offline Product' });
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppHeader {...this.props} title={this.props.route.params?.title || 'Offline'} icon='menu' />
        <View style={Theme.container}>
          <FlatList
            data={this.state?.offlineProduct}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <TouchableOpacity style={styles.button} onPress={() => { this.UNSAFE_componentWillReceivePropsonItemClicked(item) }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 0 }}>
                  <View style={{ flex: 1 }}>
                    <CustomText size='medium' weight='bold' color='white' style={{ marginBottom: 10 }}>Name: {item?.name}</CustomText>
                    <CustomText color='white' style={{ marginBottom: 5 }}>Rs.{item?.price}</CustomText>
                    <CustomText color='white' style={{ marginBottom: 5 }}>Quantity: {item?.qty}</CustomText>
                    <CustomText color='white' style={{ marginBottom: 5 }}>Virtual: {item?.virtual == '1' ? 'Yes' : 'No'}</CustomText>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            showsVerticalScrollIndicator={false}
            onRefresh={() => this._onRefresh()}
            refreshing={false}
            ListEmptyComponent={() => (
              <ListEmpty message='No offline product to display' />
            )}
            onEndReached={() => this._onEndScrollReached.bind(this)}
            onEndReachedThreshold={0.2}

          />
          <FAB
            style={Theme.ButtonStyle.fab}
            icon={() => (<Icon name="control-point" color={Theme.colors.white} size={25} />)}
            onPress={() => this.handleOfflineClick()}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Theme.colors.favBackground,
    borderRadius: 10,
    padding: 8,
    marginHorizontal: 8,
    marginVertical: 7
  },
});

export default OfflineScreen;