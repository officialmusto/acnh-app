import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, Modal, Button } from 'react-native'
import * as s from './Villager.styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'

const Villager = ({ villager }) => {
  const [modalVisible, setModalVisible] = useState(false)

  if (!villager.nh_details || !villager.nh_details.icon_url) {
    return null
  }

  return (
    <>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View style={s.styles.card}>

          <View style={s.styles.imageBackground}>
            <Image
              source={{ uri: villager.nh_details.icon_url }}
              style={s.styles.image}
            />
          </View>

          <View style={s.styles.textContainer}>
            <Text style={s.styles.name}>{villager.name}</Text>

            <View style={s.styles.infoSection}>
              <View style={s.styles.iconTextRow}>
                <Icon name='birthday-cake' size={10.575} color={`#${villager.title_color}`} />
                <Text style={s.styles.infoText}>
                  {villager.birthday_month} {villager.birthday_day}
                </Text>
              </View>

              <View style={s.styles.iconTextRow}>
                <Icon name="comment" size={11} color={`#${villager.title_color}`} />
                <Text style={s.styles.infoText}>"{villager.phrase}"</Text>
              </View>

              <View style={s.styles.iconTextRow}>
                <FontAwesome6 name="person-rays" size={12.7} color={`#${villager.title_color}`} />
                <Text style={s.styles.infoText}>"{villager.personality}"</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <SafeAreaView style={s.modalStyles.modalOverlay}>
          <View style={s.modalStyles.modalContent}>
            <Text style={s.modalStyles.modalTitle}>{villager.name}'s Details</Text>
            <Image 
            source={{ uri: villager.nh_details.image_url }} 
            style={s.modalStyles.modalImage} 
            resizeMode="contain"
            />

            <Text style={s.modalStyles.modalText}>Birthday: {villager.birthday_month} {villager.birthday_day}</Text>
            <Text style={s.modalStyles.modalText}>Phrase: "{villager.phrase}"</Text>
            <Text style={s.modalStyles.modalText}>Personality: {villager.personality}</Text>

            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </SafeAreaView>
      </Modal>
    </>
  )
}

export default Villager


