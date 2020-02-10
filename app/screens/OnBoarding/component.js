/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import IMAGES from '../../configs/images';
import styles from './styles';
import Logo from '../../../assets/svgs/Logo';
import Button from '../../components/elements/Button';

export default class Component extends React.Component {
  _onPress = () => {
    this.props.navigation.navigate('App');
  };
  _toRegister = () => {
    this.props.navigation.navigate('Register');
  };
  _toLogin = () => {
    this.props.navigation.navigate('Login');
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#F9FAFB' }}>
        <View style={{ alignItems: 'flex-end' }}>
          <Image source={IMAGES.hiasan} style={styles.hiasan} />
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Logo />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            paddingBottom: 24,
            height: 150
          }}
        >
          <Button
            onPress={this._toRegister}
            title="Mulai Sekarang"
            customContainer={{
              backgroundColor: '#FF5151',
              // backgroundColor: '#FFF',
              width: 328,
              height: 50
            }}
            customText={{ color: '#fff', fontFamily: 'Montserrat-SemiBold', fontSize: 14 }}
          />
          <View style={{ marginTop: 10 }} />
          <Button
            onPress={this._toLogin}
            title="Masuk"
            customContainer={{
              backgroundColor: '#FFF',
              width: 328,
              height: 50,
              borderWidth: 1,
              borderColor: '#c4c4c4'
            }}
            customText={{ color: '#000', fontFamily: 'Montserrat-SemiBold', fontSize: 14 }}
          />
        </View>
      </View>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
