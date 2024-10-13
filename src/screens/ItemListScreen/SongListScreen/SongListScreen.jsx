import { Text, View, SafeAreaView } from 'react-native'
import React from 'react'

// stylesheet:
import styles from './SongListScreen.styles'

const SongListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>SongListScreen</Text>
    </SafeAreaView>
  )
}

export default SongListScreen
