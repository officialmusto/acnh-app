import { Text, View, FlatList, ActivityIndicator, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getVillagers } from '../../utils/api-calls'

// stylesheet:
import styles from './VillagerList.styles'

// components
import Villager from '../../components/Villager/Villager'

const VillagerList = () => {
  const [villagers, setVillagers] = useState([])
  const [loading, setLoading] = useState(true)  // Track API loading state

  useEffect(() => {
    // Fetch villagers and display them while images load in the background
    getVillagers()
      .then(villagerData => {
        setVillagers(villagerData)
        setLoading(false)  // Stop showing spinner after data is fetched
      })
      .catch(error => {
        console.error("Error fetching villagers:", error)
        setLoading(false)  // Stop spinner in case of error
      })
  }, [])

  return (
    <View style={styles.container}>
      {loading ? (
        // Show ActivityIndicator while fetching villagers
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={villagers}
          renderItem={({ item }) => <Villager villager={item} />}  // Pass each villager to Villager component
          keyExtractor={(item) => item.image_url}  // unique 'id' is @image_url
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  )
}

export default VillagerList