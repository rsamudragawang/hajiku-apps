import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notification: {
        notifCount: 1
      }
    };
  }

  _renderBadge = () => {
    const { badge, isLabel } = this.props;
    const { notification } = this.state;
    const { notifCount } = notification;
    const marginTop = isLabel ? 0 : 5;
    if (notifCount < 1 || badge === 'none') {
      return null;
    }
    if (badge === 'number') {
      return (
        <View style={[styles.IconBadgeNumber, { marginTop }]}>
          <Text style={styles.text}>{notifCount}</Text>
        </View>
      );
    }
    return <View style={[styles.IconBadgeStandard, { marginTop }]} />;
  };

  render() {
    const { icon, isActive, isLabel, label } = this.props;
    const activeStyle = isActive ? styles.active : styles.inactive;
    const textStyle = isActive ? styles.activeText : styles.text;
    const marginTop = isLabel ? 0 : 5;
    return (
      <View style={[styles.container, activeStyle]}>
        <View style={[styles.mainView, { marginTop }]}>{icon}</View>
        {isLabel && <Text style={textStyle}>{label}</Text>}
        {this._renderBadge()}
      </View>
    );
  }
}

Component.propTypes = {
  icon: PropTypes.element,
  badge: PropTypes.oneOf(['standard', 'number', 'none']),
  isActive: PropTypes.bool,
  isLabel: PropTypes.bool,
  label: PropTypes.string
};

Component.defaultProps = {
  icon: null,
  badge: 'none',
  isActive: false,
  isLabel: true,
  label: ''
};
