import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomePage from './screens/HomePage'
import MainMenu from './screens/MainMenu'

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomePage,
    },
    mainMenu: {
      screen: MainMenu,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {

  render() {
    return (
      <RootStack />
    )
  }
}