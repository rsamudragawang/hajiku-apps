import { StyleSheet } from 'react-native';
import METRICS from '../../../constants/metrics';
import { COLOR_TRANSPARENT, COLOR_GREY, COLOR_ONBOARDING_HEADER } from '../../../styles';
import { scale } from '../../../utils/scaling';

const styles = StyleSheet.create({
  fullScreen: {
    width: METRICS.screenWidth,
    height: METRICS.screenHeight
  },
  container: {
    backgroundColor: COLOR_TRANSPARENT,
    position: 'relative'
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
    color: COLOR_ONBOARDING_HEADER,
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
    backgroundColor: COLOR_TRANSPARENT,
    flexDirection: 'column',
    position: 'absolute',
    bottom: scale(0),
    flex: 1,
    left: scale(245),
    paddingVertical: scale(37),
    justifyContent: 'flex-end'
  }
});

export default styles;
