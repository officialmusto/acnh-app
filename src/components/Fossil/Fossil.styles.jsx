import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  mainFossilName: {
    borderWidth: 2,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  fossilPart: {
    borderWidth: 2,
  },
  partName: {
    borderWidth: 2,
    fontSize: 16,
    fontWeight: '500',
    color: '#555',
  },
  image: {
    borderWidth: 2,
    width: 100,
    height: 100,
  },
})

export default styles