import { StyleSheet } from 'react-native';

import { widthByScreen, heightByScreen } from '../../../utils/dimensions';

import { FONT_BODY1_PRIMARY, COLOR_BLACK_OPACITY50, COLOR_WHITE } from '../../../styles';

const font = {
  ...FONT_BODY1_PRIMARY,
  color: COLOR_WHITE
};

const container = {
  width: widthByScreen(100),
  height: heightByScreen(100)
};

const styles = StyleSheet.create({
  container: {
    ...container,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2
  },
  text: {
    ...font,
    marginLeft: 20
  },
  containerView: {
    backgroundColor: COLOR_BLACK_OPACITY50,
    borderRadius: 5,
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center',
    width: widthByScreen(60)
  }
});

export default styles;
