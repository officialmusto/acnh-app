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
    width: '60%',
    height: '30%',
  },
  btn: {

    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#3e3c39',
    margin: 15,
    padding: 0,
    paddingLeft: 45,
    paddingRight: 45,
    borderRadius: 50,
  }
})

export default styles