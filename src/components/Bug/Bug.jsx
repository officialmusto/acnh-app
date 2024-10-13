import { SafeAreaView, Text, View, Image } from 'react-native'
import styles from '../Bug/Bug.styles'
import React from 'react'

const Bug = ({ bug }) => {
  return (
    <SafeAreaView style={styles.body}>
      <View>
        <Text>{bug.name}</Text>
      </View>
    </SafeAreaView>
  )
}

export default Bug