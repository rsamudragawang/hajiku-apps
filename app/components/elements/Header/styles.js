import { StyleSheet, Platform } from 'react-native';
import { COLOR_WHITE, FONT_HEADLINE6_PRIMARY, COLOR_BASE_PRIMARY_MAIN } from '../../../styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLOR_BASE_PRIMARY_MAIN,
    height: Platform.OS === 'ios' ? 44 : 56
  },
  centerContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  leftRightContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    ...FONT_HEADLINE6_PRIMARY,
    color: COLOR_WHITE
  }
});
