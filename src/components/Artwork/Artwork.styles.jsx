import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  card: {
    margin: 13,
    paddingLeft: 12,
    backgroundColor: '#faf3ec',
    borderRadius: 29,
    marginVertical: 10,
    shadowColor: '#151615',
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: .149,
    shadowRadius: 2,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row'
  },
  photo: {
    flex: 1,
    width: 100,
    height: 120,
  },
  poster: {
    flex: 1,
    width: 100,
    height: 100,
  },
  text: {
    alignSelf: 'center',
    fontWeight: 'bold',
  }

})

export default styles