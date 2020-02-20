import { SwitchNavigator } from 'react-navigation';
import { OnBoardingStack, BerandaStack, SettingStack } from './stackNavigator';
import { Drawer } from './drawerNavigator';

export default SwitchNavigator(
  {
    Beranda: BerandaStack,
    OnBoarding: OnBoardingStack,
    Setting: SettingStack,
    App: Drawer
  },
  {
    initialRouteName: 'Setting'
  }
);
