import React from 'react';
import { StackNavigator } from 'react-navigation';
import { StatusBar } from 'react-native';

import HomePage from './screens/HomePage';
import MainMenu from './screens/MainMenu';
import LetterScreen from './screens/Letters/letterScreen';
import Numbers from './screens/Numbers/NumbersScreen';

import FlalokStoryMenu from './screens/Flalok/FlalokStoryMenu';
import Story1Screen from './screens/Flalok/Story1Screen';
import Story2Screen from './screens/Flalok/Story2Screen';
import Story3Screen from './screens/Flalok/Story3Screen';
import Story4Screen from './screens/Flalok/Story4Screen';
import Story5Screen from './screens/Flalok/Story5Screen';
import Story6Screen from './screens/Flalok/Story6Screen';

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

import SentenceA from './screens/Letters/sentenceA';
import SentenceB from './screens/Letters/sentenceB';
import SentenceD from './screens/Letters/sentenceD';
import SentenceE from './screens/Letters/sentenceE';
import SentenceF from './screens/Letters/sentenceF';
import SentenceG from './screens/Letters/sentenceG';
import SentenceH from './screens/Letters/sentenceH';
import SentenceI from './screens/Letters/sentenceI';
import SentenceK from './screens/Letters/sentenceK';
import SentenceL from './screens/Letters/sentenceL';
import SentenceM from './screens/Letters/sentenceM';
import SentenceN from './screens/Letters/sentenceN';
import SentenceO from './screens/Letters/sentenceO';
import SentenceS from './screens/Letters/sentenceS';
import SentenceT from './screens/Letters/sentenceT';
import SentenceU from './screens/Letters/sentenceU';
import SentenceW from './screens/Letters/sentenceW';
import SentenceY from './screens/Letters/sentenceY';

import Sentence1 from './screens/Numbers/sentence1';
import Sentence2 from './screens/Numbers/sentence2';
import Sentence3 from './screens/Numbers/sentence3';
import Sentence4 from './screens/Numbers/sentence4';
import Sentence5 from './screens/Numbers/sentence5';
import Sentence6 from './screens/Numbers/sentence6';
import Sentence7 from './screens/Numbers/sentence7';
import Sentence8 from './screens/Numbers/sentence8';
import Sentence9 from './screens/Numbers/sentence9';
import Sentence10 from './screens/Numbers/sentence10';
import Sentence20 from './screens/Numbers/sentence20';
import Sentence30 from './screens/Numbers/sentence30';
import Sentence40 from './screens/Numbers/sentence40';
import Sentence50 from './screens/Numbers/sentence50';
import Sentence60 from './screens/Numbers/sentence60';
import Sentence70 from './screens/Numbers/sentence70';
import Sentence80 from './screens/Numbers/sentence80';
import Sentence90 from './screens/Numbers/sentence90';
import Sentence100 from './screens/Numbers/sentence100';
import Sentence200 from './screens/Numbers/sentence200';
import Sentence300 from './screens/Numbers/sentence300';
import Sentence400 from './screens/Numbers/sentence400';
import Sentence500 from './screens/Numbers/sentence500';
import Sentence1000 from './screens/Numbers/sentence1000';

import TracingA from './screens/Letters/TracingA';
import TracingB from './screens/Letters/TracingB';
import TracingD from './screens/Letters/TracingD';
import TracingE from './screens/Letters/TracingE';
import TracingF from './screens/Letters/TracingF';
import TracingG from './screens/Letters/TracingG';
import TracingH from './screens/Letters/TracingH';
import TracingI from './screens/Letters/TracingI';
import TracingK from './screens/Letters/TracingK';
import TracingL from './screens/Letters/TracingL';
import TracingM from './screens/Letters/TracingM';
import TracingN from './screens/Letters/TracingN';
import TracingO from './screens/Letters/TracingO';
import TracingS from './screens/Letters/TracingS';
import TracingT from './screens/Letters/TracingT';
import TracingU from './screens/Letters/TracingU';
import TracingW from './screens/Letters/TracingW';
import TracingY from './screens/Letters/TracingY';

const RootStack = StackNavigator(
  {
    home: HomePage,
    mainMenu: MainMenu,
    letters: LetterScreen,

    flalok: FlalokStoryMenu,
    story1: Story1Screen,
    story2: Story2Screen,
    story3: Story3Screen,
    story4: Story4Screen,
    story5: Story5Screen,
    story6: Story6Screen,


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

    sentenceA: SentenceA,
    sentenceB: SentenceB,
    sentenceD: SentenceD,
    sentenceE: SentenceE,
    sentenceF: SentenceF,
    sentenceG: SentenceG,
    sentenceH: SentenceH,
    sentenceI: SentenceI,
    sentenceK: SentenceK,
    sentenceL: SentenceL,
    sentenceM: SentenceM,
    sentenceN: SentenceN,
    sentenceO: SentenceO,
    sentenceS: SentenceS,
    sentenceT: SentenceT,
    sentenceU: SentenceU,
    sentenceW: SentenceW,
    sentenceY: SentenceY,

    sentence1: Sentence1,
    sentence2: Sentence2,
    sentence3: Sentence3,
    sentence4: Sentence4,
    sentence5: Sentence5,
    sentence6: Sentence6,
    sentence7: Sentence7,
    sentence8: Sentence8,
    sentence9: Sentence9,
    sentence10: Sentence10,
    sentence20: Sentence20,
    sentence30: Sentence30,
    sentence40: Sentence40,
    sentence50: Sentence50,
    sentence60: Sentence60,
    sentence70: Sentence70,
    sentence80: Sentence80,
    sentence90: Sentence90,
    sentence100: Sentence100,
    sentence200: Sentence200,
    sentence300: Sentence300,
    sentence400: Sentence400,
    sentence500: Sentence500,
    sentence1000: Sentence1000,

    tracingA: TracingA,
    tracingB: TracingB,
    tracingD: TracingD,
    tracingE: TracingE,
    tracingF: TracingF,
    tracingG: TracingG,
    tracingH: TracingH,
    tracingI: TracingI,
    tracingK: TracingK,
    tracingL: TracingL,
    tracingM: TracingM,
    tracingN: TracingN,
    tracingO: TracingO,
    tracingS: TracingS,
    tracingT: TracingT,
    tracingU: TracingU,
    tracingW: TracingW,
    tracingY: TracingY,

    numbers: Numbers


  },
  {
    initialRouteName: 'pageA',
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