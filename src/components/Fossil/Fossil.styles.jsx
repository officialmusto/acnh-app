import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  card: {
    padding: 12,
    margin: 10,
    backgroundColor: '#faf3ec',
    borderRadius: 29,
    marginVertical: 10,
    shadowColor: '#151615',
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: .149,
    shadowRadius: 8,
  },
  mainFossilName: {
    alignSelf: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  fossilPart: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#e7d0c0',
    flex: 1,
    margin: 5,
    borderRadius: 22,
  },
  fossilPartSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    shadowColor: '#151615',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: .149,
    shadowRadius: 6,
  },
  partName: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#555',
  },
  image: {
    width: 50,
    height: 50,
  },
})

export default styles