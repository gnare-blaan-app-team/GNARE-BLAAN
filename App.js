import React from "react";
import { createStackNavigator} from "react-navigation";
import { useScreens } from 'react-native-screens';
import HomeScreen from './screens/HomePage';
import MainMenu from './screens/MainMenu';
import LetterScreen from './screens/Letters/letterScreen';
import Numbers from './screens/Numbers/NumbersScreen';
import { Animated, Easing, Platform } from 'react-native';

// Flalok Stories Import

import FlalokStoryMenu from './screens/Flalok/FlalokStoryMenu';
import EndStoryScreen from './screens/Flalok/EndStoryScreen';
import Story1Screen from './screens/Flalok/flalokStoryScreens/Story1Screen';
import Story2Screen from './screens/Flalok/flalokStoryScreens/Story2Screen';
import Story3Screen from './screens/Flalok/flalokStoryScreens/Story3Screen';
import Story4Screen from './screens/Flalok/flalokStoryScreens/Story4Screen';
import Story5Screen from './screens/Flalok/flalokStoryScreens/Story5Screen';
import Story6Screen from './screens/Flalok/flalokStoryScreens/Story6Screen';


// Letter Page Import

import PageA from './screens/Letters/letterPageScreens/pageAScreen';
import PageB from './screens/Letters/letterPageScreens/pageBScreen';
import PageD from './screens/Letters/letterPageScreens/pageDScreen';
import PageE from './screens/Letters/letterPageScreens/pageEScreen';
import PageF from './screens/Letters/letterPageScreens/pageFScreen';
import PageG from './screens/Letters/letterPageScreens/pageGScreen';
import PageH from './screens/Letters/letterPageScreens/pageHScreen';
import PageI from './screens/Letters/letterPageScreens/pageIScreen';
import PageK from './screens/Letters/letterPageScreens/pageKScreen';
import PageL from './screens/Letters/letterPageScreens/pageLScreen';
import PageM from './screens/Letters/letterPageScreens/pageMScreen';
import PageN from './screens/Letters/letterPageScreens/pageNScreen';
import PageO from './screens/Letters/letterPageScreens/pageOScreen';
import PageS from './screens/Letters/letterPageScreens/pageSScreen';
import PageT from './screens/Letters/letterPageScreens/pageTScreen';
import PageU from './screens/Letters/letterPageScreens/pageUScreen';
import PageW from './screens/Letters/letterPageScreens/pageWScreen';
import PageY from './screens/Letters/letterPageScreens/pageYScreen';


// Number Page Import

import Page1 from './screens/Numbers/numberPageScreens/Page1';
import Page2 from './screens/Numbers/numberPageScreens/Page2';
import Page3 from './screens/Numbers/numberPageScreens/Page3';
import Page4 from './screens/Numbers/numberPageScreens/Page4';
import Page5 from './screens/Numbers/numberPageScreens/Page5';
import Page6 from './screens/Numbers/numberPageScreens/Page6';
import Page7 from './screens/Numbers/numberPageScreens/Page7';
import Page8 from './screens/Numbers/numberPageScreens/Page8';
import Page9 from './screens/Numbers/numberPageScreens/Page9';
import Page10 from './screens/Numbers/numberPageScreens/Page10';
import Page20 from './screens/Numbers/numberPageScreens/Page20';
import Page30 from './screens/Numbers/numberPageScreens/Page30';
import Page40 from './screens/Numbers/numberPageScreens/Page40';
import Page50 from './screens/Numbers/numberPageScreens/Page50';
import Page60 from './screens/Numbers/numberPageScreens/Page60';
import Page70 from './screens/Numbers/numberPageScreens/Page70';
import Page80 from './screens/Numbers/numberPageScreens/Page80';
import Page90 from './screens/Numbers/numberPageScreens/Page90';
import Page100 from './screens/Numbers/numberPageScreens/Page100';
import Page200 from './screens/Numbers/numberPageScreens/Page200';
import Page300 from './screens/Numbers/numberPageScreens/Page300';
import Page400 from './screens/Numbers/numberPageScreens/Page400';
import Page500 from './screens/Numbers/numberPageScreens/Page500';
import Page1000 from './screens/Numbers/numberPageScreens/Page1000';


