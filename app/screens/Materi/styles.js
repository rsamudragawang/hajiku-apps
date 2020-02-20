/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { COLOR_WHITE } from '../../styles';
import { scale } from '../../utils/scaling';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_WHITE
  },
  containerDiscover: {
    borderRadius: 4,
    marginLeft: scale(15),
    marginTop: scale(16)
  },
  textCard: {
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    color: '#FFF'
  },
  imageDiscover: {
    overflow: 'hidden',
    borderRadius: 4,
    width: scale(328),
    height: scale(120)
  }
});

export default styles;
