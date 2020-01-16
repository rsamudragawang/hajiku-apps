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
        console.log(params);
        const result = await ENDPOINT.login(params);
        console.log(result);

        if (result.code === 200) {
          console.log('bener');
          Alert.alert(JSON.stringify(result.code), 'Succses');
          this.props.navigation.navigate('Beranda');
        } else {
          ToastAndroid.show('Failed to Register', ToastAndroid.SHORT);
          console.log('salah');
        }
      } catch (error) {
        ToastAndroid.show('error.networkError', ToastAndroid.SHORT);
        console.log(error);
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
        <Button
          onPress={this._onPress}
          title="Masuk"
          customContainer={{
            backgroundColor: '#FF5151',
            borderRadius: 5,
            width: scale(300),
            height: 50,
            marginBottom: 10,
            marginLeft: 15
          }}
          customText={{ color: '#fff', letterSpacing: 300 }}
        />
        <View style={{ flexDirection: 'row', marginLeft: 15 }}>
          <Text>Belum punya akun? </Text>
          <TouchableOpacity onPress={this._toRegister}>
            <Text style={{ color: '#FF5151' }}> Daftar Sekarang </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
