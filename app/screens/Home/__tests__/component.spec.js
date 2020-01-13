import { assertSnapshots, mockSetState } from '../../../utils/TestUtils/snapshot';
import Component from '../component';
import { ENDPOINT } from '../../../configs';

jest.mock('../../../components/layouts/MainScreen', () => 'MainScreen');
jest.mock('../../../components/elements/Header', () => 'Header');
jest.mock('../../../components/elements/Button', () => 'Button');
jest.mock('../../../configs', () => ({
  ENDPOINT: {
    getListUser: jest.fn()
  }
}));
jest.mock('../../../utils/checkBandwidth', () => ({
  measureNetworkBandwitdh: jest.fn()
}));

describe('Component snapshot testing', () => {
  const configs = [
    {
      state: {},
      props: { listUsers: [] },
      desc: 'renders without data'
    },
    {
      state: { listUser: [{ id: 'id', first_name: '', last_name: 'last_name', avatar: 'avatar' }] },
      props: { listUsers: [] },
      desc: 'renders with data'
    }
  ];
  assertSnapshots(Component, configs);
});

describe('Component', () => {
  const ComponentWithMockedState = mockSetState(Component);
  const getInstance = props => new ComponentWithMockedState(props);
  beforeEach(() => {
    this.props = {
      actions: {
        fetchGetListUser: jest.fn()
      },
      listUsers: []
    };
  });

  afterEach(() => {
    this.props = null;
    jest.clearAllMocks();
  });

  test('componentDidMount', async () => {
    const instance = getInstance(this.props);
    await instance.componentDidMount();
    expect(this.props.actions.fetchGetListUser).toHaveBeenCalledWith('1');
  });

  describe('_loadData', async () => {
    test('success', async () => {
      const result = {
        data: [
          {
            id: 'id',
            first_name: 'first_name',
            last_name: 'last_name',
            avatar: 'avatar'
          }
        ]
      };
      ENDPOINT.getListUser.mockImplementationOnce(() => Promise.resolve(result));
      const instance = getInstance(this.props);
      await instance._loadData();
      expect(ENDPOINT.getListUser).toHaveBeenCalledWith('1');
    });

    test('failed', async () => {
      const error = { error: 'error' };
      ENDPOINT.getListUser.mockImplementationOnce(() => Promise.reject(error));
      const instance = getInstance(this.props);
      await instance._loadData();
      expect(ENDPOINT.getListUser).toHaveBeenCalledWith('1');
    });
  });
});
