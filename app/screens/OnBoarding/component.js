import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Search from '../../components/elements/Input/TextArea';

export default class Component extends React.Component {
  _onPress = () => {
    this.props.navigation.navigate('App');
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* <Button title="title" disabled={false} onPress={this._onPress} type="raised-ripple" /> */}
        <Search />
      </View>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
