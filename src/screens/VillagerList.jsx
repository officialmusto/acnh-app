import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import { getVillagers } from '../apiServices'

import Villager from '../components/Villager'

const VillagerList = (props) => {
const [villagers, setVillagers] = useState({})

useEffect(() => {
  getVillagers()
  .then(villagerData => console.log(villagerData, "does this work"))
})


  return (
    <View styles={styles.list}>
      <Villager />
      <Text>weee</Text>
    </View>
  )
}

export default VillagerList

const styles = StyleSheet.create({
  list: {
    fontWeight: 'bold',
  }
})