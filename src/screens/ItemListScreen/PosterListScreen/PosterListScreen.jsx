import { Text, View, FlatList, ActivityIndicator} from 'react-native'
import React, { useState, useEffect } from 'react'
import { getPosters } from '../../../utils/api-calls'
import styles from '../../ItemListScreen/FossilListScreen/FossilListScreen.styles'
import Poster from '../../../components/Poster/Poster'

const PosterListScreen = () => {
  const [posters, setPosters] = useState([])
  const [loading, setLoading] = useState([])
  

  useEffect(() => {
    getPosters()
      .then(PosterData => {
        setPosters(PosterData)
        setLoading(false)
      })
      .catch(error => {
        console.error("Error fetching posters:", error)
        setLoading(false)
      })
  }, [])

  return (
    <View>
        <View style={styles.container}>
          {loading ? (
          <ActivityIndicator size="large" color="#F3E0C0" />
          ) : (
          <FlatList
            data={posters}
            renderItem={({ item }) => <Poster poster={item}/>}
            keyExtractor={(item) => item.name}
            />
          )}
      </View>
    </View>
  )
}

export default PosterListScreen