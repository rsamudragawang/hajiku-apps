/* eslint-disable react/no-unused-state */
/* eslint-disable no-return-assign */
/* eslint-disable react-native/no-color-literals */
/* eslint-disable react/sort-comp */
import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import Header from '../../components/elements/Header';
import styles from './styles';
import Button from '../../components/elements/Button';
import { scale } from '../../utils/scaling';
import { ENDPOINT } from '../../configs';

export default class Component extends React.Component {
  videoPlayer;
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0,
      duration: 0,
      isFullScreen: false,
      isLoading: true,
      paused: false,
      video: true,
      title: '',
      desc: '',
      imageLink: 'https://miro.medium.com/max/328/1*R91n_x759FWmHFhIxET9yA.png',
      isReady: false,
      status: '',
      quality: '',
      index: '',
      time: '',
      count: 0,
      soal: [],
      idsoal: ''
    };
  }
  componentWillMount() {
    this._getparams();
  }
  _getparams = async () => {
    const { params } = this.props.navigation.state;
    const getindex = params ? params.index : 'umroh';
    const result = await ENDPOINT.quizById(getindex);
    this.setState({
      idsoal: getindex,
      title: result.data.title,
      desc: result.data.description,
      imageLink: result.data.imageLink,
      time: result.data.time,
      count: result.data.count,
      soal: result.data.question
    });
  };
  _showMateri = indexx => {
    this.setState({ index: indexx });
  };
  _onPress = () => {};
  _toDetail = index => {
    this.props.navigation.navigate('Quiz', { index });
  };
  onSeek = seek => {
    this.videoPlayer.seek(seek);
  };

  onPaused = playerState => {
    this.setState({
      paused: !this.state.paused,
      playerState
    });
  };

  onLoad = data => this.setState({ duration: data.duration, isLoading: false });

  onLoadStart = () => this.setState({ isLoading: true });

  exitFullScreen = () => {};

  enterFullScreen = () => {};

  onFullScreen = () => this.setState({ isFullScreen: true });

  onSeeking = currentTime => this.setState({ currentTime });
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <ScrollView>
          <Text style={{ fontSize: 32, fontFamily: 'Montserrat-Bold', color: '#29291e' }}>
            {this.state.title}
          </Text>
          <Image
            resizeMode="cover"
            style={{
              width: scale(328),
              height: scale(180),
              marginTop: 15,
              borderRadius: scale(4)
            }}
            source={{ uri: this.state.imageLink }}
          />
          <Text style={{ fontFamily: 'Montserrat-Bold', fontSize: 14, marginTop: 15 }}>Waktu</Text>
          <Text
            style={{
              lineHeight: 25,
              textAlign: 'justify',
              fontFamily: 'Montserrat-Light',
              fontSize: 12
            }}
          >
            {`${this.state.time} Menit`}
          </Text>
          <Text style={{ fontFamily: 'Montserrat-Bold', fontSize: 14, marginTop: 15 }}>Jumlah Soal</Text>
          <Text
            style={{
              lineHeight: 25,
              textAlign: 'justify',
              fontFamily: 'Montserrat-Light',
              fontSize: 12
            }}
          >
            {this.state.count}
          </Text>
          <Text style={{ fontFamily: 'Montserrat-Bold', fontSize: 14, marginTop: 15 }}>Deskripsi</Text>
          <Text
            style={{
              lineHeight: 25,
              textAlign: 'justify',
              fontFamily: 'Montserrat-Light',
              fontSize: 12
            }}
          >
            {this.state.desc}
          </Text>
          {/* <Button
            onPress={() => this._toDetail(this.state.idsoal)}
            title="Mulai Sekarang"
            customContainer={{
              backgroundColor: '#FF5151',
              borderRadius: 5,
              width: scale(315),
              height: 50,
              marginBottom: 10,
              marginLeft: 15
            }}
            customText={{ color: '#fff', letterSpacing: 300 }}
          /> */}
          <Button
            onPress={this._toDetail(this.state.idsoal)}
            title="Masuk"
            customContainer={{
              backgroundColor: '#FF5151',
              width: '100%',
              height: 50
            }}
            customText={{ color: '#fff', fontFamily: 'Montserrat-Bold' }}
          />
        </ScrollView>
      </View>
    );
  }
}
