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
              <Text style={Style.title}>QuizQoeh</Text>
              <Text style={Style.desc}>QuizQoeh adalah aplikasi pembelajaran Haji Dan Umrah</Text>
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
              <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/ganar.gatul/')}>
                <Card
                  icon1={<Image source={IMAGES.rz} resizeMode="contain" style={Style.nana} />}
                  title="Ramadhani Samudra Gawang"
                  divisi="Front End Developer"
                  instagram="@ganar.gatul"
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
