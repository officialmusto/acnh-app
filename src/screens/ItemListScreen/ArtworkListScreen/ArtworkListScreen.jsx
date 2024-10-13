import { Text, SafeAreaView, View, FlatList, ActivityIndicator} from 'react-native'
import React, { useState, useEffect } from 'react'
import { getArtwork } from '../../../utils/api-calls'
import styles from '../FossilListScreen/FossilListScreen.styles'
import Artwork from '../../../components/Artwork/Artwork'

const ArtworkListScreen = () => {
  const [artwork, setArtwork] = useState([])
  const [loading, setLoading] = useState([])
  

  useEffect(() => {
    getArtwork()
      .then(ArtworkData => {
        setArtwork(ArtworkData)
        setLoading(false)
      })
      .catch(error => {
        console.error("Error fetching posters:", error)
        setLoading(false)
      })
  }, [])

  return (
    <SafeAreaView>
        <View style={styles.container}>
          {loading ? (
          <ActivityIndicator size="large" color="#F3E0C0" />
          ) : (
          <FlatList
            data={artwork}
            renderItem={({ item }) => <Artwork artwork={item}/>}
            keyExtractor={(item) => item.name}
            />
          )}
      </View>
    </SafeAreaView>
  )
}

export default ArtworkListScreen