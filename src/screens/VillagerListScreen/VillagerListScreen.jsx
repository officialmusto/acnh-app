import { Text, View, FlatList, ActivityIndicator} from 'react-native'
import React, { useState, useEffect } from 'react'
import { getVillagers } from '../../utils/api-calls'
import styles from './VillagerListScreen.styles'
import Villager from '../../components/Villager/Villager'

const VillagerListScreen = () => {
  const [villagers, setVillagers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getVillagers()
      .then(villagerData => {
        setVillagers(villagerData)
        setLoading(false)
      })
      .catch(error => {
        console.error("Error fetching villagers:", error)
        setLoading(false)
      })
  }, [])

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={villagers}
          renderItem={({ item }) => <Villager villager={item}/>}
          keyExtractor={(item) => item.image_url}
          contentContainerStyle={styles.list}
          decelerationRate="fast"
        />
      )}
    </View>
  )
}

export default VillagerListScreen