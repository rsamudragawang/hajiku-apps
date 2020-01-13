import React from 'react';
import PropTypes from 'prop-types';
import {
  ViewPropTypes,
  View,
  Text,
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
  Easing,
  Keyboard
} from 'react-native';
import styles from './styles';

const TOAST_MAX_WIDTH = 0.8;
const TOAST_ANIMATION_DURATION = 200;

const positions = {
  TOP: 20,
  BOTTOM: -20,
  CENTER: 0
};

const durations = {
  LONG: 3500,
  SHORT: 2000
};

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    const window = Dimensions.get('window');
    this.state = {
      visible: this.props.visible,
      opacity: new Animated.Value(0),
      windowWidth: window.width,
      windowHeight: window.height,
      keyboardScreenY: window.height
    };
  }

  componentWillMount() {
    Dimensions.addEventListener('change', this._windowChanged);
    Keyboard.addListener('keyboardDidChangeFrame', this._keyboardDidChangeFrame);
  }

  componentDidMount = () => {
    if (this.state.visible) {
      this._showTimeout = setTimeout(() => this._show(), this.props.delay);
    }
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.visible !== this.props.visible) {
      if (nextProps.visible) {
        clearTimeout(this._showTimeout);
        clearTimeout(this._hideTimeout);
        this._showTimeout = setTimeout(() => this._show(), this.props.delay);
      } else {
        this._hide();
      }
      this.setState({ visible: nextProps.visible });
    }
  };

  componentWillUpdate() {
    const { windowHeight, keyboardScreenY } = this.state;
    this._keyboardHeight = Math.max(windowHeight - keyboardScreenY, 0);
  }

  // componentWillUnmount = () => {
  //   Dimensions.removeEventListener('change', this._windowChanged);
  //   Keyboard.removeListener('keyboardDidChangeFrame', this._keyboardDidChangeFrame);
  //   this._hide();
  // };

  _animating = false;
  _root = null;
  _hideTimeout = null;
  _showTimeout = null;
  _keyboardHeight = 0;

  _windowChanged = ({ window }) => {
    this.setState({
      windowWidth: window.width,
      windowHeight: window.height
    });
  };

  _keyboardDidChangeFrame = ({ endCoordinates }) => {
    this.setState({ keyboardScreenY: endCoordinates.screenY });
  };

  _show = () => {
    clearTimeout(this._showTimeout);
    if (!this._animating) {
      clearTimeout(this._hideTimeout);
      this._animating = true;
      // this._root.setNativeProps({
      //   pointerEvents: 'auto'
      // });
      Animated.timing(this.state.opacity, {
        toValue: this.props.opacity,
        duration: this.props.animation ? TOAST_ANIMATION_DURATION : 0,
        easing: Easing.out(Easing.ease)
      }).start(({ finished }) => {
        if (finished) {
          this._animating = !finished;
          if (this.props.duration > 0) {
            this._hideTimeout = setTimeout(() => this._hide(), this.props.duration);
          }
        }
      });
    }
  };

  _hide = () => {
    clearTimeout(this._showTimeout);
    clearTimeout(this._hideTimeout);
    if (!this._animating) {
      // this._root.setNativeProps({
      //   pointerEvents: 'none'
      // });
      Animated.timing(this.state.opacity, {
        toValue: 0,
        duration: this.props.animation ? TOAST_ANIMATION_DURATION : 0,
        easing: Easing.in(Easing.ease)
      }).start(({ finished }) => {
        if (finished) {
          this._animating = false;
        }
      });
    }
  };

  render() {
    const { props } = this;
    const { visible, windowWidth, opacity } = this.state;
    const { hideOnPress, containerStyle, textStyle, errorBody = {}, children } = this.props;
    const { errorHeader = '', message = '' } = errorBody;
    const offset = props.position;
    const position = offset
      ? { [offset < 0 ? 'bottom' : 'top']: offset < 0 ? this._keyboardHeight - offset : offset }
      : {
          top: 0,
          bottom: this._keyboardHeight
        };

    return visible || this._animating ? (
      <View style={[styles.defaultStyle, position]} pointerEvents="box-none">
        <TouchableWithoutFeedback onPress={hideOnPress ? this._hide : null}>
          <Animated.View
            style={[
              styles.containerStyle,
              styles.shadowStyle,
              { marginHorizontal: windowWidth * ((1 - TOAST_MAX_WIDTH) / 2), opacity },
              containerStyle
            ]}
            pointerEvents="none"
            ref={ele => {
              this._root = ele;
            }}
          >
            {!children && <Text style={[styles.textStyle, textStyle]}>{errorHeader}</Text>}
            {!children && <Text style={[styles.textStyle, textStyle]}>{message}</Text>}
            {children}
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    ) : null;
  }
}

Component.propTypes = {
  ...ViewPropTypes,
  containerStyle: ViewPropTypes.style,
  duration: PropTypes.number,
  visible: PropTypes.bool,
  position: PropTypes.number,
  animation: PropTypes.bool,
  opacity: PropTypes.number,
  textStyle: Text.propTypes.style,
  delay: PropTypes.number,
  hideOnPress: PropTypes.bool
};

Component.defaultProps = {
  containerStyle: {},
  textStyle: {},
  visible: false,
  duration: durations.SHORT,
  animation: true,
  position: positions.BOTTOM,
  opacity: 0.8,
  delay: 0,
  hideOnPress: true
};
