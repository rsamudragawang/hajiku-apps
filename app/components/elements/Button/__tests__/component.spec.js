import { assertSnapshots, mockSetState } from '../../../../utils/TestUtils/snapshot';
import Component from '../component';

describe('Component snapshot testing', () => {
  const configs = [
    {
      state: {},
      props: { type: 'raised' },
      desc: 'renders with type: raised'
    },
    {
      state: {},
      props: { type: 'flat' },
      desc: 'renders with type: flat'
    },
    {
      state: {},
      props: { type: 'flat-ripple' },
      desc: 'renders with type: flat-ripple'
    },
    {
      state: {},
      props: { type: 'raised', disabled: true },
      desc: 'renders with disabled'
    }
  ];
  assertSnapshots(Component, configs);
});

describe('Component', () => {
  const ComponentWithMockedState = mockSetState(Component);
  const getInstance = props => new ComponentWithMockedState(props);
  beforeEach(() => {
    this.props = {
      type: 'raised',
      navigation: {
        navigate: jest.fn()
      }
    };
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
