import { Text, View, Image } from 'react-native'
import styles from './Villager.styles'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

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
        <View>
          <View style={styles.infoRow}>
            <Icon name="birthday-cake" size={13.575} color="#900" />
            <Text style={styles.infoText}> {villager.birthday_month} {villager.birthday_day}</Text>
          </View>
        </View>
        <View style={styles.infoRow}>
          <Icon name="comment" size={14} color="#000" />
          <Text style={styles.infoText}>"{villager.phrase}"</Text>
        </View>
      </View>
    </View>
  )
}

export default Villager