import React from 'react';
import { StackNavigator } from 'react-navigation';
import { StatusBar } from 'react-native';

const RootStack = StackNavigator(
  {
    home: Menuscreen,
    main: Mainmenu,
    letters: Letters,
    pageA: PageA,
    pageB: PageB,
    pageD: PageD,
    pageE: PageE,
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