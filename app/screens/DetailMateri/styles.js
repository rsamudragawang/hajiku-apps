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
    marginLeft: scale(15),
    marginTop: scale(15)
  },
  imageDiscover: {
    width: scale(328),
    height: scale(120)
  },
  textCard: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF'
  },
  toolbar: {
    marginTop: 30,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5
  }
});

export default styles;
