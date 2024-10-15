import { Text, View, Image } from 'react-native'
import styles from '../Fossil/Fossil.styles'
import React from 'react'

const Fossil = ({ fossil }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.mainFossilName}>{fossil.name}</Text>

    <View style={styles.fossilPartSection}>
      {fossil.fossils.map((part) => (
        <View key={part.name} style={styles.fossilPart}>
          <Text style={styles.partName}>{part.name}</Text>
          <Image
            source={{ uri: part.image_url }}
            style={styles.image}
            resizeMode="contain"
          />
          
        </View>
      ))}
      </View>
    </View>
  )
}

export default Fossil

