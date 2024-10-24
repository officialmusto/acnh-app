import React, { useState } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import styles from './Fossil.styles'

const Fossil = ({ fossil }) => {
  const [expanded, setExpanded] = useState(false)

  const toggleExpand = () => setExpanded(!expanded)

  return (
    <TouchableOpacity style={styles.card} onPress={toggleExpand}>
      <Text style={styles.mainFossilName}>{fossil.name}</Text>

      {expanded && (
        <View style={styles.fossilPartSection}>
          {fossil.fossils.map((part) => (
            <View key={part.name} style={styles.fossilPart}>
              <Text style={styles.partName}>{part.name}</Text>
              <Text style={styles.price}>{part.sell} bells</Text>
              <Image
                source={{ uri: part.image_url }}
                style={styles.image}
                resizeMode="contain"
              />
            </View>
          ))}
        </View>
      )}
    </TouchableOpacity>
  )
}

export default Fossil