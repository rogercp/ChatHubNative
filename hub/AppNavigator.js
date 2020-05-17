import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/Home';
import Register from './src/screens/Register';
import Login from './src/screens/Login'



const AppNavigator = createStackNavigator({
  
    Home:{
    screen:HomeScreen
    },
    Login:{

    screen:Login
    },
    Register:{
        screen:Register
    }

}, {
    initialRouteName: 'Home',
    headerMode: 'none'
  })

export default createAppContainer(AppNavigator)