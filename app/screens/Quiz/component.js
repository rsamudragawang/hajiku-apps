/* eslint-disable react/jsx-key */
/* eslint-disable import/default */
/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { View, Text, Image } from 'react-native';
// import { Timer } from 'react-native-stopwatch-timer';
import CountDown from 'react-native-countdown-component';

import PropTypes from 'prop-types';
import Button from '../../components/elements/Button';
import Header from '../../components/elements/Header';
import Swiper from '../../components/elements/Swipper';
import styles from './styles';
import IMAGES from '../../configs/images';
import I18n from '../../i18n';
import { scale } from '../../utils/scaling';
import metrics from '../../constants/metrics';
import { ENDPOINT } from '../../configs';

export default class Component extends React.Component {
  // swiper: Swiper;
  constructor(props) {
    super(props);
    this.state = {
      timerDuration: 10000,
      data: [],
      index: 0,
      time: 1000
    };
    // this.swiper = new Swiper(props);
  }
  componentWillMount() {
    this._getparams();
  }
  _getparams = async () => {
    const result = await ENDPOINT.quizById('5e3952693697986638c38a43');
    this.setState({
      data: result.data.question,
      time: result.data.time * 60
    });
  };
  _onPress = () => {
    this.props.navigation.navigate('Beranda');
  };
  render() {
    return (
      <View>
        <Header
          ContainerStyle={{
            backgroundColor: '#F9FAFB'
          }}
          rightComponent={
            <CountDown
              size={20}
              until={this.state.time}
              onFinish={() => this._onPress()}
              digitStyle={{ borderColor: '#1CC625' }}
              digitTxtStyle={{ color: '#FF4057' }}
              timeLabelStyle={{ color: 'red', fontWeight: 'bold' }}
              separatorStyle={{ color: '#FF4057' }}
              timeToShow={['M', 'S']}
              timeLabels={{ m: null, s: null }}
              showSeparator
            />
          }
        />
        <Swiper total={this.state.data.length}>
          {this.state.data.map((data, i) => (
            <View style={styles.styles.slide}>
              {/* {this.state.index === i ? ( */}
              <View>
                <Text style={styles.styles.text}>{data.title}</Text>
              </View>
              {/* ) : null} */}
            </View>
          ))}
        </Swiper>
      </View>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
