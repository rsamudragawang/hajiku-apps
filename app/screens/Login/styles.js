/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
// import { COLOR_BASE_PRIMARY_MAIN } from '../../styles';
import { scale } from '../../utils/scaling';
import { COLOR_WHITE, COLOR_BASE_PRIMARY_MAIN, FONT_BODY2_PRIMARY } from '../../styles';

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: COLOR_BASE_PRIMARY_MAIN
  },
  container: {
    flex: 1,
    backgroundColor: COLOR_WHITE
  },
  hiasan: {
    width: 141,
    height: 203
  },
  inputText: {
    margin: scale(15),
    width: scale(300),
    height: scale(40),
    borderRadius: scale(5),
    borderColor: '#c4c4c4',

    borderWidth: scale(1)
  },
  input: { marginLeft: scale(30), ...FONT_BODY2_PRIMARY },
  inputLogo: { width: scale(20), height: scale(20), position: 'absolute', margin: scale(8) },
  title: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 30,
    marginLeft: scale(15),
    marginTop: scale(60)
  },
  text: {
    marginLeft: scale(15)
    // fontSize: 20
  }
});

export default styles;
