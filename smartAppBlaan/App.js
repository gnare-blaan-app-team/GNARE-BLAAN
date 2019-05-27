import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen'
import MainMenuScreen from './MainMenuScreen'

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    MainMenu: {
      screen: MainMenuScreen,
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