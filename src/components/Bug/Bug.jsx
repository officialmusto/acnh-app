import { SafeAreaView, Text, View, Image } from 'react-native'
import styles from '../Bug/Bug.styles'
import React from 'react'

const Bug = ({ bug }) => {
  return (
    <SafeAreaView >
      <View style={styles.card}>
        <Image
        source={{ uri: bug.image_url}}
        style={styles.image}
        resizeMode="contain"
        />
        <Text style={styles.name}>{bug.name}</Text>
      </View>
    </SafeAreaView>
  )
}

export default Bug