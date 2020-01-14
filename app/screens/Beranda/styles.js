/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import { COLOR_WHITE } from '../../styles';
import Metrics from '../../constants/metrics';
import { scale } from '../../utils/scaling';

const styles = StyleSheet.create({
  cardHaji: {
    marginLeft: scale(15),
    marginTop: scale(30),
    backgroundColor: '#FF6060',
    height: scale(100),
    width: scale(156)
  },
  cardUmroh: {
    marginLeft: scale(15),
    marginTop: scale(30),
    backgroundColor: '#FFC275',
    height: scale(100),
    width: scale(156)
  },
  cardQuiz: {
    marginLeft: scale(15),
    marginTop: scale(30),
    backgroundColor: '#A292FF',
    height: scale(100),
    width: scale(156)
  },
  cardPengaturan: {
    marginLeft: scale(15),
    marginTop: scale(30),
    backgroundColor: '#5D7DFF',
    height: scale(100),
    width: scale(156)
  },
  container: {
    flex: 1,
    backgroundColor: COLOR_WHITE
  },
  containerDiscover: {
    marginLeft: scale(15),
    marginTop: scale(15)
  },
  imageBackground: {
    width: Metrics.screenWidth,
    height: scale(215)
  },
  titleCard: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold'
  },
  contentCard: {
    color: '#FFF',
    fontSize: 12,
    marginTop: scale(5)
  },
  discover: {
    marginTop: scale(24),
    marginLeft: scale(15),
    fontSize: 20,
    fontWeight: 'bold'
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
  textContainer: {
    marginLeft: scale(15),
    marginTop: scale(32)
  },
  textHello: {
    color: '#FFF',
    fontSize: 32
  },
  textName: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: 'bold'
  }
});

export default styles;
