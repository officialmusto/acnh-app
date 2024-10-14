import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  card: {
    margin: 20,
    paddingLeft: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#CABAC8',
    borderRadius: 29,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: 0.07,
    shadowRadius: 2,
  },
  image: {
    width: 90,
    height: 90,
    marginLeft: 0,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 30,
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
    borderWidth: 2,
    borderColor: "#e1e1e1",
    margin: 3,
    backgroundColor: "#3a3a3a",
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
    color: '#fff3ff',
  },
})

export default styles