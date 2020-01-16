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
import Email from '../../../assets/svgs/Email';
import { ENDPOINT } from '../../configs';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    // this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = {
      fullname: '',
      username: '',
      email: '',
      password: '',
      hidden: true
    };
    // this._showPass = this._showPass.bind(this);
  }
  _onPress = async () => {
    const { fullname, username, email, password } = this.state;
    const params = { fullname, username, email, password };
    if (fullname === '' && username === '' && email === '' && password === '') {
      Alert.alert('Isi SEMUA WOI!');
    } else {
      try {
        console.log(params);
        const result = await ENDPOINT.register(params);
        console.log(result);

        if (result.code === 200) {
          console.log('bener');
          Alert.alert(JSON.stringify(result.code), 'Succses');
          this.props.navigation.navigate('Login');
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
  _toLogin = () => {
    this.props.navigation.navigate('Login');
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{I18n.t('register')}</Text>
        <Text style={styles.text}>{I18n.t('fullName')}</Text>
        <View style={styles.inputText}>
          <View style={styles.inputLogo}>
            <Account />
          </View>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder={I18n.t('fullName')}
            editable
            autoCapitalize="none"
            onChangeText={fullname => this.setState({ fullname })}
          />
        </View>
        <Text style={styles.text}>{I18n.t('nickName')}</Text>
        <View style={styles.inputText}>
          <View style={styles.inputLogo}>
            <Account />
          </View>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder={I18n.t('nickName')}
            editable
            autoCapitalize="none"
            onChangeText={username => this.setState({ username })}
          />
        </View>
        <Text style={styles.text}>{I18n.t('email')}</Text>
        <View style={styles.inputText}>
          <View style={styles.inputLogo}>
            <Email />
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
          title="Daftar"
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
          <Text>Sudah punya akun? </Text>
          <TouchableOpacity onPress={this._toLogin}>
            <Text style={{ color: '#FF5151' }}> Masuk Sekarang </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
