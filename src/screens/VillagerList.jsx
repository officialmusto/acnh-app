import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import { getVillagers } from '../apiServices'

import Villager from '../components/Villager'

const VillagerList = (props) => {
const [villagers, setVillagers] = useState([])

useEffect(() => {
  getVillagers().then(villagerData => {
    setVillagers(villagerData)
  }).catch(error => {
    console.error("Error fetching villagers:", error)
  })
}, [])

return (
  <View style={styles.container}>
    {villagers.length > 0 ? (
      <FlatList
        data={villagers}
        renderItem={({ item }) => <Villager villager={item} />}  // Pass each villager to Villager component
        keyExtractor={(item) => item.image_url}  // Assuming each villager has a unique 'id'
        contentContainerStyle={styles.list}
      />
    ) : (
      <Text>Loading Villagers...</Text>
    )}
  </View>
)
}

export default VillagerList

const styles = StyleSheet.create({
  list: {
    fontWeight: 'bold',
  }
})