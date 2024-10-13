import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  card: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#CABAC8',
    borderRadius: 14,
    padding: 20,
    paddingRight: 4,
    paddingLeft: 4,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    textShadowColor: "white",
    textShadowOffset: { width: .5, height: .5 },
    textShadowRadius: 3,
  },
  infoSection: {
    margin: 20,
    backgroundColor: '#baa8b7',
    borderRadius: 8,
    padding: 10,
    marginRight: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '60%',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  iconTextRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff3ff',
  },
})

export default styles