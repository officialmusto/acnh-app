import { Text, View, SafeAreaView } from 'react-native'
import React from 'react'

// stylesheet:
import styles from './HomeScreen.styles'

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>
    </SafeAreaView>
  )
}

export default HomeScreen

