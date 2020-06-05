import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import React from 'react';
import { View } from 'react-native';
import { Drawer } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialIcons';


export function DrawerContent(props) {

  navigationCat = (title, where = false) => {
    props.navigation.navigate((where ? where : 'OfflineScreen'), { title: title })
  }

  closeDrw = () => {
    alert('Sushil Subedi\n9845543390');
  }

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props} >
        <Drawer.Section>
          <DrawerItem
            label='Offline'
            icon={({ color, size }) => (
              <Icon name="offline-pin" color={color} size={size} />
            )}
            onPress={() => { this.navigationCat('Offline', 'OfflineScreen') }}
          />
          <DrawerItem
            label='Online'
            icon={({ color, size }) => (
              <Icon name="swap-vertical-circle" color={color} size={size} />
            )}
            onPress={() => { this.navigationCat('Online', 'OnlineScreen') }}
          />
        </Drawer.Section>
      </DrawerContentScrollView>
      <Drawer.Section style={{ marginBottom: 15, borderTopColor: '#f4f4f4', borderTopWidth: 1 }} >
        <DrawerItem
          label='About Me'
          icon={({ color, size }) => (
            <Icon name="call" color={color} size={size} />
          )}
          onPress={() => { this.closeDrw() }}
        />
      </Drawer.Section>
    </View>
  )

}