const styles = {
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    marginVertical: 10,
    width: '100%',
    maxWidth: 600,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
    alignSelf: 'center',
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',  // Align icon and text vertically
  },
  infoText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#555',
    marginLeft: 5,  // Add some space between the icon and the text
  },
}

export default styles