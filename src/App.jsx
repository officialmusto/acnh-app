import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import MainTabNavigator from './navigation/MainTabNavigator'

// stylesheet:
import styles from './App.styles'

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <MainTabNavigator />
      </View>
    </NavigationContainer>
  )
}