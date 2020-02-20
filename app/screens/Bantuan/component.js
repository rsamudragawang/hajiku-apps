import React from 'react';
import { View, Text } from 'react-native';
import MainScreen from '../../components/layouts/MainScreen';
import Header from '../../components/elements/Header';
import styles from './styles';

export default class Component extends React.Component {
  _onPress = () => {};

  _toBantuan = () => {
    this.props.navigation.navigate('Bantuan');
  };

  render() {
    return (
      <MainScreen style={styles.MainScreen}>
        <Header ContainerStyle={styles.lala} title="Upload Photo" setting back />
        <View style={styles.container}>
          <View>
            <Text style={styles.h1}>Bantuan</Text>
          </View>
          <Text style={styles.email}>Silahkan email ke hello@quizkoeh.com untuk keluh kesah anda</Text>
        </View>
      </MainScreen>
    );
  }
}
