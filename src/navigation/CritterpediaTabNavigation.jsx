import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import BugListScreen from '../screens/CritterpediaScreen/BugListScreen/BugListScreen'
import FishListScreen from '../screens/CritterpediaScreen/FishListScreen/FishListScreen'

const TopTabs = createMaterialTopTabNavigator()

const CritterpediaTopTabNavigator = () => {
  return (
    <TopTabs.Navigator>
      <TopTabs.Screen name="Bugs" component={BugListScreen} />
      <TopTabs.Screen name="Fish" component={FishListScreen} />
    </TopTabs.Navigator>
  )
}

export default CritterpediaTopTabNavigator