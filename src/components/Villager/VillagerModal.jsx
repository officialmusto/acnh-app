import React from 'react'
import { SafeAreaView, View, Text, Image, Modal, Button } from 'react-native'
import styles from './VillagerModal.styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'

const VillagerModal = ({ villager, visible, onClose }) => (
  <Modal visible={visible} animationType="slide" transparent={true} onRequestClose={onClose}>
    <SafeAreaView style={styles.modalOverlay}>
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>{villager.name}'s Details.</Text>
        <Image source={{ uri: villager.nh_details.image_url }} style={styles.modalImage} resizeMode="contain" />

        <View style={styles.iconSection}>

          <View style={styles.iconTextRow}>
            <Icon name='birthday-cake' size={17.575} color={`#${villager.title_color}`} />
            <Text style={styles.infoText}>{villager.birthday_month} {villager.birthday_day}</Text>
          </View>

          <View style={styles.iconTextRow}>
            <Icon name="comment" size={17} color={`#${villager.title_color}`} />
            <Text style={styles.infoText}>"{villager.phrase}"</Text>
          </View>

          <View style={styles.iconTextRow}>
            <FontAwesome6 name="person-rays" size={19.7} color={`#${villager.title_color}`} />
            <Text style={styles.infoText}>"{villager.personality}"</Text>
          </View>

        </View>

        <Button title="Close" onPress={onClose} />
      </View>
    </SafeAreaView>
  </Modal>
)

export default VillagerModal