import { assertSnapshots } from '../../../../utils/TestUtils/snapshot';
import Component from '../index';

jest.mock('react-navigation', () => ({
  TabBarBottom: 'TabBarBottom'
}));

describe('Component snapshot testing', () => {
  const configs = [
    {
      state: { isVisible: false },
      props: {},
      desc: 'renders with default props'
    },
    {
      state: { isVisible: true },
      props: {},
      desc: 'renders with isVisible = true'
    }
  ];
  assertSnapshots(Component, configs);
});
