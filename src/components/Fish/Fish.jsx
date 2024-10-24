import { SafeAreaView, Text, View, Image } from 'react-native'
import styles from '../Fish/Fish.styles'
import React from 'react'

const Fish = ({ fish }) => {
  return (
    <SafeAreaView>
      <View style={styles.card}>
        <Image
        source={{ uri: fish.image_url }}
        style={styles.image}
        resizeMode="contain"
        />
        <Text style={styles.name}>{fish.name}</Text>
        <Text style={styles.price}>{fish.sell_nook} bells</Text>
      </View>
    </SafeAreaView>
  )
}

export default Fish

