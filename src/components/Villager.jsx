import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const Villager = ({ villager }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{villager.name}</Text>
      <Image
        source={{ uri: villager.image_url }}
        style={styles.image}
        resizeMode="contain"  // Ensure the image scales while keeping the aspect ratio
      />
      <Text>"{villager.phrase}"</Text>
      <Text>Quote: "{villager.quote}"</Text>
      <Text>Birthday: {villager.birthday_month}</Text>
    </View>
  );
};

export default Villager;

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    marginVertical: 10,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  image: {
    width: '35%',          // Width will take up 80% of the card's width
    height: undefined,      // Height will automatically adjust to maintain aspect ratio
    aspectRatio: 1,         // Set the aspect ratio for the image
    marginVertical: 10,
  },
});