// Letter Sentence Import

import SentenceA from './screens/Letters/letterSentenceScreens/sentenceA';
import SentenceB from './screens/Letters/letterSentenceScreens/sentenceB';
import SentenceD from './screens/Letters/letterSentenceScreens/sentenceD';
import SentenceE from './screens/Letters/letterSentenceScreens/sentenceE';
import SentenceF from './screens/Letters/letterSentenceScreens/sentenceF';
import SentenceG from './screens/Letters/letterSentenceScreens/sentenceG';
import SentenceH from './screens/Letters/letterSentenceScreens/sentenceH';
import SentenceI from './screens/Letters/letterSentenceScreens/sentenceI';
import SentenceK from './screens/Letters/letterSentenceScreens/sentenceK';
import SentenceL from './screens/Letters/letterSentenceScreens/sentenceL';
import SentenceM from './screens/Letters/letterSentenceScreens/sentenceM';
import SentenceN from './screens/Letters/letterSentenceScreens/sentenceN';
import SentenceO from './screens/Letters/letterSentenceScreens/sentenceO';
import SentenceS from './screens/Letters/letterSentenceScreens/sentenceS';
import SentenceT from './screens/Letters/letterSentenceScreens/sentenceT';
import SentenceU from './screens/Letters/letterSentenceScreens/sentenceU';
import SentenceW from './screens/Letters/letterSentenceScreens/sentenceW';
import SentenceY from './screens/Letters/letterSentenceScreens/sentenceY';


// Number Sentence Import

import Sentence1 from './screens/Numbers/numberSentenceScreens/sentence1';
import Sentence2 from './screens/Numbers/numberSentenceScreens/sentence2';
import Sentence3 from './screens/Numbers/numberSentenceScreens/sentence3';
import Sentence4 from './screens/Numbers/numberSentenceScreens/sentence4';
import Sentence5 from './screens/Numbers/numberSentenceScreens/sentence5';
import Sentence6 from './screens/Numbers/numberSentenceScreens/sentence6';
import Sentence7 from './screens/Numbers/numberSentenceScreens/sentence7';
import Sentence8 from './screens/Numbers/numberSentenceScreens/sentence8';
import Sentence9 from './screens/Numbers/numberSentenceScreens/sentence9';
import Sentence10 from './screens/Numbers/numberSentenceScreens/sentence10';
import Sentence20 from './screens/Numbers/numberSentenceScreens/sentence20';
import Sentence30 from './screens/Numbers/numberSentenceScreens/sentence30';
import Sentence40 from './screens/Numbers/numberSentenceScreens/sentence40';
import Sentence50 from './screens/Numbers/numberSentenceScreens/sentence50';
import Sentence60 from './screens/Numbers/numberSentenceScreens/sentence60';
import Sentence70 from './screens/Numbers/numberSentenceScreens/sentence70';
import Sentence80 from './screens/Numbers/numberSentenceScreens/sentence80';
import Sentence90 from './screens/Numbers/numberSentenceScreens/sentence90';
import Sentence100 from './screens/Numbers/numberSentenceScreens/sentence100';
import Sentence200 from './screens/Numbers/numberSentenceScreens/sentence200';
import Sentence300 from './screens/Numbers/numberSentenceScreens/sentence300';
import Sentence400 from './screens/Numbers/numberSentenceScreens/sentence400';
import Sentence500 from './screens/Numbers/numberSentenceScreens/sentence500';
import Sentence1000 from './screens/Numbers/numberSentenceScreens/sentence1000';


// Letter Tracing Import

