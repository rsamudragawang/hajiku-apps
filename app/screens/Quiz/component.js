/* eslint-disable prefer-destructuring */
/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-key */
/* eslint-disable import/default */
/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { View, Text, TouchableOpacity, Modal, Alert } from 'react-native';
import CountDown from 'react-native-countdown-component';
import PropTypes from 'prop-types';
import Button from '../../components/elements/Button';
import Header from '../../components/elements/Header';
import Swiper from '../../components/elements/Swipper';
import styles from './styles';
import { scale } from '../../utils/scaling';
import { ENDPOINT } from '../../configs';
import ModalSvg from '../../../assets/svgs/ModalSVG';
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
      jawaban: [],
      jsonJawaban: [],
      modalVisible: false,
      index: ''
    };
    // this.swiper = new Swiper(props);
  }
  componentWillMount() {
    this._getparams();
  }
  _getparams = async () => {
    const { params } = this.props.navigation.state;
    const getindex = params ? params.index : 'umroh';
    const result = await ENDPOINT.quizById(getindex);
    this.setState({
      index: getindex,
      data: result.data.question,
      time: result.data.time * 60
    });
  };
  _onTimeout = () => {
    const result = this.state.jsonJawaban;
    const index = this.state.index;
    const soal = this.state.data.length;
    this.setState({ modalVisible: !this.state.modalVisible });
    this.props.navigation.navigate('Score', { result, index, soal });
  };
  _setAnswer = (index, answer) => {
    if (this.state.jawaban.length === 0) {
      const json = JSON.parse(JSON.stringify({ [index]: answer }));
      this.setState({ jsonJawaban: [...this.state.jsonJawaban, json] }); // ITS WORK
      this.state.jawaban.push({ [index]: answer });
      this.forceUpdate();
    } else {
      this.state.jawaban[index] = { [index]: answer };
      const json = JSON.parse(JSON.stringify({ [index]: answer }));
      this.setState({ jsonJawaban: [...this.state.jsonJawaban, json] });
      this.forceUpdate();
    }
  };

  _searchValue = (key, value) => {
    for (let i = 0; i < this.state.jawaban.length; i++) {
      if (this.state.jawaban[i][key] === value) {
        return true;
      }
    }
  };
  _onPress = () => {
    // alert('check')
    this.setState({ modalVisible: !this.state.modalVisible });
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          ContainerStyle={{
            backgroundColor: '#F9FAFB'
          }}
          rightComponent={
            <CountDown
              size={20}
              until={this.state.time}
              onFinish={() => this._onTimeout()}
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
        <Modal
          // style={{ justifyContent: 'center', alignItems: 'center'}}
          // animationType="slide"
          transparent
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
              // backgroundColor: '#FFF'
            }}
          >
            <View
              style={{
                width: scale(306),
                height: scale(360),
                backgroundColor: '#FFF',
                paddingBottom: 32,
                paddingTop: 32,
                paddingLeft: 25,
                paddingRight: 25
              }}
            >
              {/* <Text>Hello World!</Text> */}
              <View style={{ alignItems: 'center' }}>
                <ModalSvg />
              </View>
              <View style={{ marginTop: 20, marginBottom: 20, alignItems: 'center' }}>
                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Apakah Anda Yakin ? </Text>
                <Text style={{ fontSize: 12 }}>Tekan Selesai Untuk Menyelesaikan</Text>
              </View>
              <Button
                customContainer={{
                  height: 50,
                  width: scale(250),
                  backgroundColor: '#5D7DFF',
                  borderWidth: 1,
                  borderColor: '#5D7DFF'
                }}
                title="Selesai"
                customText={{ color: '#FFF' }}
                onPress={this._onTimeout}
              />
              <View style={{ marginTop: 16 }}>
                <Button
                  customContainer={{
                    // marginTop: 16,
                    height: 50,
                    width: scale(250),
                    backgroundColor: '#FFF',
                    borderWidth: 1,
                    borderColor: '#5D7DFF'
                  }}
                  title="Kembali"
                  onPress={this._onPress}
                  customText={{ color: '#5D7DFF' }}
                />
              </View>
            </View>
          </View>
        </Modal>
        <Swiper total={this.state.data.length} onPress={this._onPress}>
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
                <TouchableOpacity onPress={() => this._setAnswer(i.toString(), data[0].toString())}>
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
