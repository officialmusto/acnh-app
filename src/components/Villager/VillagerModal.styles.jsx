import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000088',
    height: '100%'
  },
  modalContent: {
    alignItems: 'center',
    width: '100%',
    height: '116%',
    padding: 20,
    backgroundColor: '#3f3c39',
    borderRadius: 20,
  },
  modalTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 60,
  },
  modalImage: {
    width: 150,
    height: 140,
    marginBottom: 20,
  },
  iconSection: {
    borderRadius: 20,
    margin: 13,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  iconTextRow: {
    margin: 6,
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
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  quoteBox: {
    justifyContent: 'center',
    alignItems: 'center', 
    padding: 10,
    borderRadius: 16,

  },
  quoteText: {
    color: '#e9e9e9',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    padding: 10,
    margin: 7,
    marginBottom: -5,
    marginTop: -10,
    fontSize: 17,
    fontWeight: 'bold',
  },
  descBox: {
    padding: 20,   
    margin: 13,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#514d49',
    borderRadius: 16,
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.37,
    shadowRadius: 8,
  },
  vilHomeSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    height: '22%',
    borderRadius: 24,
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.37,
    shadowRadius: 8,
  },
  vilHomeText: {
    fontWeight: 'bold',
    fontSize: 25,
    margin: 20,
  },
  vilHomeImage: {
    flex: 1,
    shadowColor: '#151615',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.37,
    shadowRadius: 3,
    width: '60%',
    height: '100%',
    margin: 20,
    

  },
  btn: {
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 0,
  },
  btnText: {
    color: '#e9e9e9',
    fontSize: 27,
    fontWeight: 'bold',
    marginTop: 20,
  }
})

export default styles