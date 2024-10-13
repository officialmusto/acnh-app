import { SafeAreaView, Text, View, Image } from 'react-native'
import styles from '../Poster/Poster.styles'
import React from 'react'

const Poster = ({ poster }) => {
  return (
    <SafeAreaView style={styles.body}>
      <View>
        <Text>{poster.name}</Text>
      </View>
    </SafeAreaView>
  )
}

export default Poster