import React from 'react';
import { View, TextInput, Text, Keyboard } from 'react-native';
import PropTypes from 'prop-types';
import _ from 'lodash';
import styles, { TYPES } from './styles';
import { noop } from '../../../../utils';

export default class Component extends React.Component {
  state = {
    array: [],
    input: '',
    errorMessageTemp: '',
    focus2: false
  };

  componentDidMount() {
    const { length } = this.props;
    this._setArray(length);
  }

  componentWillReceiveProps(nextProps) {
    const value = _.get(nextProps, 'value', '');
    this.setState({ value });
  }

  _onChangeText = text => {
    const { onChangeText } = this.props;
    this.setState({ value: text, errorMessageTemp: '' });
    onChangeText(text);
  };

  _setArray = length => {
    const { array } = this.state;
    for (let index = 0; index < length; index += 1) {
      array.push(index);
      this.setState({ [`value${index}`]: '' });
    }
    this.setState({ array });
  };

  _changePIN = index => async text => {
    const { length, onChangeText } = this.props;
    let inpuTemp = '';
    await this.setState({ indexTemp: index, [`value${index}`]: text, errorMessageTemp: '' });
    for (let i = 0; i < length; i += 1) {
      inpuTemp += this.state[`value${i}`];
    }
    await this.setState({ input: inpuTemp });
    if (text.length === 1 && index < length - 1) {
      await this[`textInput${(index + 1).toString()}`].focus();
    }
    if (this.state.input.length === length) {
      await Keyboard.dismiss();
    }
    await onChangeText(this.state.input);
  };

  _onKeyPress = index => async e => {
    const { onChangeText, length } = this.props;
    const { input } = this.state;
    let inpuTemp = '';
    if (e.nativeEvent.key === 'Backspace') {
      if (this.state[`value${index}`].length > 0) {
        await this.setState({ input: input.slice(0, index) });
        await this.setState({ [`value${index}`]: '' });
      } else if (index !== 0 && this.state[`value${index}`].length === 0) {
        await this.setState({ [`value${index - 1}`]: '' });
        for (let i = 0; i < length; i += 1) {
          inpuTemp += this.state[`value${i}`];
        }
        await this.setState({ input: inpuTemp });
        await this[`textInput${(index - 1).toString()}`].focus();
      }
      await onChangeText(this.state.input);
    }
  };

  render() {
    const { editable, errorMessage, type } = this.props;
    const { errorMessageTemp, array } = this.state;
    const errorMessageTemplate = errorMessage || errorMessageTemp;
    let containerTextInputStyle = styles.containerStyle(type);
    if (errorMessageTemplate) {
      containerTextInputStyle = styles.errorContainerStyle(type);
    } else if (!editable) {
      containerTextInputStyle = styles.disabledContainerStyle(type);
    }
    return (
      <View>
        <View style={styles.containerList}>
          {array.map((item, index) => (
            <View key={index} style={containerTextInputStyle}>
              <TextInput
                ref={ref => {
                  this[`textInput${index}`] = ref;
                }}
                value={this.state[`value${index}`]}
                onChangeText={this._changePIN(index)}
                autoFocus={index === 0}
                maxLength={1}
                style={styles.textInputStyle}
                underlineColorAndroid="transparent"
                onKeyPress={this._onKeyPress(index)}
                editable={editable}
                secureTextEntry
              />
            </View>
          ))}
        </View>
        {<Text style={styles.errTextStyle}>{errorMessageTemplate}</Text>}
      </View>
    );
  }
}

Component.propTypes = {
  onChangeText: PropTypes.func,
  errorMessage: PropTypes.string,
  length: PropTypes.number,
  editable: PropTypes.bool,
  type: PropTypes.oneOf([TYPES.GHOST, TYPES.FILLED])
};

Component.defaultProps = {
  length: 4,
  onChangeText: noop,
  errorMessage: null,
  editable: true,
  type: TYPES.GHOST
};
