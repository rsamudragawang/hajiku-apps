import { SwitchNavigator } from 'react-navigation';
import { OnBoardingStack } from './stackNavigator';
import { Drawer } from './drawerNavigator';

export default SwitchNavigator(
  {
    OnBoarding: OnBoardingStack,
    App: Drawer
  },
  {
    initialRouteName: 'OnBoarding'
  }
);
