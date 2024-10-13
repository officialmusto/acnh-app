import { SafeAreaView, Text, View, Image } from 'react-native'
import styles from './Artwork.styles'
import React from 'react'

const Artwork = ({ artwork }) => {
  return (
    <SafeAreaView style={styles.body}>
      <View>
        <Text>{artwork.name}</Text>
      </View>
    </SafeAreaView>
  )
}

export default Artwork