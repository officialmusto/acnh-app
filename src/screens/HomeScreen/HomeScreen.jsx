import { Text, View } from 'react-native'
import React from 'react'

// stylesheet:
import styles from './HomeScreen.styles'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen