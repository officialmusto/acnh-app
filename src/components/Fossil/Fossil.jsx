import { Text, View, Image } from 'react-native'
import styles from '../Fossil/Fossil.styles'
import React from 'react'

const Fossil = ({ fossil }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainFossilName}>{fossil.name}</Text>

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
  )
}

export default Fossil

