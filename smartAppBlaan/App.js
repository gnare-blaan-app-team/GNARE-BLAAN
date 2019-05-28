import React from 'react';
import { StackNavigator } from 'react-navigation';
import { StatusBar } from 'react-native';
import HomePage from './screens/HomePage';
import MainMenu from './screens/MainMenu';
import LetterScreen from './screens/Letters/letterScreen';
import Numbers from './screens/Numbers/NumbersScreen';

import PageA from './screens/Letters/pageAScreen';
import PageB from './screens/Letters/pageBScreen';
import PageD from './screens/Letters/pageDScreen';
import PageE from './screens/Letters/pageEScreen';
import PageF from './screens/Letters/pageFScreen';
import PageG from './screens/Letters/pageGScreen';
import PageH from './screens/Letters/pageHScreen';
import PageI from './screens/Letters/pageIScreen';
import PageK from './screens/Letters/pageKScreen';
import PageL from './screens/Letters/pageLScreen';
import PageM from './screens/Letters/pageMScreen';
import PageN from './screens/Letters/pageNScreen';
import PageO from './screens/Letters/pageOScreen';
import PageS from './screens/Letters/pageSScreen';
import PageT from './screens/Letters/pageTScreen';
import PageU from './screens/Letters/pageUScreen';
import PageW from './screens/Letters/pageWScreen';
import PageY from './screens/Letters/pageYScreen';

const RootStack = StackNavigator(
  {
    home: HomePage,
    mainMenu: MainMenu,
    letters: LetterScreen,
    pageA: PageA,
    pageB: PageB,
    pageD: PageD,
    pageE: PageE,
    pageF: PageF,
    pageG: PageG,
    pageH: PageH,
    pageI: PageI,
    pageK: PageK,
    pageL: PageL,
    pageM: PageM,
    pageN: PageN,
    pageO: PageO,
    pageS: PageS,
    pageT: PageT,
    pageU: PageU,
    pageW: PageW,
    pageY: PageY,
    
    numbers: Numbers
  },
  {
    initialRouteName: 'letters',
  }
);

export default class App extends React.Component {

  render() {
    return (
      <RootStack />
    )
  }
}