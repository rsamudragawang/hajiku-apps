import {
  COLOR_WHITE,
  COLOR_BLACK,
  COLOR_GREY,
  COLOR_GREY_DARK,
  COLOR_EVENT_INACTIVE,
  COLOR_EVENT_ERROR,
  COLOR_TRANSPARENT,
  FONT_SUBTITLE1_PRIMARY,
  FONT_CAPTION_PRIMARY,
  FONT_BODY2_PRIMARY
} from '../../../../styles';

const HEIGHT = 48;
const WIDTH = 340;
export const TYPES = {
  FILLED: 'filled',
  GHOST: 'ghost'
};

const mainContainer = {
  width: WIDTH
};

const container = {
  width: WIDTH,
  height: HEIGHT,
  borderRadius: 6,
  alignContent: 'center',
  justifyContent: 'center',
  overflow: 'hidden'
};

export default {
  mainContainer: {
    ...mainContainer
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
      borderWidth: 1,
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
  containerLabel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 5,
    marginBottom: 7
  },
  textStyle: (type, editable) => {
    const style = {
      ...FONT_SUBTITLE1_PRIMARY,
      color: COLOR_BLACK
    };
    if (!editable && type === TYPES.GHOST) {
      style.color = COLOR_GREY;
    }
    return style;
  },
  textInputStyle: type => {
    const style = {
      ...FONT_SUBTITLE1_PRIMARY,
      color: COLOR_GREY_DARK,
      marginHorizontal: 17
    };
    if (type === TYPES.GHOST) {
      style.color = COLOR_GREY;
    }
    return style;
  },
  textOptional: (type, editable) => {
    const style = {
      ...FONT_BODY2_PRIMARY,
      color: COLOR_BLACK
    };
    if (!editable && type === TYPES.GHOST) {
      style.color = COLOR_GREY;
    }
    return style;
  },
  errTextStyle: {
    ...FONT_CAPTION_PRIMARY,
    color: COLOR_EVENT_ERROR,
    marginTop: 5
  }
};
