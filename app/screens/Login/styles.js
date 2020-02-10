/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
// import { COLOR_BASE_PRIMARY_MAIN } from '../../styles';
import { scale } from '../../utils/scaling';
import { COLOR_WHITE, COLOR_BASE_PRIMARY_MAIN, FONT_BODY2_PRIMARY } from '../../styles';

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: scale(20),
    paddingVertical: scale(10),
    backgroundColor: COLOR_BASE_PRIMARY_MAIN
  },
  container: {
    flex: 1,
    backgroundColor: COLOR_WHITE,
    paddingHorizontal: scale(15)
  },
  hiasan: {
    width: scale(141),
    height: scale(203)
  },
  inputText: {
    width: '100%',
    height: scale(50),
    borderRadius: scale(5),
    borderColor: '#c4c4c4',

    borderWidth: scale(1)
  },
  input: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: scale(45),
    fontFamily: 'Montserrat-Light'
  },
  inputLogo: { width: scale(20), height: scale(20), position: 'absolute', margin: scale(15) },
  title: {
    color: '#29291e',
    fontSize: 30,
    marginTop: scale(60),
    fontFamily: 'Montserrat-Bold'
  },
  text: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    marginTop: scale(20),
    marginBottom: scale(10)
  },
  top20: {
    marginTop: scale(20)
  },
  top10: {
    marginBottom: scale(10)
  }
});

export default styles;
