/* eslint-disable react-native/no-color-literals */
/* eslint-disable react/no-unused-state */
import React from 'react';
import { View, TextInput, Text, TouchableOpacity, ToastAndroid, Alert, ScrollView } from 'react-native';
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
        const result = await ENDPOINT.register(params);

        if (result.code === 200) {
          Alert.alert(JSON.stringify(result.code), 'Succses');
          this.props.navigation.navigate('Login');
        } else {
          ToastAndroid.show('Failed to Register', ToastAndroid.SHORT);
        }
      } catch (error) {
        ToastAndroid.show('error.networkError', ToastAndroid.SHORT);
      }
    }
  };
  _toLogin = () => {
    this.props.navigation.navigate('Login');
  };
  render() {
    return (
      <ScrollView>
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
          <View style={{ marginTop: scale(45) }} />
          <Button
            onPress={this._onPress}
            title="Daftar"
            customContainer={{
              backgroundColor: '#FF5151',
              width: '100%',
              height: 50
            }}
            customText={{ color: '#fff', fontFamily: 'Montserrat-Bold' }}
          />
          <View style={{ flexDirection: 'row', marginTop: scale(20), marginBottom: scale(50) }}>
            <Text style={{ fontSize: scale(12), fontFamily: 'Montserrat-Regular' }}>Sudah punya akun? </Text>
            <TouchableOpacity onPress={this._toLogin}>
              <Text style={{ color: '#FF5151', fontSize: scale(12), fontFamily: 'Montserrat-SemiBold' }}>
                {' '}
                Masuk Sekarang{' '}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
