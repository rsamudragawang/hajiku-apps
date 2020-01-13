import { assertSnapshots } from '../../../utils/TestUtils/snapshot';
import Component from '../component';

jest.mock('../../../components/layouts/MainScreen', () => 'MainScreen');
jest.mock('../../../components/elements/Header', () => 'Header');
jest.mock('../../../components/elements/Button', () => 'Button');

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
