import { SafeAreaView, Text, View, Image } from 'react-native'
import styles from '../Fish/Fish.styles'
import React from 'react'

const Fish = ({ fish }) => {
  return (
    <SafeAreaView style={styles.body}>
      <View>
        <Text>{fish.name}</Text>
      </View>
    </SafeAreaView>
  )
}

export default Fish