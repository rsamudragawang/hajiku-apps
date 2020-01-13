import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import HumbergerMenu from '../../../../assets/svgs/HumbergerMenu';

export default class Component extends React.Component {
  _onPress = () => {
    this.props.navigation.navigate('DrawerOpen');
  };

  render() {
    return (
      <TouchableOpacity onPress={this._onPress} style={styles.container}>
        <HumbergerMenu />
      </TouchableOpacity>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
