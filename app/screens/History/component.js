import React from 'react';
import { View } from 'react-native';
import MainScreen from '../../components/layouts/MainScreen';
import Header from '../../components/elements/Header';
import Button from '../../components/elements/Button';
import Love from '../../../assets/svgs/Love';
import styles from './styles';

export default class Component extends React.Component {
  _onPress = () => {};

  render() {
    return (
      <MainScreen style={styles.container}>
        <Header title="History" setting back />
        <View style={styles.container}>
          <Button title="title" disabled={false} onPress={this._onPress} type="raised-ripple" />
          <Love />
        </View>
      </MainScreen>
    );
  }
}
