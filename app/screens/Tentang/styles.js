import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  mainScreen: {
    backgroundColor: '#F7F7F7',
    flex: 1
  },
  container: {
    paddingHorizontal: 20,
    marginVertical: 30,
    position: 'relative'
  },
  card: {
    backgroundColor: 'white',
    paddingVertical: 33,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20
  },
  nana: {
    width: 40,
    height: 40
  },
  title: {
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
    color: '#29291E'
  },
  desc: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: '#696868',
    lineHeight: 20
  },
  cp: {
    color: '#8E8E8E',
    fontSize: 12,
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 100,
    fontFamily: 'Montserrat-Regular'
  }
});
