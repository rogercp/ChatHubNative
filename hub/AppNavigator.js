import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/Home';
import Register from './src/screens/Register';
import Login from './src/screens/Login'
import UserHome from './src/screens/UserHome'
import Settings from './src/screens/Settings'
import Boards from './src/screens/Boards'
import MessagesList from './src/screens/MessagesList'
import Message from './src/screens/Message'

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
    },
    Boards:{
        screen:Boards
    },
    MessagesList:{
      screen :MessagesList
    },
    Message:{
      screen:Message
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