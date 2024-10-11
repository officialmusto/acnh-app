import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    marginVertical: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
    alignSelf: 'center',
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  infoText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 3,
  },
});

export default styles