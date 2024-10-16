import { StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  card: {
    margin: 13,
    paddingLeft: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 29,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 6, 
    backgroundColor: 'transparent',
  },
  image: {
    borderRadius: 1,
    width: 50,
    height: 50,
  },
  imageBackground: {
    alignContent: 'center',
    padding: 14,
    borderRadius: 100,
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#44413d'
  },
  infoSection: {
    margin: 10,
    padding: 0,
    marginRight: 10,
    flexDirection: 'column',
  },
  iconTextRow: {
    margin: 3,
    backgroundColor: '#3f3c39',
    borderRadius: 32,
    padding: 8,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    paddingLeft: 10,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#e9e9e9',
  },
})

export default styles