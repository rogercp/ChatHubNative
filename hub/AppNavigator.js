import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/Home';



const AppNavigator = createStackNavigator({
    Home : HomeScreen
})

export default createAppContainer(AppNavigator)