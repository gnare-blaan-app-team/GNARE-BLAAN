import React from 'react';
import { StackNavigator } from 'react-navigation';
import { StatusBar } from 'react-native';
import HomePage from './screens/HomePage';
import MainMenu from './screens/MainMenu';
import LetterScreen from './screens/Letters/letterScreen';
import PageAScreen from './screens/Letters/PageAScreen';

import LetterScreen from './screens/Letters/pageAScreen';
import LetterScreen from './screens/Letters/pageBScreen';
import LetterScreen from './screens/Letters/pageDScreen';
import LetterScreen from './screens/Letters/pageEScreen';
import LetterScreen from './screens/Letters/pageFScreen';
import LetterScreen from './screens/Letters/pageGScreen';
import LetterScreen from './screens/Letters/pageHScreen';
import LetterScreen from './screens/Letters/pageIScreen';
import LetterScreen from './screens/Letters/pageKScreen';
import LetterScreen from './screens/Letters/pageLScreen';
import LetterScreen from './screens/Letters/pageMScreen';
import LetterScreen from './screens/Letters/pageNScreen';
import LetterScreen from './screens/Letters/pageOScreen';
import LetterScreen from './screens/Letters/pageSScreen';
import LetterScreen from './screens/Letters/pageTScreen';
import LetterScreen from './screens/Letters/pageUScreen';
import LetterScreen from './screens/Letters/pageWScreen';
import LetterScreen from './screens/Letters/pageYScreen';

const RootStack = StackNavigator(
  {
    home: HomePage,
    mainMenu: MainMenu,
    letters: LetterScreen,
    pageA: pageAScreen,
    pageB: pageBScreen,
    pageD: pageDScreen,
    pageE: pageEScreen,
    pageF: pageFScreen,
    pageG: pageGScreen,
    pageH: pageHScreen,
    pageI: pageIScreen,
    pageK: pageKScreen,
    pageL: pageLScreen,
    pageM: pageMScreen,
    pageN: pageNScreen,
    pageO: pageOScreen,
    pageS: pageSScreen,
    pageT: pageTScreen,
    pageU: pageUScreen,
    pageW: pageWScreen,
    pageY: pageYScreen,
    pageAScreen: PageAScreen,
  },
  {
    initialRouteName: 'home',
  }
);

export default class App extends React.Component {

  render() {
    return (
      <RootStack />
    )
  }
}