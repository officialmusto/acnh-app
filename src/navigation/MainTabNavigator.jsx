import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

// Import your screens
import HomeScreen from '../features/home/HomeScreen'
import VillagersScreen from '../features/villagers/VillagerListScreen'
import MoreScreen from '../features/more/MoreScreen'

// Import the navigator for sub-tabs (Items: Fish, Bugs, Fossils)
import ItemTabNavigator from './ItemTabNavigator'

const Tab = createBottomTabNavigator()

const TabGroup = () => {
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Items" component={ItemTabNavigator} />  {/* Nested Tabs */}
    <Tab.Screen name="Villagers" component={VillagersScreen} />
    <Tab.Screen name="More" component={MoreScreen} />
  </Tab.Navigator>
}

const MainTabNavigator = () => {
  return (
    <NavigationContainer>
      <TabGroup />
    </NavigationContainer>
  )
}

export default MainTabNavigator