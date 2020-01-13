import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { COLOR_WHITE } from '../../../styles';
import I18n from '../../../i18n';

export default class Component extends React.Component {
  render() {
    const { customStyles } = this.props;
    const containerStyles = [customStyles, styles.container];

    return (
      <View style={containerStyles}>
        <View style={styles.containerView}>
          <ActivityIndicator color={COLOR_WHITE} size="large" />
          <Text style={styles.text}>{I18n.t('loading')}</Text>
        </View>
      </View>
    );
  }
}

Component.propTypes = {
  customStyles: PropTypes.object
};

Component.defaultProps = {
  customStyles: {}
};
