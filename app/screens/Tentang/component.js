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
              <Text style={Style.title}>Hajiku</Text>
              <Text style={Style.desc}>Hajiku adalah aplikasi pembelajaran Haji Dan Umrah</Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/ganar.gatul/')}>
                <Card
                  icon1={<Image source={IMAGES.rz} resizeMode="contain" style={Style.nana} />}
                  title="Samudra Gawang"
                  divisi="Front End Developer"
                  instagram="@ganar.gatul"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/rafiudd_/')}>
                <Card
                  icon1={<Image source={IMAGES.rz} resizeMode="contain" style={Style.nana} />}
                  title="Rayhan Rafiud"
                  divisi="Backend Developer"
                  instagram="@rasadasf"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/najib.ja_/')}>
                <Card
                  icon1={<Image source={IMAGES.rz} resizeMode="contain" style={Style.nana} />}
                  title="Najib Jamil Abdurrahman"
                  divisi="UI/UX Designer"
                  instagram="@najib.ja_"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/luthfikaaa__/')}>
                <Card
                  icon1={<Image source={IMAGES.rz} resizeMode="contain" style={Style.nana} />}
                  title="Luthfika Anggit"
                  divisi="UI/UX Designer"
                  instagram="@luthfikaaa__"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/syaifulanw_/')}>
                <Card
                  icon1={<Image source={IMAGES.rz} resizeMode="contain" style={Style.nana} />}
                  title="Syaiful Anwar"
                  divisi="UI/UX Designer"
                  instagram="@luthfikaaa__"
                />
              </TouchableOpacity>
            </View>
            <Text style={Style.cp}>© 2020. Hajiku - All Right Reserved</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
