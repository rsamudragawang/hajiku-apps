/* eslint-disable prefer-destructuring */
/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-key */
/* eslint-disable import/default */
/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { View, Text, TouchableOpacity, Modal, Alert, ScrollView, StatusBar } from 'react-native';
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
      jawaban: [],
      jsonJawaban: [],
      modalVisible: false
    };
    // this.swiper = new Swiper(props);
  }
  componentWillMount() {
    this._getparams();
  }
  _getparams = async () => {
    StatusBar.setHidden(false);
    const { params } = this.props.navigation.state;
    const getindex = params ? params.index : 'umroh';
    const result = await ENDPOINT.quizById(getindex);
    this.setState({
      data: result.data.question
    });
  };
  _onTimeout = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
    this.props.navigation.navigate('Beranda');
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
        />
        <Modal
          // style={{ justifyContent: 'center', alignItems: 'center'}}
          // animationType="slide"
          transparent
          animationType="fade"
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
                <Text style={{ fontSize: 12 }}>Tekan Selesai Untuk Kembali Ke Menu Utama</Text>
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
              <ScrollView style={{ alignSelf: 'baseline' }}>
                <View
                  style={{
                    margin: 15,
                    width: scale(330),
                    // height: scale(80),
                    backgroundColor: '#fff',
                    padding: 15,
                    borderColor: '#EBEBEB',
                    borderWidth: 2,
                    borderRadius: 5,
                    alignSelf: 'baseline'
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
                {data[0] === data.answer ? (
                  <TouchableOpacity>
                    <View
                      style={{
                        alignSelf: 'baseline',
                        margin: 15,
                        width: scale(330),
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
                  <TouchableOpacity>
                    <View
                      style={{
                        alignSelf: 'baseline',
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
                {data[1] === data.answer ? (
                  <TouchableOpacity>
                    <View
                      style={{
                        alignSelf: 'baseline',
                        margin: 15,
                        width: scale(330),
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
                  <TouchableOpacity>
                    <View
                      style={{
                        alignSelf: 'baseline',
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
                {data[2] === data.answer ? (
                  <TouchableOpacity>
                    <View
                      style={{
                        alignSelf: 'baseline',
                        margin: 15,
                        width: scale(330),
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
                  <TouchableOpacity>
                    <View
                      style={{
                        alignSelf: 'baseline',
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
                {data[3] === data.answer ? (
                  <TouchableOpacity>
                    <View
                      style={{
                        alignSelf: 'baseline',
                        margin: 15,
                        width: scale(330),
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
                  <TouchableOpacity>
                    <View
                      style={{
                        alignSelf: 'baseline',
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
                <View style={{ alignSelf: 'baseline' }}>
                  <TouchableOpacity style={styles.styles.collapseProduct}>
                    <View style={styles.styles.viewNumberList}>
                      <Text style={styles.styles.listProductNomor}>Pembahasan</Text>
                    </View>
                  </TouchableOpacity>
                  {/* {this.state.index === index ? ( */}
                  <View style={styles.styles.viewDesc}>
                    <Text
                      style={{
                        textAlign: 'justify',
                        lineHeight: 27,
                        margin: 16,
                        fontFamily: 'Montserrat-Light'
                      }}
                    >
                      {data.pembahasan}
                    </Text>
                  </View>
                  {/* ) : null} */}
                </View>
              </ScrollView>
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
