import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 7,
    flex: 1,
    width: '100%',
  },
  basicInfoContainer: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingTop: 20,
    paddingBottom: 20,
  },
  mainStatsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingTop: 20,
    paddingBottom: 5,
  },
  mainStatContainer: {
    width: '50%',
    alignItems: 'center',
    paddingBottom: 15,
  },
  mainStatField: {
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  subStatsContainer: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10
  },
  subStatContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 7,
    paddingBottom: 3,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0'
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  position: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  club: {
    fontWeight: 'bold',
  },
});
