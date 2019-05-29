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
import Page1 from './screens/Numbers/Page1';
import Page2 from './screens/Numbers/Page2';
import Page3 from './screens/Numbers/Page3';
import Page4 from './screens/Numbers/Page4';
import Page5 from './screens/Numbers/Page5';
import Page6 from './screens/Numbers/Page6';
import Page7 from './screens/Numbers/Page7';
import Page8 from './screens/Numbers/Page8';
import Page9 from './screens/Numbers/Page9';
import Page10 from './screens/Numbers/Page10';
import Page20 from './screens/Numbers/Page20';
import Page30 from './screens/Numbers/Page30';
import Page40 from './screens/Numbers/Page40';
import Page50 from './screens/Numbers/Page50';
import Page60 from './screens/Numbers/Page60';
import Page70 from './screens/Numbers/Page70';
import Page80 from './screens/Numbers/Page80';
import Page90 from './screens/Numbers/Page90';
import Page100 from './screens/Numbers/Page100';
import Page200 from './screens/Numbers/Page200';
import Page300 from './screens/Numbers/Page300';
import Page400 from './screens/Numbers/Page400';
import Page500 from './screens/Numbers/Page500';
import Page1000 from './screens/Numbers/Page1000';
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
    page1: Page1,
    page2: Page2,
    page3: Page3,
    page4: Page4,
    page5: Page5,
    page6: Page6,
    page7: Page7,
    page8: Page8,
    page9: Page9,
    page10: Page10,
    page20: Page20,
    page30: Page30,
    page40: Page40,
    page50: Page50,
    page60: Page60,
    page70: Page70,
    page80: Page80,
    page90: Page90,
    page100: Page100,
    page200: Page200,
    page300: Page300,
    page400: Page400,
    page500: Page500,
    page1000: Page1000,
    numbers: Numbers
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