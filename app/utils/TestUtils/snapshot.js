/* eslint-disable import/no-extraneous-dependencies */
import renderer from 'react-test-renderer';

const mockSetState = Component =>
  class extends Component {
    setState(f, callback) {
      if (typeof f === 'function') {
        /* eslint-disable react/no-direct-mutation-state */
        this.state = { ...this.state, ...f(this.state) };
      } else {
        /* eslint-disable react/no-direct-mutation-state */
        this.state = { ...this.state, ...f };
      }
      if (callback) callback();
    }
  };

const assertSnapshot = (C, config) => {
  const { props, state, desc, throws, beforeTest } = config;

  let Component;
  let RenderedComponent;

  if (beforeTest) {
    beforeTest();
  }

  if (throws) {
    test(desc, () => {
      expect(() => {
        if (C.prototype.render) {
          Component = new C(props);
        } else {
          Component = C(props);
        }
      }).toThrow(throws);
    });
  } else {
    if (C.prototype.render) {
      const CWithMockState = mockSetState(C);
      Component = new CWithMockState(props);

      if (state) {
        Component.setState(state);
      }

      RenderedComponent = Component.render();
    } else {
      RenderedComponent = C(props);
    }

    test(desc, () => {
      const tree = RenderedComponent && renderer.create(RenderedComponent).toJSON();
      expect(tree).toMatchSnapshot();
    });
  }
};

const assertSnapshots = (Component, configs) => {
  configs.forEach(config => assertSnapshot(Component, config));
};

export { assertSnapshots, mockSetState };
export default { assertSnapshots, mockSetState };
