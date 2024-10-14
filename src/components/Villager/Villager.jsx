import { StyleSheet, Text, View, Image } from 'react-native'
import styles from './Villager.styles'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'

const Villager = ({ villager }) => {
  if (!villager.nh_details || !villager.nh_details.icon_url) {
    return null
  }  return (
    <View style={styles.card}>

      <View style={styles.imageBackground}>
        <Image
          source={{ uri: villager.nh_details.icon_url }}
          style={styles.image}
        />
      </View>

      <View style={styles.textContainer}>

        <Text style={styles.name}>{villager.name}</Text>
        <View style={styles.infoSection}>

          <View style={styles.iconTextRow}>
            <Icon name='birthday-cake' size={10.575} color={`#${villager.title_color}`}/>
            <Text style={styles.infoText}>
              {villager.birthday_month} {villager.birthday_day}
            </Text>
          </View>

          <View style={styles.iconTextRow}>
            <Icon name="comment" size={11} color={`#${villager.title_color}`} />
            <Text style={styles.infoText}>"{villager.phrase}"</Text>
          </View>

          <View style={styles.iconTextRow}>
          <FontAwesome6 name="person-rays" size={12.7} color={`#${villager.title_color}`} />
            <Text style={styles.infoText}>"{villager.personality}"</Text>
          </View>


        </View>
      </View>
    </View>
  )
}

export default Villager