import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//fonts, icons, etc
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import Entypo from '@expo/vector-icons/Entypo'


// import screens:
import HomeScreen from '../screens/HomeScreen/HomeScreen'
import ItemTopTabNavigator from './ItemTopTabNavigator'
import VillagerListScreen from '../screens/VillagerListScreen/VillagerListScreen'
import CritterpediaTopTabNavigator from './CritterpediaTabNavigation'
import MoreListScreen from '../screens/MoreListScreen/MoreListScreen'

const Tab = createBottomTabNavigator()

const MainTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
      name="Home" 
      component={HomeScreen} 
      options={{
        tabBarIcon: () => <FontAwesome5 name="home" size={24} color="black" />
      }}/>
      {/* <Tab.Screen 
      name="Items" 
      component={ItemTopTabNavigator} 
      options={{
        tabBarIcon: () => <Entypo name="database" size={24} color="black" />
      }}/> */}
      <Tab.Screen 
      name="Villagers" 
      component={VillagerListScreen} 
      options={{
        tabBarIcon: () => <FontAwesome name="users" size={22} color="black" />
      }}/>
      {/* <Tab.Screen 
      name="Critterpedia" 
      component={CritterpediaTopTabNavigator} 
      options={{
        tabBarIcon: () => <Entypo name="bug" size={24} color="black" />
      }}/> */}
      <Tab.Screen 
      name="More" 
      component={MoreListScreen} 
      options={{
        tabBarIcon: () => <Entypo name="dial-pad" size={24} color="black" />
      }}/>
    </Tab.Navigator>
  )
}

export default MainTabNavigator