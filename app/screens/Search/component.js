import React from 'react';
import { View } from 'react-native';
import MainScreen from '../../components/layouts/MainScreen';
import Header from '../../components/elements/Header';
import Button from '../../components/elements/Button';
import Search from '../../../assets/svgs/Search';
import styles from './styles';

export default class Component extends React.Component {
  _onPress = () => {};

  render() {
    return (
      <MainScreen style={styles.container}>
        <Header title="Search" setting back />
        <View style={styles.container}>
          <Button title="title" disabled={false} onPress={this._onPress} type="raised-ripple" />
          <Search />
        </View>
      </MainScreen>
    );
  }
}
