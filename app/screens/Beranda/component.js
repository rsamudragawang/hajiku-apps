import React from 'react';
import { View, ImageBackground, Text, ScrollView, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import IMAGES from '../../configs/images';
import IconHaji from '../../../assets/svgs/IconHaji';
import IconUmroh from '../../../assets/svgs/IconUmroh';
import IconQuiz from '../../../assets/svgs/IconQuiz';
import IconSetting from '../../../assets/svgs/IconSetting';
import { scale } from '../../utils/scaling';
import { ENDPOINT } from '../../configs';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    // this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = {
      jumlahMateri: 8,
      data: []
    };
    // this._showPass = this._showPass.bind(this);
  }
  componentWillMount() {
    this._getData();
  }
  _toDetail = (index, type) => {
    this.props.navigation.navigate('DetailMateri', { index, type });
  };
  _getData = async () => {
    const result = await ENDPOINT.getAll('discover');
    this.setState({ data: result.data });
  };
  _onPress = () => {};
  _toListMateri = type => {
    this.props.navigation.navigate('Materi', { type });
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <ImageBackground style={styles.imageBackground} source={IMAGES.menu}>
            <View style={styles.textContainer}>
              <Text style={styles.textHello}>HALOOOO,</Text>
              <Text style={styles.textName}>Pak Haji</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => this._toListMateri('haji')}>
                <View style={styles.cardHaji}>
                  <View style={{ marginTop: scale(15), marginLeft: scale(15), marginBottom: scale(8) }}>
                    <IconHaji />
                  </View>
                  <View style={{ marginLeft: 15 }}>
                    <Text style={styles.titleCard}>Haji</Text>
                    <Text style={styles.contentCard}>{`${this.state.jumlahMateri}  Materi`}</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this._toListMateri('umrah')}>
                <View style={styles.cardUmroh}>
                  <View style={{ marginTop: scale(15), marginLeft: scale(15), marginBottom: scale(8) }}>
                    <IconUmroh />
                  </View>
                  <View style={{ marginLeft: scale(15) }}>
                    <Text style={styles.titleCard}>Umroh</Text>
                    <Text style={styles.contentCard}>{`${this.state.jumlahMateri}  Materi`}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </ImageBackground>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.cardQuiz}>
              <View style={{ marginTop: scale(15), marginLeft: scale(15), marginBottom: scale(8) }}>
                <IconQuiz />
              </View>
              <View style={{ marginLeft: scale(15) }}>
                <Text style={styles.titleCard}>Quiz</Text>
                <Text style={styles.contentCard}>{`${this.state.jumlahMateri}  Quiz`}</Text>
              </View>
            </View>
            <View style={styles.cardPengaturan}>
              <View style={{ marginTop: scale(15), marginLeft: scale(15), marginBottom: scale(8) }}>
                <IconSetting />
              </View>
              <View style={{ marginLeft: scale(15) }}>
                <Text style={styles.titleCard}>Pengaturan</Text>
                <Text style={styles.contentCard}>Lihat Selengkapnya</Text>
              </View>
            </View>
          </View>
          <Text style={styles.discover}>Discover Quizqoeh</Text>
          {this.state.data.map((data, index) => (
            <View key={index}>
              <TouchableOpacity onPress={() => this._toDetail(data._id, data.tag)}>
                <View style={styles.containerDiscover}>
                  <ImageBackground source={{ uri: data.imageLink }} style={styles.imageDiscover}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                      <Text style={styles.textCard}>{data.title}</Text>
                    </View>
                  </ImageBackground>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
