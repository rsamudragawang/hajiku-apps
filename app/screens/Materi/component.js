/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { View, Text, Image, ImageBackground, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import Header from '../../components/elements/Header';
import styles from './styles';
import IMAGES from '../../configs/images';
import { ENDPOINT } from '../../configs';
import { scale } from '../../utils/scaling';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      data: []
    };
  }
  componentWillMount() {
    this._getparams();
  }
  _getparams = async () => {
    StatusBar.setHidden(false);
    const { params } = this.props.navigation.state;
    const getType = params ? params.type : 'umroh';
    const result = await ENDPOINT.getAll(getType);
    this.setState({ data: result.data, type: getType });
  };
  _onPress = () => {};
  _toDetail = index => {
    this.props.navigation.navigate('DetailMateri', { index, type: this.state.type });
  };

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View
          style={{
            flex: 1,
            position: 'absolute',
            alignItems: 'flex-end',
            marginLeft: '100%'
          }}
        >
          <Image source={IMAGES.hiasan} style={{ width: 141, height: 203 }} />
        </View>
        <ScrollView>
          <Text style={{ fontSize: 32, marginLeft: 15, fontFamily: 'Montserrat-Bold', color: '#29291e' }}>
            {this.state.type.toUpperCase()}
          </Text>
          {this.state.data.map((data, index) => (
            <View key={index} style={{ marginBottom: scale(4) }}>
              <TouchableOpacity onPress={() => this._toDetail(data._id)}>
                <View style={styles.containerDiscover}>
                  <ImageBackground source={{ uri: data.imageLink }} style={styles.imageDiscover}>
                    <View
                      // eslint-disable-next-line react-native/no-color-literals
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(0, 0, 0, .5)'
                      }}
                    >
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
