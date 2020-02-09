/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import METRICS from '../../../constants/metrics';
import {
  COLOR_TRANSPARENT,
  COLOR_GREY,
  COLOR_ONBOARDING_HEADER,
  COLOR_BASE_PRIMARY_DARK,
  COLOR_BLACK,
  COLOR_BASE_PRIMARY_LIGHT,
  COLOR_WHITE
} from '../../../styles';
import { scale } from '../../../utils/scaling';

const styles = StyleSheet.create({
  fullScreen: {
    width: METRICS.screenWidth,
    height: METRICS.screenHeight
  },
  bottomContainer: {
    width: METRICS.screenWidth,
    height: scale(100),
    backgroundColor: '#F9FAFB'
  },
  container: {
    backgroundColor: COLOR_TRANSPARENT,
    position: 'relative'
  },
  cardWhite: {
    position: 'absolute',
    // width: METRICS.screenWidth,
    // height: scale(100),
    // top: scale(5),
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: COLOR_WHITE
  },
  cardContainer: {
    bottom: 0
  },
  slide: {
    backgroundColor: COLOR_TRANSPARENT
  },
  pagination: {
    position: 'absolute',
    bottom: scale(110),
    left: scale(0),
    right: scale(0),
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: COLOR_TRANSPARENT
  },

  dot: {
    backgroundColor: COLOR_GREY,
    width: scale(8),
    height: scale(8),
    borderRadius: scale(4),
    marginLeft: scale(3),
    marginRight: scale(3),
    marginTop: scale(3),
    marginBottom: scale(3)
  },

  activeDot: {
    backgroundColor: COLOR_ONBOARDING_HEADER
  },

  textFooter: {
    color: COLOR_BLACK,
    fontFamily: 'Montserrat',
    fontSize: 15
  },

  buttonWrapper: {
    backgroundColor: COLOR_TRANSPARENT,
    flexDirection: 'column',
    position: 'absolute',
    bottom: scale(0),
    flex: 1
  },

  buttonNext: {
    backgroundColor: COLOR_TRANSPARENT,
    flexDirection: 'column',
    position: 'absolute',
    bottom: scale(0),
    flex: 1,
    left: scale(275),
    paddingVertical: scale(37),
    justifyContent: 'flex-end'
  },

  buttonStart: {
    backgroundColor: COLOR_BASE_PRIMARY_LIGHT,
    width: 100,
    // flexDirection: 'column',
    position: 'relative',
    marginBottom: scale(50),
    flex: 1,
    // left: scale(300),
    right: 0,
    // justifyContent
    paddingVertical: scale(37)
  }
});

export default styles;
