import { SafeAreaView, Text, View, Image } from 'react-native'
import styles from './Artwork.styles'
import React from 'react'

const Artwork = ({ artwork, poster }) => {
  const selectedPhoto = artwork.variations[0]
  const selectedPoster = poster ? poster.variations[0] : null

  return (
    <SafeAreaView style={styles.card}>
      <Text style={styles.text}>{`${artwork.name} & ${poster ? poster.name : "poster not found"}`}</Text>
      
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: selectedPhoto.image_url }}
          style={styles.photo}
          resizeMode="contain"
        />
        {selectedPoster && (
          <Image
            source={{ uri: selectedPoster.image_url }}
            style={styles.poster}
            resizeMode="contain"
          />
        )}
      </View>
    </SafeAreaView>
  )
}

export default Artwork