import TracingA from './screens/Letters/letterTracingScreens/TracingA';
import TracingB from './screens/Letters/letterTracingScreens/TracingB';
import TracingD from './screens/Letters/letterTracingScreens/TracingD';
import TracingE from './screens/Letters/letterTracingScreens/TracingE';
import TracingF from './screens/Letters/letterTracingScreens/TracingF';
import TracingG from './screens/Letters/letterTracingScreens/TracingG';
import TracingH from './screens/Letters/letterTracingScreens/TracingH';
import TracingI from './screens/Letters/letterTracingScreens/TracingI';
import TracingK from './screens/Letters/letterTracingScreens/TracingK';
import TracingL from './screens/Letters/letterTracingScreens/TracingL';
import TracingM from './screens/Letters/letterTracingScreens/TracingM';
import TracingN from './screens/Letters/letterTracingScreens/TracingN';
import TracingO from './screens/Letters/letterTracingScreens/TracingO';
import TracingS from './screens/Letters/letterTracingScreens/TracingS';
import TracingT from './screens/Letters/letterTracingScreens/TracingT';
import TracingU from './screens/Letters/letterTracingScreens/TracingU';
import TracingW from './screens/Letters/letterTracingScreens/TracingW';
import TracingY from './screens/Letters/letterTracingScreens/TracingY';

// Vocabularies
import VocabularyMenu from './screens/Vocabulary/vocabularyMenu';

//Vocabulary1
import Vocabulary1 from './screens/Vocabulary/vocabulary1/vocabulary1'
import Tatay from './screens/Vocabulary/vocabulary1/tatay'
import Nanay from './screens/Vocabulary/vocabulary1/nanay'
import Kaito from './screens/Vocabulary/vocabulary1/kaito'
import Kaibe from './screens/Vocabulary/vocabulary1/kaibe'
import Lola from './screens/Vocabulary/vocabulary1/lola'
import Lolo from './screens/Vocabulary/vocabulary1/lolo'

//Vocabulary2
import Vocabulary2 from './screens/Vocabulary/vocabulary2/vocabulary2';
import Balikat from './screens/Vocabulary/vocabulary2/balikat'
import Baywang from './screens/Vocabulary/vocabulary2/baywang'
import Binti from './screens/Vocabulary/vocabulary2/binti'
import Buhok from './screens/Vocabulary/vocabulary2/buhok'
import Bunganga from './screens/Vocabulary/vocabulary2/bunganga'
import Daliri from './screens/Vocabulary/vocabulary2/daliri'
import Dibdib from './screens/Vocabulary/vocabulary2/dibdib'
import Ilong from './screens/Vocabulary/vocabulary2/ilong'
import Kamay from './screens/Vocabulary/vocabulary2/kamay'
import Leeg from './screens/Vocabulary/vocabulary2/leeg'
import Mata from './screens/Vocabulary/vocabulary2/mata'
import Paa from './screens/Vocabulary/vocabulary2/paa'
import Tainga from './screens/Vocabulary/vocabulary2/tainga'
import Tuhod from './screens/Vocabulary/vocabulary2/tuhod'
import Ulo from './screens/Vocabulary/vocabulary2/ulo'

//Vocabulary3
import Vocabulary3 from './screens/Vocabulary/vocabulary3/vocabulary3';
import Basket from './screens/Vocabulary/vocabulary3/basket';
import Crab from './screens/Vocabulary/vocabulary3/crab';
import Eel from './screens/Vocabulary/vocabulary3/eel';
import Fish from './screens/Vocabulary/vocabulary3/fish';
import Fishnet from './screens/Vocabulary/vocabulary3/fishnet';
import Sea from './screens/Vocabulary/vocabulary3/sea';
import Seashore from './screens/Vocabulary/vocabulary3/seashore';
import Shrimp from './screens/Vocabulary/vocabulary3/shrimp';

//Vocabulary4
import Vocabulary4 from './screens/Vocabulary/vocabulary4/vocabulary4';
import Bamboo from './screens/Vocabulary/vocabulary4/bamboo';
import Bolo from './screens/Vocabulary/vocabulary4/bolo';
import Carabao from './screens/Vocabulary/vocabulary4/carabao';
import Chicken from './screens/Vocabulary/vocabulary4/chicken';
import Corn from './screens/Vocabulary/vocabulary4/corn';
import Cow from './screens/Vocabulary/vocabulary4/cow';
import Farmland from './screens/Vocabulary/vocabulary4/farmland';
import Goat from './screens/Vocabulary/vocabulary4/goat';
import Pig from './screens/Vocabulary/vocabulary4/pig';
import Plow from './screens/Vocabulary/vocabulary4/plow';
import Rice from './screens/Vocabulary/vocabulary4/rice';
import Sweetpotato from './screens/Vocabulary/vocabulary4/sweetpotato';

