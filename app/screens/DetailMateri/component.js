/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-return-assign */
/* eslint-disable react-native/no-color-literals */
/* eslint-disable react/sort-comp */
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import YouTube from 'react-native-youtube';
import Header from '../../components/elements/Header';
import styles from './styles';
import Right from '../../../assets/svgs/Right';
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
      video: true,
      title: '',
      desc: '',
      imageLink: 'https://miro.medium.com/max/328/1*R91n_x759FWmHFhIxET9yA.png',
      videoLink: '',
      subMateri: [],
      isReady: false,
      status: '',
      quality: '',
      index: ''
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
    const replacelink = result.data.videoLink.slice(32, 43);
    // console.log(replacelink);
    this.setState({
      title: result.data.title,
      desc: result.data.description,
      imageLink: result.data.imageLink,
      videoLink: replacelink,
      subMateri: result.data.subMateri
    });
  };
  _showMateri = indexx => {
    this.setState({ index: indexx });
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
          <Text style={{ fontSize: 32, marginLeft: 15, fontFamily: 'Montserrat-Bold', color: '#29291e' }}>
            {this.state.title}
          </Text>
          <Image
            resizeMode="cover"
            style={{
              width: scale(328),
              height: scale(180),
              marginLeft: 15,
              marginTop: 16,
              borderRadius: scale(4)
            }}
            source={{ uri: this.state.imageLink }}
          />
          <Text
            style={{
              lineHeight: 25,
              textAlign: 'justify',
              marginLeft: 15,
              marginTop: 24,
              fontSize: 12,
              fontFamily: 'Montserrat-Light',
              color: '#29291e'
            }}
          >
            {this.state.desc}
          </Text>
          {this.state.subMateri.length > 0 ? (
            <View
              style={{
                marginTop: scale(24),
                marginLeft: scale(15),
                marginRight: scale(15),
                marginBottom: scale(15)
              }}
            >
              {this.state.subMateri.map((materi, index) => (
                <View key={index} style={{ alignSelf: 'baseline' }}>
                  <TouchableOpacity style={styles.collapseProduct} onPress={() => this._showMateri(index)}>
                    <View style={styles.viewNumberList}>
                      <Text style={styles.listProductNomor}>{materi.id}</Text>
                    </View>
                    <View style={styles.viewTxtList}>
                      <Text style={styles.listProductTitle}>{materi.title}</Text>
                      <Text style={styles.listProduct}>{this.state.title}</Text>
                    </View>
                    <View style={styles.viewRight}>
                      {this.state.index === index ? (
                        <TouchableOpacity>
                          <Right />
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity>
                          <Bottom />
                        </TouchableOpacity>
                      )}
                    </View>
                  </TouchableOpacity>
                  {this.state.index === index ? (
                    <View style={styles.viewDesc}>
                      <Text
                        style={{
                          textAlign: 'justify',
                          lineHeight: 27,
                          margin: 16,
                          fontFamily: 'Montserrat-Light'
                        }}
                      >
                        {materi.description}
                      </Text>
                    </View>
                  ) : null}
                </View>
              ))}
              {/* <TouchableOpacity style={styles.collapseProduct}>
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
              </TouchableOpacity> */}
            </View>
          ) : null}
          {this.state.videoLink.length > 0 ? (
            <View>
              <Text
                style={{
                  fontSize: 32,
                  marginLeft: 15,
                  fontFamily: 'Montserrat-Bold',
                  color: '#29291e',
                  marginTop: 24
                }}
              >
                Video
              </Text>
              <View
                style={{
                  width: scale(328),
                  height: scale(180),
                  marginLeft: 15,
                  marginTop: 15,
                  marginBottom: scale(20)
                }}
              >
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
        </ScrollView>
      </View>
    );
  }
}
