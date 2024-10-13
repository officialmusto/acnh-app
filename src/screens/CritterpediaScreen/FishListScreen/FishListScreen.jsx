import { Text, View, FlatList, ActivityIndicator} from 'react-native'
import React, { useState, useEffect } from 'react'
import { getFishes } from '../../../utils/api-calls'
import styles from '../FishListScreen/FishListScreen.styles'
import Fish from '../../../components/Fish/Fish'

const FishListScreen = () => {
  const [fishes, setFishes] = useState([])
  const [loading, setLoading] = useState([])
  

  useEffect(() => {
    getFishes()
      .then(FishData => {
        setFishes(FishData)
        setLoading(false)
      })
      .catch(error => {
        console.error("Error fetching fish:", error)
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
            data={fishes}
            renderItem={({ item }) => <Fish fish={item}/>}
            keyExtractor={(item) => item.name}/>
          )}
      </View>
    </View>
  )
}

export default FishListScreen