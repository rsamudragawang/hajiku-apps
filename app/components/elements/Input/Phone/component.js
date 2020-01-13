import React from 'react';
import { View, TextInput, Text } from 'react-native';
import PropTypes from 'prop-types';
import _ from 'lodash';
import styles, { TYPES } from './styles';
import I18n from '../../../../i18n';
import { COLOR_GREY_DARK, COLOR_GREY, COLOR_TRANSPARENT } from '../../../../styles';
import { noop } from '../../../../utils';

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
    const { placeholder, editable, errorMessage, maxLength, prefix, type } = this.props;
    const { value, errorMessageTemp } = this.state;
    const errorMessageTemplate = errorMessage || errorMessageTemp;
    let containerTextInputStyle = styles.containerStyle(type);
    let countryStyle = styles.containerCountry(type);
    if (errorMessageTemplate) {
      containerTextInputStyle = styles.errorContainerStyle(type);
      countryStyle = styles.errorContainerCountry(type);
    } else if (!editable) {
      containerTextInputStyle = styles.disabledContainerStyle(type);
      countryStyle = styles.disabledContainerCountry(type);
    }
    return (
      <View style={styles.mainContainer}>
        <View style={styles.containerCombine}>
          <View>
            <Text style={styles.textLabel(type, editable)}>{I18n.t('country')}</Text>
            <View style={countryStyle}>
              <Text style={styles.prefixStyle(type, editable)}>{prefix}</Text>
            </View>
          </View>
          <View>
            <Text style={styles.textLabel(type, editable)}>{I18n.t('phoneNumber')}</Text>
            <View style={containerTextInputStyle}>
              <TextInput
                style={styles.textInputStyle(type)}
                onBlur={this.handleBlur}
                value={value}
                onChangeText={this._onChangeText}
                placeholder={placeholder}
                placeholderTextColor={type === TYPES.GHOST && !editable ? COLOR_GREY : COLOR_GREY_DARK}
                editable={editable}
                maxLength={maxLength}
                underlineColorAndroid={COLOR_TRANSPARENT}
                {...this.props}
              />
            </View>
          </View>
        </View>
        {<Text style={styles.errTextStyle}>{errorMessageTemplate}</Text>}
      </View>
    );
  }
}

Component.propTypes = {
  onChangeText: PropTypes.func,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  editable: PropTypes.bool,
  errorMessage: PropTypes.string,
  onValidation: PropTypes.func,
  optional: PropTypes.string,
  prefix: PropTypes.string,
  type: PropTypes.oneOf([TYPES.GHOST, TYPES.FILLED])
};

Component.defaultProps = {
  onChangeText: noop,
  placeholder: 'Type anything here…',
  label: 'Field Title',
  editable: false,
  errorMessage: null,
  onValidation: noop,
  optional: '',
  prefix: '+62',
  type: TYPES.GHOST
};
