import React, { useState, useEffect } from 'react'
import { View, FlatList, Text, ActivityIndicator } from 'react-native'
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
    <View style={{ flex: 1 }}>
      <View style={styles.cardList}>
        <View style={styles.container}>
          {loading ? (
            <ActivityIndicator size="large" color="#F3E0C0" />
          ) : (
            <FlatList
              data={villagers}
              renderItem={({ item }) => <Villager villager={item} />}
              keyExtractor={(item) => item.image_url}
              contentContainerStyle={styles.list}
            />
          )}
        </View>
      </View>
    </View>
  )
}

export default VillagerListScreen