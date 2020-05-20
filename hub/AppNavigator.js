import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/Home';
import Register from './src/screens/Register';
import Login from './src/screens/Login'
import UserHome from './src/screens/UserHome'


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
    }

}, {
    initialRouteName: 'Home',
    headerMode: 'none'
  })

export default createAppContainer(AppNavigator)