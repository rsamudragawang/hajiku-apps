import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Linking, ScrollView } from 'react-native';
import Style from './styles';
import Card from '../../components/Card';
import Header from '../../components/elements/Header';
import IMAGES from '../../configs/images';

export default class Lala extends Component {
  render() {
    return (
      <View style={Style.mainScreen}>
        <Header ContainerStyle={Style.lala} title="Upload Photo" setting back />
        <ScrollView>
          <View style={Style.container}>
            <View style={Style.card}>
              <Text style={Style.title}>Quiztod</Text>
              <Text style={Style.desc}>Quiztod adalah aplikasi pembelajaran seni budaya di bidang Batik</Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/didikurniawan18/')}>
                <Card
                  icon1={<Image source={IMAGES.rz} resizeMode="contain" style={Style.nana} />}
                  title="Rayhan Rafiud"
                  divisi="UI/UX Designer"
                  instagram="@rasadasf"
                />
              </TouchableOpacity>
            </View>
            <Text style={Style.cp}>© 2020. Quiztod - All Right Reserved</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
