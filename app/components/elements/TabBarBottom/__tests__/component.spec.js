import { Keyboard } from 'react-native';
import Component from '../index';
import { mockSetState } from '../../../../utils/TestUtils/snapshot';

jest.mock('Keyboard', () => ({
  addListener: jest.fn()
}));

jest.mock('react-navigation', () => ({
  TabBarBottom: 'TabBarBottom'
}));

describe('Component', () => {
  const ComponentWithMockedState = mockSetState(Component);
  const getInstance = props => new ComponentWithMockedState(props);
  beforeEach(() => {
    this.props = {
      onChangeInput: jest.fn(),
      floatingLabel: false
    };
  });

  afterEach(() => {
    this.props = null;
    jest.clearAllMocks();
  });

  test('componentDidMount', () => {
    const instance = getInstance(this.props);
    instance.componentDidMount();
    expect(Keyboard.addListener).toHaveBeenCalledWith('keyboardDidShow', instance._keyboardWillShow);
    expect(Keyboard.addListener).toHaveBeenCalledWith('keyboardDidHide', instance._keyboardWillHide);
  });

  describe('componentWillUnmount', () => {
    test('have subscribers', () => {
      const instance = getInstance(this.props);
      instance.keyboardWillShowSub = { remove: jest.fn() };
      instance.keyboardWillHideSub = { remove: jest.fn() };
      instance.componentWillUnmount();
      expect(instance.keyboardWillShowSub.remove).toHaveBeenCalled();
      expect(instance.keyboardWillHideSub.remove).toHaveBeenCalled();
    });

    test('not have subscribers', () => {
      const instance = getInstance(this.props);
      instance.componentWillUnmount();
      expect(instance.keyboardWillShowSub).toBeUndefined();
      expect(instance.keyboardWillHideSub).toBeUndefined();
    });
  });

  test('_keyboardWillShow', () => {
    const instance = getInstance(this.props);
    instance._keyboardWillShow();
    expect(instance.state.isVisible).toBeFalsy();
  });

  test('_keyboardWillHide', () => {
    const instance = getInstance(this.props);
    instance._keyboardWillHide();
    expect(instance.state.isVisible).toBeTruthy();
  });
});
