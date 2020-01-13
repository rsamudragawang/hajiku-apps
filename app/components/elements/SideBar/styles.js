import { StyleSheet } from 'react-native';

import {
  COLOR_WHITE,
  COLOR_BASE_PRIMARY_MAIN,
  FONT_BODY1_PRIMARY,
  FONT_BODY2_PRIMARY
} from '../../../styles';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    ...FONT_BODY1_PRIMARY,
    paddingHorizontal: 5,
    color: COLOR_WHITE
  },
  label: {
    ...FONT_BODY2_PRIMARY,
    paddingHorizontal: 5,
    color: COLOR_WHITE,
    marginBottom: 5
  },
  card: {
    backgroundColor: COLOR_BASE_PRIMARY_MAIN,
    height: 150,
    paddingLeft: 10,
    paddingBottom: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  }
});
