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
    shadowRadius: 8,
  },
  imageContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row'
  },
  photo: {
    width: 100,
    height: 120,
  },
  poster: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 20,
    color: '#3f3c39',
    alignSelf: 'center',
    fontWeight: 'bold',
    marginVertical: 14,
  }

})

export default styles