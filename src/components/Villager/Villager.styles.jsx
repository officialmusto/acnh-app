import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  card: {
    margin: 13,
    paddingLeft: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#faf3ec',
    borderRadius: 29,
    marginVertical: 10,
    shadowColor: '#151615',
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: .149,
    shadowRadius: 2,
  },
  image: {
    borderRadius: 1,
    width: 50,
    height: 50,
  },
    imageBackground: {
      backgroundColor: '#e7d0c0',
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
    color: '#3f3c39',
    fontWeight: 'bold',
    textShadowColor: "white",
    textShadowOffset: { width: .5, height: .5 },
    textShadowRadius: 3,
  },
  infoSection: {
    margin: 10,
    padding: 0,
    marginRight: 10,
    flexDirection: 'column',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  iconTextRow: {
    margin: 3,
    backgroundColor: "#3f3c39",
    borderRadius: 32,
    padding: 8,
    paddingLeft: 10,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    paddingLeft: 10,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#faf3ec',
  },
})

export default styles