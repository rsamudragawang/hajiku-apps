/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-key */
/* eslint-disable import/default */
/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// import { Timer } from 'react-native-stopwatch-timer';
import CountDown from 'react-native-countdown-component';
import PropTypes from 'prop-types';
import Header from '../../components/elements/Header';
import Swiper from '../../components/elements/Swipper';
import styles from './styles';
import { scale } from '../../utils/scaling';
import { ENDPOINT } from '../../configs';
import ASelect from '../../../assets/svgs/ASelect';
import BSelect from '../../../assets/svgs/BSelect';
import CSelect from '../../../assets/svgs/CSelect';
import DSelect from '../../../assets/svgs/DSelect';
import Aunselect from '../../../assets/svgs/AUnselect';
import Bunselect from '../../../assets/svgs/BUnselect';
import Cunselect from '../../../assets/svgs/CUnselect';
import Dunselect from '../../../assets/svgs/DUnselect';

export default class Component extends React.Component {
  // swiper: Swiper;
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      time: 1000,
      jawaban: []
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
  _setAnswer = (index, answer) => {
    if (this.state.jawaban.length === 0) {
      this.state.jawaban.push({ [index]: answer });
      console.log(this.state.jawaban);
      this.forceUpdate();
    } else {
      this.state.jawaban[index] = { [index]: answer };
      console.log(this.state.jawaban);
      this.forceUpdate();
    }
  };

