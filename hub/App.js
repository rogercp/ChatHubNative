
import React, {Component} from 'react';import AppNavigator from './AppNavigator'
import { createAppContainer } from 'react-navigation';
import { render } from 'react-dom';


const AppContainer = createAppContainer(AppNavigator)

 export default class App extends Component {
  render(){

    return <AppContainer/>
  }
  ;
};


