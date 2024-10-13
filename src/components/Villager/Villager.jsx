import { StyleSheet, Text, View, Image } from 'react-native'
import styles from './Villager.styles'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const Villager = ({ villager }) => {
  if (!villager.nh_details || !villager.nh_details.icon_url) {
    return null
  }  return (
    <View style={styles.card}>
      <Image
        source={{ uri: villager.nh_details.icon_url }}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.textContainer}>

        <Text style={[styles.name, { color: `#${villager.title_color}`}]}>{villager.name}</Text>
        <View style={styles.infoSection}>
          <View style={styles.iconTextRow}>
            <Icon name="birthday-cake" size={13.575} color={`#${villager.title_color}`}/>
            <Text style={styles.infoText}>
              {villager.birthday_month} {villager.birthday_day}
            </Text>
          </View>

          <View style={styles.iconTextRow}>
            <Icon name="comment" size={14} color={`#${villager.title_color}`} />
            <Text style={styles.infoText}>"{villager.phrase}"</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Villager

//! WHY DOESN'T SCROLL WHEEL SEPARATE FROM VILLAGER-CARDS!!