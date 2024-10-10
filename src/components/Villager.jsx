import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Villager = () => {
  return (
    <View style={styles.card}>
      <Text>Villager</Text>
    </View>
  );
};

export default Villager;

const styles = StyleSheet.create({
  card: {
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
    alignItems: 'center',
  },
  villagerName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});