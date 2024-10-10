import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import { getVillagers } from '../apiServices'

import Villager from '../components/Villager'

const VillagerList = (props) => {
const [villagers, setVillagers] = useState([])

useEffect(() => {
  getVillagers()
  .then(villagerData => setVillagers(villagerData))
})


  return (
    <View styles={styles.list}>
      <Text>Villager List</Text>
      {villagers.map(villager => 
        <Villager key={villager.url} villager={villager}/>
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