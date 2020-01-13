import { assertSnapshots } from '../../../../utils/TestUtils/snapshot';
import Component from '../component';

describe('Component snapshot testing', () => {
  const configs = [
    {
      state: {},
      props: {},
      desc: 'renders without data'
    }
  ];
  assertSnapshots(Component, configs);
});
