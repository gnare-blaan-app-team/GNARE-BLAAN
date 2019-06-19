import { createStackNavigator} from "react-navigation";
import { useScreens } from 'react-native-screens';
import HomeScreen from './screens/HomePage';
import MainMenu from './screens/MainMenu';
import LetterScreen from './screens/letterScreen';
import Numbers from './screens/Numbers/NumbersScreen';

import NumberIntroScreen from './screens/Numbers/NumberIntroScreen';
import LetterIntroScreen from './screens/LetterIntroScreen';

// Flalok Stories Import

import FlalokStoryMenu from './screens/Flalok/FlalokStoryMenu';
import EndStoryScreen from './screens/Flalok/EndStoryScreen';
import Story1Screen from './screens/Flalok/flalokStoryScreens/Story1Screen';
import Story2Screen from './screens/Flalok/flalokStoryScreens/Story2Screen';
import Story3Screen from './screens/Flalok/flalokStoryScreens/Story3Screen';
import Story4Screen from './screens/Flalok/flalokStoryScreens/Story4Screen';
import Story5Screen from './screens/Flalok/flalokStoryScreens/Story5Screen';
import Story6Screen from './screens/Flalok/flalokStoryScreens/Story6Screen';

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

//Vocabulary10
import Vocabulary10 from './screens/Vocabulary/vocabulary10/vocabulary10';

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

import GameMenu from './screens/Games/GameMenu';


import ATracing from './screens/Letters/LetterTracing/ATracing';
import BTracing from './screens/Letters/LetterTracing/BTracing';
import DTracing from './screens/Letters/LetterTracing/DTracing';
import ETracing from './screens/Letters/LetterTracing/ETracing';
import FTracing from './screens/Letters/LetterTracing/FTracing';
import HTracing from './screens/Letters/LetterTracing/HTracing';
import GTracing from './screens/Letters/LetterTracing/HTracing';

useScreens();


export default AppNavigator = createStackNavigator(
{
    home: HomeScreen,
    mainMenu: MainMenu,
    letters: LetterScreen,
    numbers: Numbers,

    letterIntro: LetterIntroScreen,

    tracingA: ATracing,
    tracingB: BTracing,
    tracingD: DTracing,
    tracingE: ETracing,
    tracingF: FTracing,
    tracingG: GTracing,
    tracingH: HTracing,


    numberIntro: NumberIntroScreen,

    flalok: FlalokStoryMenu,
    endstory: EndStoryScreen,
    story1: Story1Screen,
    story2: Story2Screen,
    story3: Story3Screen,
    story4: Story4Screen,
    story5: Story5Screen,
    story6: Story6Screen,

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

    //Vocabulary10
    vocabulary10: Vocabulary10,

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
    dasalbagomatulogPlay: DasalBagoMatulogPlay,

    //Games
    gameMenu: GameMenu,

  },
{

  initialRouteName:"home",

  mode: 'card',
  cardStyle: {
    backgroundColor:"transperent"
}
}
);
