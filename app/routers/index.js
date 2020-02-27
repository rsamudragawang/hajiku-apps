import { SwitchNavigator } from 'react-navigation';
import { OnBoardingStack, BerandaStack } from './stackNavigator';
import { Drawer } from './drawerNavigator';

export default SwitchNavigator(
  {
    Beranda: BerandaStack,
    OnBoarding: OnBoardingStack,
    App: Drawer
  },
  {
    initialRouteName: 'OnBoarding'
  }
);
