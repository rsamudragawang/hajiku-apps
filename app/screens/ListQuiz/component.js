import React from 'react';
import { View, Text, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Header from '../../components/elements/Header';
import styles from './styles';
import IMAGES from '../../configs/images';
import { ENDPOINT } from '../../configs';

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
    try {
      const result = await ENDPOINT.quizAll();
      console.log(result);
      this.setState({ data: result.data });
    } catch (e) {
      console.log(e);
    }
  };
  _onPress = () => {};
  _toDetail = index => {
    this.props.navigation.navigate('DetailQuiz', { index, type: this.state.type });
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
          <Text style={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: 32, marginLeft: 15 }}>
            {this.state.type.toUpperCase()}
          </Text>
          {this.state.data.map((data, index) => (
            <View key={index}>
              <TouchableOpacity onPress={() => this._toDetail(data._id)}>
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
