import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  card: {

    borderRadius: 31,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#faf3ec',
    shadowColor: '#151615',
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: .149,
    shadowRadius: 8,
    margin: 10,
    padding: 20,
  },
  image: {
    margin: 7,
    width: 50,
    height: 50,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
  }
})

export default styles