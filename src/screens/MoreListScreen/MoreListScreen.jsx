import { Text, View, SafeAreaView } from 'react-native'
import React from 'react'

// stylesheet:
import styles from './MoreListScreen.styles'

const MoreListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>MoreListScreen</Text>
    </SafeAreaView>
  )
}

export default MoreListScreen