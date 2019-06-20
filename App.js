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

//Vocabulary2
import Vocabulary2 from './screens/Vocabulary/vocabulary2/vocabulary2';

//Vocabulary3
import Vocabulary3 from './screens/Vocabulary/vocabulary3/vocabulary3';

//Vocabulary4
import Vocabulary4 from './screens/Vocabulary/vocabulary4/vocabulary4';

//Vocabulary5
import Vocabulary5 from './screens/Vocabulary/vocabulary5/vocabulary5';

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
import DadSe from './screens/Games/DadSe';
import DadBatak from './screens/Games/DadBatak';

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
  
    //Vocabulary 2
    vocabulary2: Vocabulary2,
    
    //Vocabulary 3
    vocabulary3: Vocabulary3,

    //Vocabulary4
    vocabulary4: Vocabulary4,

    //Vocabulary5
    vocabulary5: Vocabulary5,
    
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
    dadse : DadSe,
    dadbatak: DadBatak,

  },
{

  initialRouteName:"home",
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 2fcadc005f31778b7ec679bed904b0cf9b2a4170

=======
>>>>>>> 52acf1ec9f9f9d783609430f7f93bf8e8c7f5b78
  mode: 'card',
  cardStyle: {
    backgroundColor:"transperent"
}
}
);
