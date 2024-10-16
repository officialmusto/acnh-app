import React from 'react'
import { SafeAreaView, View, Text, Image, Modal, TouchableOpacity } from 'react-native'
import styles from './VillagerModal.styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import Foundation from '@expo/vector-icons/Foundation'
import Ionicons from '@expo/vector-icons/Ionicons'

const VillagerModal = ({ villager, visible, onClose }) => (
  <Modal visible={visible} animationType="slide" transparent={true} onRequestClose={onClose}>
    <SafeAreaView style={styles.modalOverlay}>
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>{villager.name}'s Details.</Text>
        <Image source={{ uri: villager.nh_details.image_url }} style={styles.modalImage} resizeMode="contain" />

        <View style={styles.descText}>
          <Text style={styles.modalTitle}>"{villager.nh_details.quote}"</Text>
        </View>

        <View style={styles.iconSection}>

          <View style={styles.iconTextRow}>
            <Icon name='birthday-cake' size={15.575} color={`#${villager.title_color}`} />
            <Text style={styles.infoText}>{villager.birthday_month} {villager.birthday_day}</Text>
          </View>

          <View style={styles.iconTextRow}>
            <Icon name="comment" size={16.5} color={`#${villager.title_color}`} />
            <Text style={styles.infoText}>"{villager.phrase}"</Text>
          </View>

          <View style={styles.iconTextRow}>
            <Foundation name="music" size={19} color={`#${villager.title_color}`} />
            <Text style={styles.infoText}>{villager.nh_details.house_music}</Text>
          </View>

          <View style={styles.iconTextRow}>
            <Ionicons name="color-palette" size={19} color={`#${villager.title_color}`} />
            <Text style={styles.infoText}>{villager.nh_details.fav_colors}</Text>
          </View>

          <View style={styles.iconTextRow}>
            <FontAwesome6 name="person-rays" size={17.7} color={`#${villager.title_color}`} />
            <Text style={styles.infoText}>{villager.personality}</Text>
          </View>

          <View style={styles.iconTextRow}>
            <AntDesign name="star" size={17} color={`#${villager.title_color}`} />
            <Text style={styles.infoText}>{villager.nh_details.hobby}</Text>
          </View>


        </View>

        <Image source={{ uri: villager.nh_details.house_exterior_url }} style={styles.villagerHome} resizeMode="contain" />

        <TouchableOpacity style={styles.btn} onPress={onClose}>
          <Text style={[styles.btn, { color: `#${villager.title_color}` }]}>Close</Text>
        </TouchableOpacity>

        
      </View>
    </SafeAreaView>
  </Modal>
)

export default VillagerModal