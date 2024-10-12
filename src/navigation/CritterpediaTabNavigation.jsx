import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import BugListScreen from '../screens/CritterpediaScreen/BugListScreen/BugListScreen'
import FishListScreen from '../screens/CritterpediaScreen/FishListScreen/FishListScreen'

const TopTab = createMaterialTopTabNavigator()

const CritterpediaTopTabNavigator = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Bugs" component={BugListScreen} />
      <TopTab.Screen name="Fish" component={FishListScreen} />
    </TopTab.Navigator>
  );
};

export default CritterpediaTopTabNavigator