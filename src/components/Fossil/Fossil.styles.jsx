import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  card: {
    padding: 12,
    margin: 10,
    backgroundColor: '#faf3ec',
    borderRadius: 14,
    marginVertical: 10,
    shadowColor: '#151615',
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: 0.149,
    shadowRadius: 8,
  },
  mainFossilName: {
    alignSelf: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3f3c39',
  },
  fossilPartSection: {
    marginTop: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    shadowColor: '#151615',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.37,
    shadowRadius: 4,
  },
  fossilPart: {
    padding: 12,
    alignItems: 'center',
    backgroundColor: '#e7d0c0',
    margin: 5,
    borderRadius: 22,
    flex: 1,
    minWidth: '30%',
  },
  partName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  image: {
    width: 80,
    height: 80,
  },
})

export default styles