import { SafeAreaView, Text, View, Image } from 'react-native'
import styles from './Artwork.styles'
import React from 'react'

const Artwork = ({ artwork }) => {
  return (
    <SafeAreaView style={styles.body}>
      <View>
        <Text>{artwork.name}</Text>
        {artwork.variations.map((variation, i) => (
        <View key={i} style={styles.variation}>
          <Text style={styles.variationName}>{variation.name}</Text>
          <Image
            source={{ uri: variation.image_url }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      ))}
      </View>
    </SafeAreaView>
  )
}

export default Artwork

//? figure out why images are not showing, then remove border lines.