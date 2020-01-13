import { StyleSheet } from 'react-native';
import {
  COLOR_WHITE,
  COLOR_BASE_PRIMARY_LIGHT,
  COLOR_FONT_PRIMARY_LIGHT,
  COLOR_FONT_SECONDARY_LIGHT,
  COLOR_BASE_SECONDARY_LIGHT
} from '../../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    height: 60
  },
  active: {
    borderBottomWidth: 2,
    borderBottomColor: COLOR_BASE_PRIMARY_LIGHT
  },
  inactive: {},
  icon: {},
  IconBadgeStandard: {
    position: 'absolute',
    top: 2,
    right: 2,
    width: 14,
    height: 14,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR_BASE_SECONDARY_LIGHT
  },
  IconBadgeNumber: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 18,
    height: 18,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR_BASE_SECONDARY_LIGHT
  },
  mainView: {
    height: 40,
    width: 40,
    backgroundColor: COLOR_WHITE,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: COLOR_FONT_PRIMARY_LIGHT,
    fontSize: 10,
    alignSelf: 'center'
  },
  activeText: {
    color: COLOR_FONT_SECONDARY_LIGHT,
    fontSize: 10,
    alignSelf: 'center'
  }
});
