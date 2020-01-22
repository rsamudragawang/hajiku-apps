import React from 'react';
import { View, Text, Image } from 'react-native';
import Header from '../../components/elements/Header';
import styles from './styles';

export default class Component extends React.Component {
  _onPress = () => {};

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Text style={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: 32, marginLeft: 15 }}>Haji</Text>
        <Image
          style={{ width: 328, height: 120, marginLeft: 15 }}
          source={{ uri: 'https://i.ibb.co/TBLJWhk/haji.jpg' }}
        />
        <Text style={{ textAlign: 'justify', marginLeft: 15, marginTop: 24 }}>
          Menurut bahasa (etimologi) Haji adalah pergi ke Baitullah (Kakbah) untuk melaksanakan ibadah yang
          telah ditetapkan atau ditentukan Allah swt. Secara istilah (terminologi) adalah pergi beribadah ke
          tanah suci (Mekah), melakukan tawaf, sa’i, dan wukuf di Padang Arafah serta melaksanakan semua
          ketentuan-ketentuan haji di bulan Zulhijah.
        </Text>
        <Text style={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: 32, marginLeft: 15 }}>Video</Text>
      </View>
    );
  }
}
