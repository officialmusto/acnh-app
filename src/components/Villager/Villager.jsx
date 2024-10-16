import React, { useState } from 'react'
import { View, TouchableOpacity, Image, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import VillagerModal from './VillagerModal'
import styles from './Villager.styles'

const Villager = ({ villager }) => {
  const [modalVisible, setModalVisible] = useState(false)

  if (!villager.nh_details || !villager.nh_details.icon_url) {
    return null
  }

  return (
    <>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
      <View style={[styles.card, { backgroundColor: `#${villager.text_color}` }]}>
          <View style={styles.imageBackground}>
            <Image
              source={{ uri: villager.nh_details.icon_url }}
              style={styles.image}
              color={`#${villager.text_color}`}
            />
          </View>

          <View style={styles.textContainer}>
            <Text style={[styles.name, { color: `#${villager.title_color}` }]}>{villager.name}</Text>

            <View style={styles.infoSection}>
              <View style={styles.iconTextRow}>
                <Icon name='birthday-cake' size={10.575} color={`#${villager.title_color}`} />
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
      </TouchableOpacity>

      <VillagerModal
        villager={villager}
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </>
  )
}

export default Villager