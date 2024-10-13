import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import MainTabNavigator from './navigation/MainTabNavigator'

// stylesheet:
import styles from './App.styles'

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <MainTabNavigator />
      </NavigationContainer>
    </View>
  )
}