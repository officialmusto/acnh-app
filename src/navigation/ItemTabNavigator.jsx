import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

// Import your screens for each sub-tab
import FishListScreen from '../features/fish/FishListScreen'
import BugListScreen from '../features/bugs/BugListScreen'
import FossilListScreen from '../features/fossils/FossilListScreen'

const Tab = createMaterialTopTabNavigator()

const ItemTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Fish" component={FishListScreen} />
      <Tab.Screen name="Bugs" component={BugListScreen} />
      <Tab.Screen name="Fossils" component={FossilListScreen} />
    </Tab.Navigator>
  )
}

export default ItemTabNavigator