//Vocabulary5
import Vocabulary5 from './screens/Vocabulary/vocabulary5/vocabulary5'
import Ax from './screens/Vocabulary/vocabulary5/ax';
import Bow from './screens/Vocabulary/vocabulary5/bow';
import Hawk from './screens/Vocabulary/vocabulary5/hawk';
import Hornbill from './screens/Vocabulary/vocabulary5/hornbill';
import Mountain from './screens/Vocabulary/vocabulary5/mountain';
import River from './screens/Vocabulary/vocabulary5/river';
import Salamander from './screens/Vocabulary/vocabulary5/salamander';
import Spear from './screens/Vocabulary/vocabulary5/spear';
import Tree from './screens/Vocabulary/vocabulary5/tree';
import Waterfall from './screens/Vocabulary/vocabulary5/waterfall';

//Vocabulary6
import Vocabulary6 from './screens/Vocabulary/vocabulary6/vocabulary6'
import Bedroom from './screens/Vocabulary/vocabulary6/bedroom';
import Door from './screens/Vocabulary/vocabulary6/door';
import Floor from './screens/Vocabulary/vocabulary6/floor';
import House from './screens/Vocabulary/vocabulary6/house';
import Kitchen from './screens/Vocabulary/vocabulary6/kitchen';
import Ladder from './screens/Vocabulary/vocabulary6/ladder';
import Roof from './screens/Vocabulary/vocabulary6/roof';
import Wall from './screens/Vocabulary/vocabulary6/wall';
import Window from './screens/Vocabulary/vocabulary6/window';

//Vocabulary7
import Vocabulary7 from './screens/Vocabulary/vocabulary7/vocabulary7';
import Cup from './screens/Vocabulary/vocabulary7/cup';
import Pot from './screens/Vocabulary/vocabulary7/pot';
import Firewood from './screens/Vocabulary/vocabulary7/firewood';
import Kettle from './screens/Vocabulary/vocabulary7/kettle';
import Knife from './screens/Vocabulary/vocabulary7/knife';
import Laddle from './screens/Vocabulary/vocabulary7/laddle';
import Mortar from './screens/Vocabulary/vocabulary7/mortar';
import Plate from './screens/Vocabulary/vocabulary7/plate';
import Spoon from './screens/Vocabulary/vocabulary7/spoon';
import Stove from './screens/Vocabulary/vocabulary7/stove';
import Tray from './screens/Vocabulary/vocabulary7/tray';

//Vocabulary8
import Vocabulary8 from './screens/Vocabulary/vocabulary8/vocabulary8';
import Afternoon from './screens/Vocabulary/vocabulary8/afternoon';
import Cloud from './screens/Vocabulary/vocabulary8/cloud';
import Evening from './screens/Vocabulary/vocabulary8/evening';
import Goodbye from './screens/Vocabulary/vocabulary8/goodbye';
import Moon from './screens/Vocabulary/vocabulary8/moon';
import Morning from './screens/Vocabulary/vocabulary8/morning';
import Star from './screens/Vocabulary/vocabulary8/star';
import Sun from './screens/Vocabulary/vocabulary8/sun';

//Vocabulary9
import Vocabulary9 from './screens/Vocabulary/vocabulary9/vocabulary9';
import FebruaryScreen from './screens/Vocabulary/vocabulary9/februaryScreen';
import MarchScreen from './screens/Vocabulary/vocabulary9/marchScreen';
import AprilScreen from './screens/Vocabulary/vocabulary9/aprilScreen';
import MayScreen from './screens/Vocabulary/vocabulary9/mayScreen';
import JuneScreen from './screens/Vocabulary/vocabulary9/juneScreen';
import JulyScreen from './screens/Vocabulary/vocabulary9/julyScreen';
import AugustScreen from './screens//Vocabulary/vocabulary9/augustScreen';
import SeptemberScreen from './screens//Vocabulary/vocabulary9/septemberScreen';
import OctoberScreen from './screens//Vocabulary/vocabulary9/octoberScreen';
import NovemberScreen from './screens//Vocabulary/vocabulary9/novemberScreen';
import DecemberScreen from './screens//Vocabulary/vocabulary9/decemberScreen';

