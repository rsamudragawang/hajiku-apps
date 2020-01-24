/* eslint-disable react/no-unused-state */
/* eslint-disable no-return-assign */
/* eslint-disable react-native/no-color-literals */
/* eslint-disable react/sort-comp */
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
import YouTube from 'react-native-youtube';
import Header from '../../components/elements/Header';
import styles from './styles';
// import Right from '../../../assets/svgs/Right';
import { scale } from '../../utils/scaling';
import Bottom from '../../../assets/svgs/Bottom';
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
      playerState: PLAYER_STATES.PLAYING,
      video: true,
      title: '',
      desc: '',
      imageLink: '',
      videoLink: '',
      subMateri: [],
      isReady: false,
      status: '',
      quality: ''
    };
  }
  componentWillMount() {
    this._getparams();
  }
  _getparams = async () => {
    const { params } = this.props.navigation.state;
    const getType = params ? params.type : 'umroh';
    const getindex = params ? params.index : 'umroh';
    const result = await ENDPOINT.getById(getindex, getType);
    this.setState({
      title: result.data.title,
      desc: result.data.description,
      imageLink: result.data.imageLink,
      videoLink: result.data.videoLink,
      subMateri: result.data.subMateri
    });
    console.log(result);
  };
  _onPress = () => {};
  _toDetail = index => {
    this.props.navigation.navigate('DetailMateri', { index, type: this.state.type });
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

  onReplay = () => {
    this.setState({ playerState: PLAYER_STATES.PLAYING });
    this.videoPlayer.seek(0);
  };

  onProgress = data => {
    const { isLoading, playerState } = this.state;
    // Video Player will continue progress even if the video already ended
    if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
      this.setState({ currentTime: data.currentTime });
    }
  };

  onLoad = data => this.setState({ duration: data.duration, isLoading: false });

  onLoadStart = () => this.setState({ isLoading: true });

  onEnd = () => this.setState({ playerState: PLAYER_STATES.ENDED });

  exitFullScreen = () => {};

  enterFullScreen = () => {};

  onFullScreen = () => this.setState({ isFullScreen: true });

  onSeeking = currentTime => this.setState({ currentTime });
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <ScrollView>
          <Text style={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: 32, marginLeft: 15 }}>
            {this.state.title}
          </Text>
          <Image
            resizeMode="cover"
            style={{ width: scale(328), height: scale(180), marginLeft: 15, marginTop: 15 }}
            source={{ uri: this.state.imageLink }}
          />
          <Text
            style={{
              lineHeight: 25,
              textAlign: 'justify',
              marginLeft: 15,
              marginTop: 24,
              fontWeight: '300',
              fontSize: 12
            }}
          >
            {this.state.desc}
          </Text>
          {this.state.videoLink.length > 0 ? (
            <View>
              <Text
                style={{
                  fontStyle: 'normal',
                  fontWeight: 'bold',
                  fontSize: 32,
                  marginLeft: 15,
                  marginTop: 24
                }}
              >
                Video
              </Text>
              <View style={{ width: scale(328), height: scale(180), marginLeft: 15, marginTop: 15 }}>
                <YouTube
                  apiKey="AIzaSyAuIuXHM8REnj7bkRxhZuu96O4wXvNDLB8"
                  videoId={this.state.videoLink} // The YouTube video ID
                  play // control playback of video with true/false
                  // fullscreen // control whether the video should play in fullscreen or inline
                  loop // control whether the video should loop when ended
                  onReady={() => this.setState({ isReady: true })}
                  onChangeState={e => this.setState({ status: e.state })}
                  onChangeQuality={e => this.setState({ quality: e.quality })}
                  onError={e => this.setState({ error: e.error })}
                  style={{ width: scale(328), height: scale(180) }}
                />
              </View>
            </View>
          ) : null}
          {this.state.subMateri.length > 0 ? (
            <View
              style={{
                marginTop: scale(24),
                marginLeft: scale(15),
                marginRight: scale(15),
                marginBottom: scale(15)
              }}
            >
              <TouchableOpacity style={styles.collapseProduct}>
                <View style={styles.viewNumberList}>
                  <Text style={styles.listProductNomor}>1</Text>
                </View>
                <View style={styles.viewTxtList}>
                  <Text style={styles.listProductTitle}>Test</Text>
                  <Text style={styles.listProduct}>Test</Text>
                </View>
                <View style={styles.viewRight}>
                  <TouchableOpacity>
                    <Bottom />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
              <View style={styles.viewDesc}>
                <Text style={{ textAlign: 'justify', lineHeight: 27, margin: 16 }}>
                  tawaf ifadah, adalah mengelilingi Ka’bah sebanyak 7 kali dengan syarat sebagai berikut : 1.
                  Suci dari hadas dan najis baik badan maupun pakaian. 2. Menutup aurat. 3. Ka’bah berada di
                  sebelah kiri orang yang mengelilinginya. 4. Memulai tawaf dari arah hajar aswad (batu hitam)
                  yang terletak di salah satu pojok di luar Ka’bah.
                </Text>
              </View>
            </View>
          ) : null}
        </ScrollView>
      </View>
    );
  }
}
