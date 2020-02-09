import { StackNavigator } from 'react-navigation';
import Home from '../screens/Home';
import Search from '../screens/Search';
import UploadPhoto from '../screens/UploadPhoto';
import History from '../screens/History';
import Account from '../screens/Account';
import OnBoarding from '../screens/OnBoarding';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Beranda from '../screens/Beranda';
import Materi from '../screens/Materi';
import DetailMateri from '../screens/DetailMateri';
import ListQuiz from '../screens/ListQuiz';
import DetailQuiz from '../screens/DetailQuiz';
import Quiz from '../screens/Quiz';
import Score from '../screens/Score';
export const HomeStack = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const SearchStack = StackNavigator(
  {
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const UploadPhotoStack = StackNavigator(
  {
    UploadPhoto: {
      screen: UploadPhoto,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const HistoryStack = StackNavigator(
  {
    History: {
      screen: History,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const AccountStack = StackNavigator(
  {
    Account: {
      screen: Account,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const OnBoardingStack = StackNavigator(
  {
    OnBoarding: {
      screen: OnBoarding,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    Register: {
      screen: Register,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    Login: {
      screen: Login,
      navigationOptions: {
        tabBarVisible: false
      }
    }
    
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const BerandaStack = StackNavigator(
  {
    Score: {
      screen: Score,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    Quiz: {
      screen: Quiz,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    ListQuiz: {
      screen: ListQuiz,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    DetailQuiz: {
      screen: DetailQuiz,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    Beranda: {
      screen: Beranda,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    Materi: {
      screen: Materi,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    DetailMateri: {
      screen: DetailMateri,
      navigationOptions: {
        tabBarVisible: false
      }
    },
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
)
