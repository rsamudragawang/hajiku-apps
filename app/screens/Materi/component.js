import React from 'react';
import { View, Text, Image, ImageBackground, ScrollView } from 'react-native';
import Header from '../../components/elements/Header';
import styles from './styles';
import IMAGES from '../../configs/images';

export default class Component extends React.Component {
  _onPress = () => {};

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View
          style={{
            flex: 1,
            position: 'absolute',
            alignItems: 'flex-end',
            marginLeft: '100%'
          }}
        >
          <Image source={IMAGES.hiasan} style={{ width: 141, height: 203 }} />
        </View>
        <ScrollView>
          <Text style={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: 32, marginLeft: 15 }}>Haji</Text>
          <View style={styles.containerDiscover}>
            <ImageBackground source={IMAGES.haji} style={styles.imageDiscover}>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.textCard}>HAJI</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.containerDiscover}>
            <ImageBackground source={IMAGES.haji} style={styles.imageDiscover}>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.textCard}>HAJI</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.containerDiscover}>
            <ImageBackground source={IMAGES.haji} style={styles.imageDiscover}>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.textCard}>HAJI</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.containerDiscover}>
            <ImageBackground source={IMAGES.haji} style={styles.imageDiscover}>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.textCard}>HAJI</Text>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
      </View>
    );
  }
}
