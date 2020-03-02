/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-color-literals */
/* eslint-disable react/no-unused-state */
import React from 'react';
import { View, TextInput, Text, TouchableOpacity, ToastAndroid, Alert } from 'react-native';
import PropTypes from 'prop-types';
import Button from '../../components/elements/Button';
import Account from '../../../assets/svgs/Account';
import styles from './styles';
import Locked from '../../../assets/svgs/Locked';
import I18n from '../../i18n';
import { scale } from '../../utils/scaling';
import { ENDPOINT } from '../../configs';
import { STORAGE_KEY } from '../../constants';
import storage from '../../utils/storage';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    // this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = {
      email: '',
      password: '',
      hidden: true
    };
    // this._showPass = this._showPass.bind(this);
  }
  _onPress = async () => {
    const { email, password } = this.state;
    const params = { email, password };
    if (email === '' && password === '') {
      Alert.alert('Isi SEMUA WOI!');
    } else {
      try {
        const result = await ENDPOINT.login(params);
        ToastAndroid.show('Please Wait', ToastAndroid.SHORT);
        if (result.code === 200) {
          await storage.set(STORAGE_KEY.TOKEN_LOGIN, result.token);
          await storage.set(STORAGE_KEY.EMAIL, result.data.email);
          await storage.set(STORAGE_KEY.NAME, result.data.fullname);
          console.log(STORAGE_KEY.TOKEN_LOGIN);
          // Alert.alert(JSON.stringify(result.code), 'Succses');
          this.props.navigation.navigate('Beranda');
        } else {
          ToastAndroid.show('Failed to Login', ToastAndroid.SHORT);
        }
      } catch (error) {
        ToastAndroid.show('error.networkError', ToastAndroid.SHORT);
      }
    }
  };
  _toRegister = () => {
    this.props.navigation.navigate('Register');
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{I18n.t('login')}</Text>
        <View style={{ marginTop: 30 }} />
        <Text style={styles.text}>{I18n.t('email')}</Text>
        <View style={styles.inputText}>
          <View style={styles.inputLogo}>
            <Account />
          </View>
          <TextInput
            style={styles.input}
            textContentType="emailAddress"
            underlineColorAndroid="transparent"
            placeholder={I18n.t('email')}
            editable
            autoCapitalize="none"
            onChangeText={email => this.setState({ email })}
          />
        </View>
        <Text style={styles.text}>{I18n.t('password')}</Text>
        <View style={styles.inputText}>
          <View style={styles.inputLogo}>
            <Locked />
          </View>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            secureTextEntry={this.state.hidden}
            placeholder={I18n.t('password')}
            editable
            autoCapitalize="none"
            onChangeText={password => this.setState({ password })}
          />
        </View>
        <View style={{ marginTop: scale(45) }} />
        <Button
          onPress={this._onPress}
          title="Masuk"
          customContainer={{
            backgroundColor: '#FF5151',
            width: '100%',
            height: 50
          }}
          customText={{ color: '#fff', fontFamily: 'Montserrat-Bold' }}
        />
        <View style={{ flexDirection: 'row', marginTop: scale(20) }}>
          <Text style={{ fontSize: scale(12), fontFamily: 'Montserrat-Regular' }}>Belum punya akun? </Text>
          <TouchableOpacity onPress={this._toRegister}>
            <Text style={{ color: '#FF5151', fontSize: scale(12), fontFamily: 'Montserrat-SemiBold' }}>
              {' '}
              Daftar Sekarang{' '}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
