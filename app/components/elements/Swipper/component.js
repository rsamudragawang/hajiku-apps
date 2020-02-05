/* eslint-disable prettier/prettier */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable prefer-destructuring */
import React, { Component } from 'react';
import { Platform, ScrollView, View, StatusBar, Text } from 'react-native';
import PropTypes from 'prop-types';

import METRICS from '../../../constants/metrics';
import styles from './styles';
import I18n from '../../../i18n';

const width = METRICS.screenWidth;
const height = METRICS.screenHeight;

export default class Swiper extends Component {
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
    if (this.internals.isScrolling || this.state.total < 2) {
      return;
    }

    started = () => {
      this.props.navigation.navigate('SplashScreen');
    };

    const state = this.state;
    const diff = this.state.index + 1;
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
    if (this.state.total <= 1) {
      return null;
    }

    const ActiveDot = <View style={[styles.dot, styles.activeDot]} />;
    const Dot = <View style={styles.dot} />;

    const dots = [];

    for (let key = 0; key < this.state.total; key++) {
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
    const { onPress } = this.props;
    const lastScreen = this.state.index === this.state.total - 1;
    return (
      <View onPress={onPress} pointerEvents="box-none" style={[styles.buttonWrapper, styles.fullScreen]}>
        {lastScreen ? (
          <Text style={[styles.buttonStart, styles.textFooter]} onPress={onPress}>
            {I18n.t('getStarted')}
          </Text>
        ) : (
            <Text style={[styles.buttonNext, styles.textFooter]} onPress={() => this.swipe()}>
              {I18n.t('next')}
            </Text>
          )}
      </View>
    );
  };

  render = ({ children } = this.props) => (
    <View style={[styles.container, styles.fullScreen]}>
      {this.renderScrollView(children)}
      {this.renderPagination()}
      {this.renderButton()}
    </View>
  );
}
Component.propTypes = {
  onPress: PropTypes.func
};
