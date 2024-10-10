import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Villager = () => {
  console.log("test");
  return (
    <View style={styles.container}>
      <Text >Villager</Text>
    </View>
  )
}

export default Villager

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(135, 176, 240)', 
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
});