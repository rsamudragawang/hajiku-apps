import React from 'react';
import { View } from 'react-native';
import { assertSnapshots } from '../../../../utils/TestUtils/snapshot';
import Component from '../component';

jest.mock('../../BackButton', () => 'BackButton');
jest.mock('../../BurgerButton', () => 'BurgerButton');

describe('Component snapshot testing', () => {
  const configs = [
    {
      state: {},
      props: {
        burger: true,
        title: 'title'
      },
      desc: 'renders with burger'
    },
    {
      state: {},
      props: { back: true },
      desc: 'renders with back'
    },
    {
      state: {},
      props: { setting: true },
      desc: 'renders without data'
    },
    {
      state: {},
      props: {
        leftComponent: <View />,
        rightComponent: <View />,
        centerComponent: <View />
      },
      desc: 'renders without data'
    }
  ];
  assertSnapshots(Component, configs);
});