import January from './screens/Vocabulary/vocabulary9/january';
import February from './screens/Vocabulary/vocabulary9/february';
import March from './screens/Vocabulary/vocabulary9/march';
import April from './screens/Vocabulary/vocabulary9/april';
import May from './screens/Vocabulary/vocabulary9/may';
import June from './screens/Vocabulary/vocabulary9/june';
import July from './screens/Vocabulary/vocabulary9/july';
import August from './screens/Vocabulary/vocabulary9/august';
import September from './screens/Vocabulary/vocabulary9/september';
import October from './screens/Vocabulary/vocabulary9/october';
import November from './screens/Vocabulary/vocabulary9/november';
import December from './screens/Vocabulary/vocabulary9/december';
import Monday from './screens/Vocabulary/vocabulary9/monday';
import Tuesday from './screens/Vocabulary/vocabulary9/tuesday';
import Wednesday from './screens/Vocabulary/vocabulary9/wednesday';
import Thursday from './screens/Vocabulary/vocabulary9/thursday';
import Friday from './screens/Vocabulary/vocabulary9/friday';
import Saturday from './screens/Vocabulary/vocabulary9/saturday';
import Sunday from './screens/Vocabulary/vocabulary9/sunday';

//Vocabulary10
import BambooGuitar from './screens/Vocabulary/vocabulary10/bambooGuitar';
import Blouse from './screens/Vocabulary/vocabulary10/blouse';
import Comb from './screens/Vocabulary/vocabulary10/comb';
import Earrings from './screens/Vocabulary/vocabulary10/earrings';
import Galing from './screens/Vocabulary/vocabulary10/galing';
import Gong from './screens/Vocabulary/vocabulary10/gong';
import Guitar from './screens/Vocabulary/vocabulary10/guitar';
import Headcover from './screens/Vocabulary/vocabulary10/headcover';
import Kulintang from './screens/Vocabulary/vocabulary10/kulintang';
import Logdrum from './screens/Vocabulary/vocabulary10/logdrum';
import Necklace from './screens/Vocabulary/vocabulary10/necklace';
import Pants from './screens/Vocabulary/vocabulary10/pants';
import Saul from './screens/Vocabulary/vocabulary10/saul';
import Skirt from './screens/Vocabulary/vocabulary10/skirt';
import Tlayong from './screens/Vocabulary/vocabulary10/tlayong';

// Culture and Arts Import

import cultureandartsMain from './screens/CultureandArts/cultureandartsMain';
import Chants_Screen from './screens/CultureandArts/cultureandartsScreens/chantsScreen';
import Kastifun_Screen from './screens/CultureandArts/cultureandartsScreens/kastifunScreen';
import Prayers_Screen from './screens/CultureandArts/cultureandartsScreens/prayersScreen';
import DasalBagoMatulogPlay from './screens/CultureandArts/cultureandartsScreens/prayers/DasalBagoMatulogPlay';


useScreens();


