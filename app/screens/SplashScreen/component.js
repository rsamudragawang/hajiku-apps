import React from 'react';
import { View, Image, StatusBar } from 'react-native';

import styles from './styles';
import IMAGES from '../../configs/images';
// eslint-disable-next-line import/first
import PropTypes from 'prop-types';

export default class Component extends React.Component {
  async componentDidMount() {
    const data = await this.performTimeConsumingTask();

    StatusBar.setHidden(true);

    if (data !== null) {
      this.props.navigation.navigate('OnBoarding');
    }
  }

  performTimeConsumingTask = async () =>
    new Promise(resolve =>
      setTimeout(() => {
        resolve('result');
      }, 2000)
    );
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.logoContainer}>
          <Image source={IMAGES.logo} resizeMode="contain" style={styles.logo} />
        </View>
      </View>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
