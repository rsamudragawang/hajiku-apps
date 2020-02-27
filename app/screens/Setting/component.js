import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MainScreen from '../../components/layouts/MainScreen';
import Header from '../../components/elements/Header';
import styles from './styles';
import Bantuan from '../../../assets/svgs/Bantuan';
import Tentang from '../../../assets/svgs/Tentang';
import Button from '../../components/elements/Button';
import storage from '../../utils/storage';
import { STORAGE_KEY } from '../../constants';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    // this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = {
      email: 8,
      name: 'name'
    };
    // this._showPass = this._showPass.bind(this);
  }
  componentWillMount() {
    this._getData();
  }
  _onPress = async () => {
    await storage.remove(STORAGE_KEY.TOKEN_LOGIN);
    this.props.navigation.navigate('SessionScreen');
  };

  _toBantuan = () => {
    this.props.navigation.navigate('Bantuan');
  };
  _getData = async () => {
    const name = await storage.get(STORAGE_KEY.NAME);
    const email = await storage.get(STORAGE_KEY.EMAIL);

    this.setState({ email, name });
  };

  _toTentang = () => {
    this.props.navigation.navigate('Tentang');
  };

  render() {
    return (
      <MainScreen style={styles.MainScreen}>
        <Header title="Upload Photo" setting back />
        <View style={styles.container}>
          <View>
            <Text style={styles.h1}>Pengaturan</Text>
          </View>
          <View style={styles.profil}>
            <Text style={styles.name}>{this.state.name}</Text>
            <Text style={styles.email}>{this.state.email}</Text>
          </View>
          <TouchableOpacity onPress={this._toBantuan}>
            <View style={styles.card}>
              <Bantuan />
              <View style={styles.wrapper}>
                <Text style={styles.name}>Bantuan</Text>
                <Text style={styles.desc}>Kunjungi Pusat Bantuan</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._toTentang}>
            <View style={styles.card}>
              <Tentang />
              <View style={styles.wrapper}>
                <Text style={styles.name}>Tentang Aplikasi</Text>
                <Text style={styles.desc}>Lihat Aplikasi Kita</Text>
              </View>
            </View>
          </TouchableOpacity>
          <Button
            onPress={this._onPress}
            title="Logout"
            customContainer={{
              backgroundColor: '#FF5151',
              width: '100%',
              height: 50
            }}
            customText={{ color: '#fff', fontFamily: 'Montserrat-Bold' }}
          />
        </View>
      </MainScreen>
    );
  }
}
