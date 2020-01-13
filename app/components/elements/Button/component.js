import React from 'react';
import { TouchableOpacity, TouchableNativeFeedback, Text, View, Platform } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { noop } from '../../../utils';

export default class Component extends React.Component {
  render() {
    const { onPress = noop, disabled, isUpperCase, type, customContainer, customText } = this.props;
    let { title } = this.props;
    let containerStyle = styles.container;
    let textStyle = styles.text;
    let ComponentView = TouchableOpacity;
    if (type.match(/flat-ripple|raised-ripple/) && Platform.OS === 'android') {
      ComponentView = TouchableNativeFeedback;
    }
    if (type.match(/flat|flat-ripple/)) {
      containerStyle = styles.containerFlat;
    }
    if (disabled) {
      containerStyle = styles.containerDisabled;
      textStyle = styles.textDisabled;
    }
    if (isUpperCase) {
      title = title.toUpperCase();
    }
    return (
      <ComponentView disabled={disabled} style={[containerStyle, customContainer]} onPress={onPress}>
        <View style={[containerStyle, customContainer]}>
          <Text style={[textStyle, customText]}>{title}</Text>
        </View>
      </ComponentView>
    );
  }
}

Component.propTypes = {
  disabled: PropTypes.bool,
  isUpperCase: PropTypes.bool,
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  customContainer: PropTypes.object,
  customText: PropTypes.object,
  type: PropTypes.oneOf(['flat', 'flat-ripple', 'raised', 'raised-ripple'])
};

Component.defaultProps = {
  disabled: false,
  isUpperCase: true,
  customContainer: {},
  customText: {},
  type: 'raised'
};