  _searchValue = (key, value) => {
    for (let i = 0; i < this.state.jawaban.length; i++) {
      if (this.state.jawaban[i][key] === value) {
        // console.log(jsonstring[i].Value);
        return true;
      }
    }
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
            <View style={styles.styles.slide} key={i}>
              <View
                style={{
                  margin: 15,
                  width: scale(330),
                  height: scale(80),
                  backgroundColor: '#fff',
                  padding: 15,
                  borderColor: '#EBEBEB',
                  borderWidth: 2,
                  borderRadius: 5
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    color: '#C4C4C4',
                    fontWeight: '600'
                  }}
                >{`Pertanyaan no ${i + 1}`}</Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '600',
                    color: '#29291E'
                  }}
                >
                  {data.title}
                </Text>
              </View>
              {this.state.jawaban.length > 0 && this._searchValue(i, data[0]) ? (
                <TouchableOpacity onPress={() => this._setAnswer(i, data[0])}>
                  <View
                    style={{
                      margin: 15,
                      width: scale(330),
                      height: scale(50),
                      backgroundColor: '#FF4057',
                      padding: 15,
                      borderColor: '#EBEBEB',
                      borderWidth: 2,
                      borderRadius: 5,
                      // justifyContent: 'center',
                      flexDirection: 'row'
                    }}
                  >
                    <ASelect />
                    <Text
                      style={{
                        marginLeft: scale(10),
                        fontSize: 14,
                        fontWeight: '600',
                        color: '#29291E'
                      }}
                    >
                      {data[0]}
                    </Text>
                  </View>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => this._setAnswer(i, data[0])}>
                  <View
                    style={{
                      margin: 15,
                      width: scale(330),
                      backgroundColor: '#fff',
                      padding: 15,
                      borderColor: '#EBEBEB',
                      borderWidth: 2,
                      borderRadius: 5,
                      flexDirection: 'row'
                      // justifyContent: 'center'
                    }}
                  >
                    <Aunselect />
                    <Text
                      style={{
                        fontSize: 14,
                        marginLeft: scale(10),
                        fontWeight: '600',
                        color: '#29291E'
                      }}
                    >
                      {data[0]}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
              {this.state.jawaban.length > 0 && this._searchValue(i, data[1]) ? (
                <TouchableOpacity onPress={() => this._setAnswer(i, data[1])}>
                  <View
                    style={{
                      margin: 15,
                      width: scale(330),
                      height: scale(50),
                      backgroundColor: '#FF4057',
                      padding: 15,
                      borderColor: '#EBEBEB',
                      borderWidth: 2,
                      borderRadius: 5,
                      flexDirection: 'row'
                      // justifyContent: 'center'
                    }}
                  >
                    <BSelect />
                    <Text
                      style={{
                        marginLeft: scale(10),
                        fontSize: 14,
                        fontWeight: '600',
                        color: '#29291E'
                      }}
                    >
                      {data[1]}
                    </Text>
                  </View>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => this._setAnswer(i, data[1])}>
                  <View
                    style={{
                      margin: 15,
                      width: scale(330),
                      backgroundColor: '#fff',
                      padding: 15,
                      borderColor: '#EBEBEB',
                      borderWidth: 2,
                      borderRadius: 5,
                      flexDirection: 'row'
                      // justifyContent: 'center'
                    }}
                  >
                    <Bunselect />
                    <Text
                      style={{
                        marginLeft: scale(10),
                        fontSize: 14,
                        fontWeight: '600',
                        color: '#29291E'
                      }}
                    >
                      {data[1]}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
              {this.state.jawaban.length > 0 && this._searchValue(i, data[2]) ? (
                <TouchableOpacity onPress={() => this._setAnswer(i, data[2])}>
                  <View
                    style={{
                      margin: 15,
                      width: scale(330),
                      height: scale(50),
                      backgroundColor: '#FF4057',
                      padding: 15,
                      borderColor: '#EBEBEB',
                      borderWidth: 2,
                      borderRadius: 5,
                      flexDirection: 'row'
                      // justifyContent: 'center'
                    }}
                  >
                    <CSelect />
                    <Text
                      style={{
                        fontSize: 14,
                        marginLeft: scale(10),
                        fontWeight: '600',
                        color: '#29291E'
                      }}
                    >
                      {data[2]}
                    </Text>
                  </View>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => this._setAnswer(i, data[2])}>
                  <View
                    style={{
                      margin: 15,
                      width: scale(330),
                      // height: scale(50),
                      backgroundColor: '#fff',
                      padding: 15,
                      borderColor: '#EBEBEB',
                      borderWidth: 2,
                      borderRadius: 5,
                      flexDirection: 'row'
                      // justifyContent: 'center'
                    }}
                  >
                    <Cunselect />
                    <Text
                      style={{
                        fontSize: 14,
                        marginLeft: scale(10),
                        fontWeight: '600',
                        color: '#29291E'
                      }}
                    >
                      {data[2]}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
              {this.state.jawaban.length > 0 && this._searchValue(i, data[3]) ? (
                <TouchableOpacity onPress={() => this._setAnswer(i, data[3])}>
                  <View
                    style={{
                      margin: 15,
                      width: scale(330),
                      height: scale(50),
                      backgroundColor: '#FF4057',
                      padding: 15,
                      borderColor: '#EBEBEB',
                      borderWidth: 2,
                      borderRadius: 5,
                      flexDirection: 'row'
                      // justifyContent: 'center'
                    }}
                  >
                    <DSelect />
                    <Text
                      style={{
                        fontSize: 14,
                        marginLeft: scale(10),
                        fontWeight: '600',
                        color: '#29291E'
                      }}
                    >
                      {data[3]}
                    </Text>
                  </View>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => this._setAnswer(i, data[3])}>
                  <View
                    style={{
                      margin: 15,
                      width: scale(330),
                      backgroundColor: '#fff',
                      padding: 15,
                      borderColor: '#EBEBEB',
                      borderWidth: 2,
                      borderRadius: 5,
                      flexDirection: 'row'
                      // justifyContent: 'center'
                    }}
                  >
                    <Dunselect />
                    <Text
                      style={{
                        fontSize: 14,
                        marginLeft: scale(10),
                        fontWeight: '600',
                        color: '#29291E'
                      }}
                    >
                      {data[3]}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
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
