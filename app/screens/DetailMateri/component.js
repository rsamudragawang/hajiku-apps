/* eslint-disable react/no-unused-state */
/* eslint-disable no-return-assign */
/* eslint-disable react-native/no-color-literals */
/* eslint-disable react/sort-comp */
import React from 'react';
import { View, Text, Image } from 'react-native';
import Video from 'react-native-video';
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
import Header from '../../components/elements/Header';
import styles from './styles';

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
      playerState: PLAYER_STATES.PLAYING
    };
  }

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
        <Text style={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: 32, marginLeft: 15 }}>Haji</Text>
        <Image
          resizeMode="cover"
          style={{ width: 328, height: 180, marginLeft: 15, marginTop: 15 }}
          source={{ uri: 'https://i.ibb.co/TBLJWhk/haji.jpg' }}
        />
        <Text
          style={{ textAlign: 'justify', marginLeft: 15, marginTop: 24, fontWeight: '300', fontSize: 12 }}
        >
          Menurut bahasa (etimologi) Haji adalah pergi ke Baitullah (Kakbah) untuk melaksanakan ibadah yang
          telah ditetapkan atau ditentukan Allah swt. Secara istilah (terminologi) adalah pergi beribadah ke
          tanah suci (Mekah), melakukan tawaf, sa’i, dan wukuf di Padang Arafah serta melaksanakan semua
          ketentuan-ketentuan haji di bulan Zulhijah.
        </Text>
        <Text
          style={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: 32, marginLeft: 15, marginTop: 24 }}
        >
          Video
        </Text>
        <View style={{ width: 328, height: 180, marginLeft: 15, marginTop: 15 }}>
          <Video
            style={{ position: 'absolute', backgroundColor: '#000', width: 328, height: 180 }}
            onEnd={this.onEnd}
            onLoad={this.onLoad}
            onLoadStart={this.onLoadStart}
            onProgress={this.onProgress}
            paused={this.state.paused}
            ref={videoPlayer => (this.videoPlayer = videoPlayer)}
            resizeMode="cover"
            source={{ uri: 'https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4' }}
            volume={50.0}
            bufferConfig={{
              minBufferMs: 15000,
              maxBufferMs: 50000,
              bufferForPlaybackMs: 2500,
              bufferForPlaybackAfterRebufferMs: 5000
            }}
          />
          <MediaControls
            duration={this.state.duration}
            isLoading={this.state.isLoading}
            mainColor="red"
            onFullScreen={this.onFullScreen}
            onPaused={this.onPaused}
            onReplay={this.onReplay}
            onSeek={this.onSeek}
            onSeeking={this.onSeeking}
            playerState={this.state.playerState}
            progress={this.state.currentTime}
          />
        </View>
      </View>
    );
  }
}
