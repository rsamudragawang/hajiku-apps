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
    this.props = {
      navigation: {
        navigate: jest.fn()
      }
    };
  });

  afterEach(() => {
    this.props = null;
    jest.clearAllMocks();
  });

  test('_onPress', () => {
    const instance = getInstance(this.props);
    instance._onPress();
    expect(this.props.navigation.navigate).toHaveBeenCalledWith('DrawerOpen');
  });
});
