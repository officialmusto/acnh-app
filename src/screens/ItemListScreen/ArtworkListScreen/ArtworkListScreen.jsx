import { SafeAreaView, View, FlatList, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getArtwork } from '../../../utils/api-calls'
import styles from './ArtworkListScreen.styles'
import Artwork from '../../../components/Artwork/Artwork'

const ArtworkListScreen = () => {
  const [artwork, setArtwork] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getArtwork()
      .then(ArtworkData => {
        setArtwork(ArtworkData)
        setLoading(false)
      })
      .catch(error => {
        console.error("Error fetching artwork:", error)
        setLoading(false)
      })
  }, [])

  // Filter photos and posters
  const photos = artwork.filter(item => item.category === "Photos")
  const posters = artwork.filter(item => item.category === "Posters")

  // Function to match a poster with a photo by name
  const getPosterForPhoto = (photoName) => {
    return posters.find(poster => poster.name.includes(photoName.replace("photo", "poster")))
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator size="large" color="#F3E0C0" />
        ) : (
          <FlatList
            data={photos}
            renderItem={({ item: photo }) => {
              const poster = getPosterForPhoto(photo.name)
              return (
                <Artwork artwork={photo} poster={poster} />
              )
            }}
            keyExtractor={(item) => item.name}
          />
        )}
      </View>
    </SafeAreaView>
  )
}

export default ArtworkListScreen