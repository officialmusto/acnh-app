import React from 'react'
import { SafeAreaView, View, Text, Image, Modal, TouchableOpacity } from 'react-native'
import styles from './VillagerModal.styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import AntDesign from '@expo/vector-icons/AntDesign'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import Foundation from '@expo/vector-icons/Foundation'
import Ionicons from '@expo/vector-icons/Ionicons'
import Icons from '../../utils/Icons'

const VillagerModal = ({ villager, visible, onClose }) => {
  const villagerSpecie = Icons[villager.species.toLowerCase().replace(/\s+/g, '_')]
  const formatText = (text) => {
    return String(text) // forcibly returning string to properly space-out text.
      .replace(/([a-z])([A-Z])/g, '$1 $2') // utilized regex to add space between camel-case
      .replace(/,(\S)/g, ', $1') // utilized regex to add space after commas
  }

  
  return (
    <Modal visible={visible} animationType="slide" transparent={true} onRequestClose={onClose}>
      <SafeAreaView style={styles.modalOverlay}>
        <View style={[styles.modalContent, { backgroundColor: `#${villager.text_color}` }]}>
        <View style={styles.nameSection}>
        <Image 
        source={villagerSpecie} 
        style={[styles.specieIcon, { tintColor: `#${villager.title_color}` }]} 
        />
          <Text style={[styles.modalTitle, { color: `#${villager.title_color}` }]}>{villager.name}</Text>
        </View>

          <Image source={{ uri: villager.nh_details?.image_url }} 
          style={styles.modalImage} 
          resizeMode="contain" />

          <View style={styles.quoteBox}>
            <Foundation name="quote" size={40.575} color={`#${villager.title_color}`} />
            <Text style={[styles.quoteText, { color: `#${villager.title_color}` }]}>
              {villager.nh_details?.quote || 'No quote available'}
            </Text>
          </View>

          <View style={styles.iconSection}>

          <View style={styles.iconTextRow} backgroundColor={`#${villager.title_color}`}>
            <Icon name='birthday-cake' size={15.575} color={`#${villager.text_color}`} />
            <Text style={[styles.infoText, { color: `#${villager.text_color}` }]}>{villager.birthday_month} {villager.birthday_day}</Text>
          </View>

          <View style={styles.iconTextRow} backgroundColor={`#${villager.title_color}`}>
            <Icon name="comment" size={16.5} color={`#${villager.text_color}`} />
            <Text style={[styles.infoText, { color: `#${villager.text_color}` }]}>"{villager.phrase}"</Text>
          </View>

          <View style={[styles.iconTextRow, { backgroundColor: `#${villager.title_color}` }]}>
            <Foundation name="music" size={19} color={`#${villager.text_color}`} />
            <Text style={[styles.infoText, { color: `#${villager.text_color}` }]}>{villager.nh_details.house_music}</Text>
          </View>

          <View style={styles.iconTextRow} backgroundColor={`#${villager.title_color}`}>
            <Ionicons name="color-palette" size={19} color={`#${villager.text_color}`} />
            <Text style={[styles.infoText, { color: `#${villager.text_color}` }]}>
            {formatText(villager.nh_details?.fav_colors || 'No favorite colors')}
            </Text>
          </View>

          <View style={styles.iconTextRow} backgroundColor={`#${villager.title_color}`}>
            <FontAwesome6 name="person-rays" size={17.7} color={`#${villager.text_color}`} />
            <Text style={[styles.infoText, { color: `#${villager.text_color}` }]}>{villager.personality}</Text>
          </View>

          <View style={styles.iconTextRow} backgroundColor={`#${villager.title_color}`}>
            <AntDesign name="star" size={17} color={`#${villager.text_color}`}  />
            <Text style={[styles.infoText, { color: `#${villager.text_color}` }]}>{villager.nh_details.hobby}</Text>
          </View>

          </View>

          <View>
            <View style={styles.vilHomeSection} backgroundColor={`#${villager.text_color}`}>
              <Text style={[styles.vilHomeText, { color: `#${villager.title_color}` }]}>{villager.name}'s Home</Text>
              <Image 
              source={{ uri: villager.nh_details.house_exterior_url }} 
              style={styles.vilHomeImage}/>
            </View>

          </View>


          <TouchableOpacity style={styles.btn} onPress={onClose}>
            <Text style={[styles.btnText, { color: `#${villager.title_color}` }]}>Close</Text>
          </TouchableOpacity>
          
        </View>
      </SafeAreaView>
    </Modal>
  )
}

export default VillagerModal