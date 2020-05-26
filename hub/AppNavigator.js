import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/Home';
import Register from './src/screens/Register';
import Login from './src/screens/Login'
import UserHome from './src/screens/UserHome'
import Settings from './src/screens/Settings'

const AppNavigator = createStackNavigator({
  

    Home:{
    screen:HomeScreen
    },
    Login:{

    screen:Login
    },
    Register:{
    screen:Register
    },
    UserHome:{

    screen:UserHome
    },
    Settings:{

      screen:Settings
      }

}, {
    index: 0,
    initialRouteName: 'Home',
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false
    }
  })

export default AppNavigator