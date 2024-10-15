import React from 'react'
import { SafeAreaView, View, Text, Image, Modal, Button } from 'react-native'
import styles from './VillagerModal.styles'

const VillagerModal = ({ villager, visible, onClose }) => (
  <Modal visible={visible} animationType="slide" transparent={true} onRequestClose={onClose}>
    <SafeAreaView style={styles.modalOverlay}>
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>{villager.name}'s Details</Text>
        <Image source={{ uri: villager.nh_details.image_url }} style={styles.modalImage} resizeMode="contain" />
        <Text style={styles.modalText}>Birthday: {villager.birthday_month} {villager.birthday_day}</Text>
        <Text style={styles.modalText}>Phrase: "{villager.phrase}"</Text>
        <Text style={styles.modalText}>Personality: {villager.personality}</Text>
        <Button title="Close" onPress={onClose} />
      </View>
    </SafeAreaView>
  </Modal>
)

export default VillagerModal