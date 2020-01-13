import { Dimensions } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { AppStack } from './tabNavigator';
import SideBar from '../components/elements/SideBar';

export const Drawer = DrawerNavigator(
    {
        AppStack: {
            screen: AppStack,
            navigationOptions: {
                drawerLabel: 'AppStack'
            }
        }
    },
    {
        contentComponent: SideBar,
        drawerWidth: Dimensions.get('window').width - 100
    }
);