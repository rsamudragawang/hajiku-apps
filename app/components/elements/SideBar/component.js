import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

export default class Component extends React.Component {
  _renderCard = () => (
    <View style={styles.card}>
      <Text style={styles.title}>component</Text>
      <Text style={styles.label}>SideBar</Text>
    </View>
  );

  render() {
    return <View style={styles.container}>{this._renderCard()}</View>;
  }
}
