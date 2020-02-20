import { StyleSheet } from 'react-native';
import { COLOR_WHITE } from '../../styles';

const styles = StyleSheet.create({
    mainScreen:{
        backgroundColor: '#F7F7F7',
    },
  container: {
    paddingHorizontal: 16,
  },
  h1: {
      marginTop: 24,
      color: '#29291E',
      fontSize: 32,
      fontFamily: 'Montserrat-Bold',
  },
  lala:{
    // backgroundColor: 'r',
  },
  profil:{
    marginBottom: 16,
    marginTop: 24,
    paddingHorizontal: 25,
    paddingVertical: 15,
    backgroundColor: COLOR_WHITE,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#EBEBEB',
  },
  card:{
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 24,
    paddingHorizontal: 25,
    paddingVertical: 15,
    backgroundColor: COLOR_WHITE,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#EBEBEB',
  },
  desc:{
    marginTop: 4,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    color: '#C4C4C4',
  },
  wrapper:{
    marginLeft: 15,
  },
  name:{
      fontFamily: 'Montserrat-Bold',
      fontSize: 14,
  },
  email:{
      marginTop: 4,
      fontFamily: 'Montserrat-Light',
      fontSize: 12,
      color: '#C4C4C4',
  }
});

export default styles;