export default AppNavigator = createStackNavigator(
{
    home: HomeScreen,
    mainMenu: MainMenu,
    letters: LetterScreen,
    numbers: Numbers,

    flalok: FlalokStoryMenu,
    endstory: EndStoryScreen,
    story1: Story1Screen,
    story2: Story2Screen,
    story3: Story3Screen,
    story4: Story4Screen,
    story5: Story5Screen,
    story6: Story6Screen,



    // Page Letter

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



    // Page Number

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


    // Letter Sentence

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



    // Number Sentence

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


    // Letter Tracing

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

    //Vocabularies
    vocabularyMenu: VocabularyMenu,

    //Vocabulary 1
    vocabulary1: Vocabulary1,
    tatay: Tatay,
    nanay: Nanay,
    kaito: Kaito,
    kaibe: Kaibe,
    lola: Lola,
    lolo: Lolo,

    //Vocabulary 2
    vocabulary2: Vocabulary2,
    balikat: Balikat,
    baywang: Baywang,
    binti: Binti,
    buhok: Buhok,
    bunganga: Bunganga,
    daliri: Daliri,
    dibdib: Dibdib,
    ilong: Ilong,
    kamay: Kamay,
    leeg: Leeg,
    mata: Mata,
    paa: Paa,
    tainga: Tainga,
    tuhod: Tuhod,
    ulo: Ulo,

    //Vocabulary 3
    vocabulary3: Vocabulary3,
    basket: Basket,
    crab: Crab,
    eel: Eel,
    fish: Fish,
    fishnet: Fishnet,
    sea: Sea,
    seashore: Seashore,
    shrimp: Shrimp,

    //Vocabulary4
    vocabulary4: Vocabulary4,
    bamboo: Bamboo,
    bolo: Bolo,
    carabao: Carabao,
    chicken: Chicken,
    corn: Corn,
    cow: Cow,
    farmland: Farmland,
    goat: Goat,
    pig: Pig,
    plow: Plow,
    rice: Rice,
    sweetpotato: Sweetpotato,

    //Vocabulary5
    vocabulary5: Vocabulary5,
    ax: Ax,
    bow: Bow,
    hawk: Hawk,
    hornbill: Hornbill,
    mountain: Mountain,
    river: River,
    salamander: Salamander,
    spear: Spear,
    tree: Tree,
    waterfall: Waterfall,

    //Vocabulary6
    vocabulary6: Vocabulary6,
    bedroom: Bedroom,
    door: Door,
    floor: Floor,
    house: House,
    kitchen: Kitchen,
    ladder: Ladder,
    roof: Roof,
    wall: Wall,
    window: Window,

    //Vocabulary7
    vocabulary7: Vocabulary7,
    cup: Cup,
    firewood: Firewood,
    kettle: Kettle,
    knife: Knife,
    laddle: Laddle,
    mortar: Mortar,
    plate: Plate,
    pot: Pot,
    spoon: Spoon,
    stove: Stove,
    tray: Tray,

    //Vocabulary8
    vocabulary8: Vocabulary8,
    afternoon: Afternoon,
    cloud: Cloud,
    evening: Evening,
    goodbye: Goodbye,
    moon: Moon,
    morning: Morning,
    star: Star,
    sun: Sun,

    //Vocabulary9
    vocabulary9: Vocabulary9,
    februaryScreen: FebruaryScreen,
    marchScreen: MarchScreen,
    aprilScreen: AprilScreen,
    mayScreen: MayScreen,
    juneScreen: JuneScreen,
    julyScreen: JulyScreen,
    augustScreen: AugustScreen,
    septemberScreen: SeptemberScreen,
    octoberScreen: OctoberScreen,
    novemberScreen: NovemberScreen,
    decemberScreen: DecemberScreen,

    january: January,
    february: February,
    march: March,
    april: April,
    may: May,
    june: June,
    july: July,
    august: August,
    september: September,
    october: October,
    november: November,
    december: December,
    monday: Monday,
    tuesday: Tuesday,
    wednesday: Wednesday,
    thursday: Thursday,
    friday: Friday,
    saturday: Saturday,
    sunday: Sunday,

    //Vocabulary10
    bambooGuitar: BambooGuitar,
    blouse: Blouse,
    comb: Comb,
    earrings: Earrings,
    galing: Galing,
    gong: Gong,
    guitar: Guitar,
    headcover: Headcover,
    kulintang: Kulintang,
    logdrum: Logdrum,
    necklace: Necklace,
    pants: Pants,
    saul: Saul,
    skirt: Skirt,
    tlayong: Tlayong,


    //Culture and Arts
    cultureandarts: cultureandartsMain,
    chantsScreen: Chants_Screen,
    kastifunScreen: Kastifun_Screen,
    prayersScreen: Prayers_Screen,
    dasalbagomatulogPlay: DasalBagoMatulogPlay
  },
{
  initialRouteName:"vocabulary2",
  mode: 'card',
  cardStyle: {
    backgroundColor:"transperent"
}
}
);
