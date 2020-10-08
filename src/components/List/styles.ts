import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    paddingRight: 7,
    paddingLeft: 7,
    flex: 1,
  },
  filterContainer: {
  },
  input: {
    marginBottom: 10,
    marginTop: 10,
    height: 50,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#A0A0A0',
    //textAlign: 'left',
    justifyContent: 'center'
  },
  header: {
    backgroundColor: '#E0E0E0',
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5,
  },
  listItemContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    width: '100%',
    paddingTop: 8,
    paddingBottom: 8,
  },
  lastnameContainer: {
    width: '30%',
    paddingLeft: 10,
  },
  lastname: {
    fontWeight: 'bold',
  },
  positionContainer: {
    width: '20%',
    paddingLeft: 10,
  },
  clubContainer: {
    width: '30%',
  },
  quotationContainer: {
    width: '20%',
  },
  quotation: {
    textAlign: 'center',
  }
});
