import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000088',
  },
  modalContent: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    padding: 20,
    backgroundColor: '#faf3ec',
    borderRadius: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalImage: {
    width: 100,
    height: 170,
  },
  iconSection: {
    margin: 13,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  iconTextRow: {
    margin: 6,
    backgroundColor: '#3f3c39',
    borderRadius: 32,
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 14,
    paddingRight: 14,
    flexDirection: 'row',
    alignItems: 'center',
    width: '45%',
    shadowColor: '#151615',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.37,
    shadowRadius: 8,
  },
  infoText: {
    paddingLeft: 10,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#faf3ec',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  descText: {
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  villagerHome: {
    margin: 10,
    width: '60%',
    height: '20%',
    shadowColor: '#151615',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.37,
    shadowRadius: 3,
  },
  btn: {
    padding: 10,
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c7c7c7',
    marginBottom: 0,
    margin: 7,
    borderRadius: 50,
    shadowColor: '#151615',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.37,
    shadowRadius: 8,
  },
  btnText: {
    fontSize: 15,
    fontWeight: 'bold',
  }
})

export default styles