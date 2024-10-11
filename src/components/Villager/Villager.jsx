import { Text, View, Image } from 'react-native'
import styles from './Villager.styles'
import React from 'react'

const Villager = ({ villager }) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: villager.image_url }}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{villager.name}</Text>
        <Text style={styles.infoText}>Birthday: {`${villager.birthday_month} ${villager.birthday_day}`}</Text>
        <Text style={styles.infoText}>"{villager.phrase}"</Text>
      </View>
    </View>
  )
}

export default Villager