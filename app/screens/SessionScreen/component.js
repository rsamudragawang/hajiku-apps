/* eslint-disable import/first */
/* eslint-disable no-console */
import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import storage from '../../utils/storage';
import STORAGE_KEY from '../../constants/storageKey';
import PropTypes from 'prop-types';

export default class Component extends React.Component {
  componentDidMount() {
    this.CheckAuth();
  }

  CheckAuth = async () => {
    const auth = await storage.get(STORAGE_KEY.TOKEN_LOGIN);
    if (JSON.stringify(auth) !== JSON.stringify({})) {
      // this.props.navigation.navigate('Menu', { category: 'Drink' });
      this.props.navigation.navigate('Beranda');
    } else {
      this.props.navigation.navigate('OnBoarding');
    }
  };

  render() {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
