import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// import screens:
import HomeScreen from '../screens/HomeScreen/HomeScreen'
import ItemTopTabNavigator from './ItemTopTabNavigator'
import VillagerListScreen from '../screens/VillagerListScreen/VillagerListScreen'
import CritterpediaTopTabNavigator from './CritterpediaTabNavigation'
import MoreListScreen from '../screens/MoreListScreen/MoreListScreen'

const BottomTab = createBottomTabNavigator()

const MainTabNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={HomeScreen} />
      {/* <BottomTab.Screen name="Items" component={ItemTopTabNavigator} /> */}
      <BottomTab.Screen name="Villagers" component={VillagerListScreen} />
      {/* <BottomTab.Screen name="Critterpedia" component={CritterpediaTopTabNavigator} /> */}
      <BottomTab.Screen name="More" component={MoreListScreen} />
    </BottomTab.Navigator>
  );
};

export default MainTabNavigator