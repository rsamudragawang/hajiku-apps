/* eslint-disable react/sort-comp */
/* eslint-disable no-nested-ternary */
/* eslint-disable prettier/prettier */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable prefer-destructuring */
import React, { Component } from 'react';
import { Platform, ScrollView, View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import Button from '../Button';
import METRICS from '../../../constants/metrics';
import styles from './styles';

const width = METRICS.screenWidth;
const height = METRICS.screenHeight;

export default class Swiper extends React.Component {
  // constructor(props){
  //   super(props)
  //   this.swipe.bind(this)
  // }
  static defaultProps = {
    horizontal: true,
    pagingEnabled: true,
    showsHorizontalScrollIndicator: false,
    showsVerticalScrollIndicator: false,
    bounces: false,
    scrollsToTop: false,
    removeClippedSubviews: true,
    automaticallyAdjustContentInsets: false,
    index: 0
  };
  
  state = this.initState(this.props);

  componentDidMount() {
    StatusBar.setHidden(true);
  }

  onScrollBegin = () => {
    this.internals.isScrolling = true;
  };

  onScrollEnd = e => {
    this.internals.isScrolling = false;

    this.updateIndex(
      e.nativeEvent.contentOffset ? e.nativeEvent.contentOffset.x : e.nativeEvent.position * this.state.width
    );
  };

  onScrollEndDrag = e => {
    const {
      contentOffset: { x: newOffset }
    } = e.nativeEvent;
    const { children } = this.props;
    const { index } = this.state;
    const { offset } = this.internals;

    if (offset === newOffset && (index === 0 || index === children.length - 1)) {
      this.internals.isScrolling = false;
    }
  };

  initState(props) {
    const total = props.children ? props.children.length || 1 : 0;
    const index = total > 1 ? Math.min(props.index, total - 1) : 0;
    const offset = width * index;

    const state = {
      total,
      index,
      offset,
      width,
      height
    };
    this.internals = {
      isScrolling: false,
      offset
    };

    return state;
  }

  updateIndex = offset => {
    const state = this.state;
    const diff = offset - this.internals.offset;
    const step = state.width;
    let index = state.index;

    if (!diff) {
      return;
    }
    index = parseInt(index + Math.round(diff / step), 10);

    this.internals.offset = offset;
    this.setState({
      index
    });
  };

  swipe = () => {
    // console.log("panggi;")
    const { total } = this.props
    if (this.internals.isScrolling ||  total< 2) {
      return;
    }

    started = () => {
      this.props.navigation.navigate('SplashScreen');
    };

    const state = this.state;
    const diff = this.state.index + 1;
    const x = diff * state.width;
    const y = 0;
    // this.forceUpdate();

    this.scrollView && this.scrollView.scrollTo({ x, y, animated: true });
    this.internals.isScrolling = true;
    if (Platform.OS === 'android') {
      setImmediate(() => {
        this.onScrollEnd({
          nativeEvent: {
            position: diff
          }
        });
      });
    }
  };

  swipeBack = () => {
    // console.log("panggi;")
    const { total } = this.props
    if (this.internals.isScrolling ||  total< 2) {
      return;
    }

    started = () => {
      this.props.navigation.navigate('SplashScreen');
    };

    const state = this.state;
    const diff = this.state.index - 1;
    const x = diff * state.width;
    const y = 0;

    this.scrollView && this.scrollView.scrollTo({ x, y, animated: true });
    this.internals.isScrolling = true;

    if (Platform.OS === 'android') {
      setImmediate(() => {
        this.onScrollEnd({
          nativeEvent: {
            position: diff
          }
        });
      });
    }
  };
  renderScrollView = pages => (
    <ScrollView
      ref={component => {
        this.scrollView = component;
      }}
      {...this.props}
      contentContainerStyle={[styles.wrapper, this.props.style]}
      onScrollBeginDrag={this.onScrollBegin}
      onMomentumScrollEnd={this.onScrollEnd}
      onScrollEndDrag={this.onScrollEndDrag}
    >
      {pages.map((page, i) => (
        <View style={[styles.fullScreen, styles.slide]} key={i}>
          {page}
        </View>
      ))}
    </ScrollView>
  );

  renderPagination = () => {
    const {total} = this.props;
    if (total <= 1) {
      return null;
    }

    const ActiveDot = <View style={[styles.dot, styles.activeDot]} />;
    const Dot = <View style={styles.dot} />;

    const dots = [];

    for (let key = 0; key < total; key++) {
      dots.push(
        key === this.state.index
          ? // Active dot
          React.cloneElement(ActiveDot, { key })
          : // Other dots
          React.cloneElement(Dot, { key })
      );
    }

    return (
      <View pointerEvents="none" style={[styles.pagination, styles.fullScreen]}>
        {dots}
      </View>
    );
  };

  renderButton = () => {
    const { onPress, total } = this.props;
    const firstScreen = this.state.index ===0;
    const lastScreen = this.state.index === total -1 ;
    // console.log
    return (
        <View onPress={onPress} pointerEvents="box-none" style={[styles.cardContainer, styles.bottomContainer]}>
        {firstScreen ? (
          <View
          style={{
            // flexDirection: 'row',
            flex: 1,
            marginLeft: 16,
            marginRight: 16
          }}
        >
          <View style={{ alignItems: 'flex-end' }}>
            <Button
              customContainer={{
                height: 50,
                width: 150,
                backgroundColor: '#5D7DFF',
                borderWidth: 1,
                borderColor: '#5D7DFF'
              }}
              title="Berikutnya"
              customText={{ color: '#FFF' }}
              onPress={() => this.swipe()}

            />
          </View>
        </View>
        ) : lastScreen ? (
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              marginLeft: 16,
              marginRight: 16
              // padding: 30
            }}
          >
            <View style={{ alignItems: 'flex-start', flex: 1 }}>
              <Button
                customContainer={{
                  height: 50,
                  width: 150,
                  backgroundColor: '#FFF',
                  borderWidth: 1,
                  borderColor: '#5D7DFF'
                }}
                title="Kembali"
                onPress={() => this.swipeBack()}
                customText={{ color: '#5D7DFF' }}
              />
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Button
                customContainer={{
                  height: 50,
                  width: 150,
                  backgroundColor: '#5D7DFF',
                  borderWidth: 1,
                  borderColor: '#5D7DFF'
                }}
                title="Berikutnya"
                customText={{ color: '#FFF' }}
                onPress={onPress}
              />
            </View>
          </View>
        ) : (
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              marginLeft: 16,
              marginRight: 16
            }}
          >
            <View style={{ alignItems: 'flex-start', flex: 1 }}>
              <Button
                customContainer={{
                  height: 50,
                  width: 150,
                  backgroundColor: '#FFF',
                  borderWidth: 1,
                  borderColor: '#5D7DFF'
                }}
                title="Kembali"
                onPress={() => this.swipeBack()}
                customText={{ color: '#5D7DFF' }}
              />
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Button
                customContainer={{
                  height: 50,
                  width: 150,
                  backgroundColor: '#5D7DFF',
                  borderWidth: 1,
                  borderColor: '#5D7DFF'
                }}
                title="Berikutnya"
                customText={{ color: '#FFF' }}
                onPress={() => this.swipe()}
              />
            </View>
          </View>
        )
        }
      </View>
    );
  };
  
  render = ({ children } = this.props) => (
    <View style={[styles.container, styles.fullScreen]}>
      {/* {console.log("length",children.length)} */}
      {this.renderScrollView(children)}
      {this.renderButton()}
      
      {/* <Text>test</Text> */}
      {/* {this.renderPagination()} */}
      {/* <View style={{ justifyContent: 'flex-end'}}> */}
      {/* </View> */}
    </View>
  );
}
Component.propTypes = {
  onPress: PropTypes.func,
  total: PropTypes.number
};
