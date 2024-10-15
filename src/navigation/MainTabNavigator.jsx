import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import Entypo from '@expo/vector-icons/Entypo'
import { TouchableOpacity } from 'react-native-gesture-handler'

import HomeScreen from '../screens/HomeScreen/HomeScreen'
import ItemTopTabNavigator from './ItemTopTabNavigator'
//screens
import VillagerListScreen from '../screens/VillagerListScreen/VillagerListScreen'
import CritterpediaTopTabNavigator from './CritterpediaTabNavigation'
import MoreListScreen from '../screens/MoreListScreen/MoreListScreen'

const Tab = createBottomTabNavigator()

const MainTabNavigator = () => {
  const tabIconColor = "#4e9aa0"
  const tabIconColorH = "#0a5d65"
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#91d7db',
        },
      }}
    >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: () => <FontAwesome5 name="home" size={24} color={tabIconColor} />,
          }}
        />
      <Tab.Screen
        name="Items"
        component={ItemTopTabNavigator}
        options={{
          tabBarIcon: () => <Entypo name="database" size={24} color={tabIconColor}/>,
        }}
        />
      <Tab.Screen
        name="Villagers"
        component={VillagerListScreen}
        options={{
          tabBarIcon: () => <FontAwesome name="users" size={22} color={tabIconColor} />,
        }}
        />
      <Tab.Screen
        name="Critterpedia"
        component={CritterpediaTopTabNavigator}
        options={{
          tabBarIcon: () => <Entypo name="bug" size={24} color={tabIconColor} />,
        }}
        />
      <Tab.Screen
        name="More"
        component={MoreListScreen}
        options={{
          tabBarIcon: () => <Entypo name="dial-pad" size={24} color="#8a735e" />,
        }}
        />
    </Tab.Navigator>
  )
}

export default MainTabNavigator