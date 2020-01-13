import React from 'react';
import { Keyboard } from 'react-native';
import { TabBarBottom } from 'react-navigation';

export default class Component extends React.Component {
  state = { isVisible: true };

  componentDidMount() {
    this.keyboardWillShowSub = Keyboard.addListener('keyboardDidShow', this._keyboardWillShow);
    this.keyboardWillHideSub = Keyboard.addListener('keyboardDidHide', this._keyboardWillHide);
  }

  componentWillUnmount() {
    if (this.keyboardWillShowSub) this.keyboardWillShowSub.remove();
    if (this.keyboardWillHideSub) this.keyboardWillHideSub.remove();
  }

  _keyboardWillShow = () => {
    this.setState({ isVisible: false });
  };

  _keyboardWillHide = () => {
    this.setState({ isVisible: true });
  };

  render() {
    return this.state.isVisible ? <TabBarBottom {...this.props} /> : null;
  }
}
