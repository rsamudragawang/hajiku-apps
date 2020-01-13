import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import BackButton from '../BackButton';
import BurgerButton from '../BurgerButton';
import Setting from '../../../../assets/svgs/Setting';

export default class Component extends React.Component {
  _renderLeft = () => {
    const { burger, back, leftComponent, leftContainerStyle } = this.props;
    let LeftComponent = <View />;
    if (burger) {
      LeftComponent = <BurgerButton />;
    } else if (back) {
      LeftComponent = <BackButton />;
    } else if (leftComponent) {
      LeftComponent = leftComponent;
    }
    return <View style={[styles.leftRightContainer, leftContainerStyle]}>{LeftComponent}</View>;
  };

  _renderCenter = () => {
    const { title, centerComponent, centerContainerStyle } = this.props;
    return (
      <View style={[styles.centerContainer, centerContainerStyle]}>
        {title ? this._renderTitle(title) : centerComponent}
      </View>
    );
  };

  _renderTitle = title => <Text style={styles.title}>{title}</Text>;

  _renderRight = () => {
    const { setting, rightComponent, rightContainerStyle } = this.props;
    let RightComponent = <View />;
    if (setting) {
      RightComponent = <Setting />;
    } else if (rightComponent) {
      RightComponent = rightComponent;
    }
    return <View style={[styles.leftRightContainer, rightContainerStyle]}>{RightComponent}</View>;
  };

  render() {
    return (
      <View style={styles.container}>
        {this._renderLeft()}
        {this._renderCenter()}
        {this._renderRight()}
      </View>
    );
  }
}

Component.propTypes = {
  title: PropTypes.string,
  leftContainerStyle: PropTypes.object,
  centerContainerStyle: PropTypes.object,
  rightContainerStyle: PropTypes.object,
  leftComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.any]),
  centerComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.any]),
  rightComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.any]),
  burger: PropTypes.bool,
  back: PropTypes.bool,
  setting: PropTypes.bool
};

Component.defaultProps = {
  title: '',
  leftContainerStyle: {},
  centerContainerStyle: {},
  rightContainerStyle: {},
  leftComponent: <View />,
  centerComponent: <View />,
  rightComponent: <View />,
  burger: false,
  back: true,
  setting: false
};
