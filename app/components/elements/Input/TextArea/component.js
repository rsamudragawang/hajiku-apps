import React from 'react';
import { View, TextInput, Text } from 'react-native';
import _ from 'lodash';
import PropTypes from 'prop-types';
import styles, { TYPES } from './styles';
import { COLOR_GREY_DARK, COLOR_GREY, COLOR_TRANSPARENT } from '../../../../styles';

export default class Component extends React.Component {
  state = {
    errorMessageTemp: ''
  };

  componentWillReceiveProps(nextProps) {
    const value = _.get(nextProps, 'value', '');
    this.setState({ value });
  }

  handleBlur = async () => {
    const { onValidation } = this.props;
    const { value } = this.state;
    if (typeof onValidation === 'function') {
      const errorMessageTemp = await onValidation(value);
      await this.setState({ errorMessageTemp });
    }
  };

  _onChangeText = text => {
    const { onChangeText } = this.props;
    this.setState({ value: text, errorMessageTemp: '' });
    onChangeText(text);
  };

  render() {
    const { placeholder, label, onChangeText, editable, errorMessage, maxLength, type } = this.props;
    const { value, errorMessageTemp } = this.state;
    const errorMessageTemplate = errorMessage || errorMessageTemp;
    let containerTextInputStyle = styles.containerStyle(type);
    if (errorMessageTemplate) {
      containerTextInputStyle = styles.errorContainerStyle(type);
    } else if (!editable) {
      containerTextInputStyle = styles.disabledContainerStyle(type);
    }
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.textStyle(type, editable)}>{label}</Text>
        <View style={containerTextInputStyle}>
          <TextInput
            value={value}
            style={styles.textInputStyle(type)}
            underlineColorAndroid={COLOR_TRANSPARENT}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={type === TYPES.GHOST && !editable ? COLOR_GREY : COLOR_GREY_DARK}
            multiline
            maxLength={maxLength}
            editable={editable}
            {...this.props}
          />
        </View>
        {<Text style={styles.errTextStyle}>{errorMessage}</Text>}
      </View>
    );
  }
}

Component.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  editable: PropTypes.bool,
  type: PropTypes.oneOf([TYPES.GHOST, TYPES.FILLED])
};

Component.defaultProps = {
  placeholder: 'Type anything here…',
  label: 'Field Title',
  errorMessage: null,
  editable: false,
  type: TYPES.GHOST
};
