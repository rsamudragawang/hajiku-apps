import { assertSnapshots, mockSetState } from '../../../../utils/TestUtils/snapshot';
import Component from '../component';

describe('Component snapshot testing', () => {
  const configs = [
    {
      props: {},
      desc: 'renders without data'
    }
  ];
  assertSnapshots(Component, configs);
});

describe('Component', () => {
  const ComponentWithMockedState = mockSetState(Component);
  const getInstance = props => new ComponentWithMockedState(props);
  beforeEach(() => {
    this.props = {};
  });

  afterEach(() => {
    this.props = null;
    jest.clearAllMocks();
  });

  test('render on android', () => {
    jest.mock('Platform', () => {
      const Platform = require.requireActual('Platform');
      Platform.OS = 'android';
      return Platform;
    });
    const instance = getInstance(this.props);
    instance.render();
  });

  test('render on ios', () => {
    jest.mock('Platform', () => {
      const Platform = require.requireActual('Platform');
      Platform.OS = 'ios';
      return Platform;
    });
    const instance = getInstance(this.props);
    instance.render();
  });
});
