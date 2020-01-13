import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import mainScreen from '../components/layouts/MainScreen/reducer';
import home from '../screens/Home/reducer';

const rootReducer = combineReducers({
  form: formReducer,
  home,
  mainScreen
});

export default rootReducer;
