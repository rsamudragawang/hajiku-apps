import {
  COLOR_WHITE,
  COLOR_GREY,
  COLOR_GREY_DARK,
  COLOR_EVENT_INACTIVE,
  COLOR_TRANSPARENT,
  FONT_SUBTITLE1_PRIMARY,
  FONT_CAPTION_PRIMARY,
  COLOR_EVENT_ERROR
} from '../../../../styles';

const HEIGHT = 48;
const WIDTH = 50;
export const TYPES = {
  FILLED: 'filled',
  GHOST: 'ghost'
};

const container = {
  width: WIDTH,
  height: HEIGHT,
  borderRadius: 6,
  alignContent: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  marginHorizontal: 5
};

export default {
  containerList: {
    flexDirection: 'row'
  },
  containerStyle: type => {
    let style = {
      ...container,
      borderWidth: 1,
      borderColor: COLOR_GREY_DARK,
      backgroundColor: COLOR_WHITE
    };
    if (type === TYPES.GHOST) {
      style = {
        ...container,
        borderBottomWidth: 1,
        borderBottomColor: COLOR_GREY_DARK,
        backgroundColor: COLOR_TRANSPARENT
      };
    }
    return style;
  },
  disabledContainerStyle: type => {
    let style = {
      ...container,
      borderColor: COLOR_GREY_DARK,
      backgroundColor: COLOR_EVENT_INACTIVE
    };
    if (type === TYPES.GHOST) {
      style = {
        ...container,
        borderBottomWidth: 1,
        borderBottomColor: COLOR_GREY,
        backgroundColor: COLOR_TRANSPARENT
      };
    }
    return style;
  },
  errorContainerStyle: type => {
    let style = {
      ...container,
      borderWidth: 1,
      borderColor: COLOR_EVENT_ERROR,
      backgroundColor: COLOR_WHITE
    };
    if (type === TYPES.GHOST) {
      style = {
        ...container,
        borderBottomWidth: 1,
        borderBottomColor: COLOR_EVENT_ERROR,
        backgroundColor: COLOR_TRANSPARENT
      };
    }
    return style;
  },
  textInputStyle: {
    ...FONT_SUBTITLE1_PRIMARY,
    color: COLOR_GREY_DARK,
    textAlign: 'center',
    alignSelf: 'center'
  },
  errTextStyle: {
    ...FONT_CAPTION_PRIMARY,
    color: COLOR_EVENT_ERROR,
    marginTop: 5,
    marginHorizontal: 5
  }
};
