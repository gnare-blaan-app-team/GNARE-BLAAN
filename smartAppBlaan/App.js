import React from 'react';
import { StackNavigator } from 'react-navigation';
import { StatusBar } from 'react-native';
import HomePage from './screens/HomePage';
import MainMenu from './screens/MainMenu';
import LetterScreen from './screens/Letters/letterScreen';
import PageAScreen from './screens/Letters/PageAScreen';

const RootStack = StackNavigator(
  {
    home: HomePage,
    mainMenu: MainMenu,
    letters: LetterScreen,
    pageAScreen: PageAScreen,
  },
  {
    initialRouteName: 'home',
  }
);

export default class App extends React.Component {
  componentDidMount() {
    StatusBar.setHidden(true);
  }
  render() {
    return (
      <RootStack />
    )
  }
}