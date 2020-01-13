import { StyleSheet } from 'react-native';
import { COLOR_BLACK, COLOR_WHITE } from '../../../styles';

export default StyleSheet.create({
  defaultStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerStyle: {
    padding: 10,
    backgroundColor: COLOR_BLACK,
    opacity: 0.8,
    borderRadius: 5
  },
  shadowStyle: {
    shadowColor: COLOR_BLACK,
    shadowOffset: {
      width: 4,
      height: 4
    },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 10
  },
  textStyle: {
    fontSize: 16,
    color: COLOR_WHITE,
    textAlign: 'center'
  }
});
