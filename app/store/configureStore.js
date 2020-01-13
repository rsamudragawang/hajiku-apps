import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import app from '../reducers/index';

export default function configureStore() {
  const store = createStore(app, applyMiddleware(thunk));
  return store;
}
