import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { DrawerContent } from './DrawerContent';
import OfflineScreen from 'src/pages/offline/OfflineScreen';
import CreateOfflineScreen from 'src/pages/offline/Create';
import OnlineScreen from 'src/pages/online/OnlineScreen';
import CreateOnlineScreen from 'src/pages/online/Create';



const Drawer = createDrawerNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="OfflineScreen" drawerContent={ props => <DrawerContent {...props}  /> } >
        <Drawer.Screen name="OfflineScreen" component={ OfflineScreen } />
        <Drawer.Screen name="OfflineCreate" component={ CreateOfflineScreen } />
        <Drawer.Screen name="OnlineScreen" component={ OnlineScreen } />
        <Drawer.Screen name="OnlineCreate" component={ CreateOnlineScreen } />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};




