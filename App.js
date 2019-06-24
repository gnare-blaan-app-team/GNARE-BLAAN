import { createStackNavigator} from "react-navigation";
import { useScreens } from 'react-native-screens';
import HomeScreen from './screens/HomePage';
import MainMenu from './screens/MainMenu';
import LetterScreen from './screens/Letters/letterScreen';
import Numbers from './screens/Numbers/NumbersScreen';

import NumberIntroScreen from './screens/Numbers/NumberIntroScreen';
import LetterIntroScreen from './screens/Letters/LetterIntroScreen';

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

//Vocabulary7
import Vocabulary7 from './screens/Vocabulary/vocabulary7/vocabulary7';

//Vocabulary8
import Vocabulary8 from './screens/Vocabulary/vocabulary8/vocabulary8';

//Vocabulary9
import Vocabulary9 from './screens/Vocabulary/vocabulary9/vocabulary9';

//Vocabulary10
import Vocabulary10 from './screens/Vocabulary/vocabulary10/vocabulary10';

// Culture and Arts Import

import cultureandartsMain from './screens/CultureandArts/cultureandartsMain';
import Chants_Screen from './screens/CultureandArts/cultureandartsScreens/chantsScreen';
import Kastifun_Screen from './screens/CultureandArts/cultureandartsScreens/kastifunScreen';
import Prayers_Screen from './screens/CultureandArts/cultureandartsScreens/prayersScreen';
import DasalBagoMatulogPlay from './screens/CultureandArts/cultureandartsScreens/prayers/DasalBagoMatulogPlay';

// Games
// import GameMenu from './screens/Games/GameMenu';
// import DadSe from './screens/Games/DadSe/DadSe';
// import DadSeTanbu1 from './screens/Games/DadSe/DadSeTanbu1';
// import DadSeTanbu2 from './screens/Games/DadSe/DadSeTanbu2';
// import DadSeTanbu3 from './screens/Games/DadSe/DadSeTanbu3';
// import DadSeTanbu4 from './screens/Games/DadSe/DadSeTanbu4';
// import DadBatak from './screens/Games/DadBatak';

// import DadBatakTanbu1 from './screens/Games/dadbatak/Tanbu1';
// import DadBatakTanbu2 from './screens/Games/dadbatak/Tanbu2';
// import DadBatakTanbu3 from './screens/Games/dadbatak/Tanbu3';


// Letter Tracing
import ATracing from './screens/Letters/LetterTracing/ATracing';
import BTracing from './screens/Letters/LetterTracing/BTracing';
import DTracing from './screens/Letters/LetterTracing/DTracing';
import ETracing from './screens/Letters/LetterTracing/ETracing';
import FTracing from './screens/Letters/LetterTracing/FTracing';
import HTracing from './screens/Letters/LetterTracing/HTracing';
import GTracing from './screens/Letters/LetterTracing/GTracing';
import ITracing from './screens/Letters/LetterTracing/ITracing';
import KTracing from './screens/Letters/LetterTracing/KTracing';
import LTracing from './screens/Letters/LetterTracing/LTracing';
import MTracing from './screens/Letters/LetterTracing/MTracing';
import NTracing from './screens/Letters/LetterTracing/NTracing';
import OTracing from './screens/Letters/LetterTracing/OTracing';
import STracing from './screens/Letters/LetterTracing/STracing';
import TTracing from './screens/Letters/LetterTracing/TTracing';
import UTracing from './screens/Letters/LetterTracing/UTracing';
import WTracing from './screens/Letters/LetterTracing/WTracing';
import YTracing from './screens/Letters/LetterTracing/YTracing';


// Number Tracing
import OneTracing from './screens/Numbers/NumberTracing/1Tracing';
import TwoTracing from './screens/Numbers/NumberTracing/2Tracing';
import ThreeTracing from './screens/Numbers/NumberTracing/3Tracing';
import FourTracing from './screens/Numbers/NumberTracing/4Tracing';
import FiveTracing from './screens/Numbers/NumberTracing/5Tracing';
import SixTracing from './screens/Numbers/NumberTracing/6Tracing';
import SevenTracing from './screens/Numbers/NumberTracing/7Tracing';
import EightTracing from './screens/Numbers/NumberTracing/8Tracing';
import NineTracing from './screens/Numbers/NumberTracing/9Tracing';
//import TenTracing from './screens/Numbers/NumberTracing/10Tracing';


useScreens();


export default AppNavigator = createStackNavigator(
{
    home: HomeScreen,
    mainMenu: MainMenu,
    letters: LetterScreen,
    numbers: Numbers,


    // Letters
    letterIntro: LetterIntroScreen,

    // Letter Tracing
    tracingA: ATracing,
    tracingB: BTracing,
    tracingD: DTracing,
    tracingE: ETracing,
    tracingF: FTracing,
    tracingG: GTracing,
    tracingH: HTracing,
    tracingI: ITracing,
    tracingK: KTracing,
    tracingL: LTracing,
    tracingM: MTracing,
    tracingN: NTracing,
    tracingO: OTracing,
    tracingS: STracing,
    tracingT: TTracing,
    tracingU: UTracing,
    tracingW: WTracing,
    tracingY: YTracing,

    // Number Tracing
    tracing1: OneTracing,
    tracing2: TwoTracing,
    tracing3: ThreeTracing,
    tracing4: FourTracing,
    tracing5: FiveTracing,
    tracing6: SixTracing,
    tracing7: SevenTracing,
    tracing8: EightTracing,
    tracing9: NineTracing,
    //tracing10: TenTracing,
    


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

    //Vocabulary7
    vocabulary7: Vocabulary7,

    //Vocabulary8
    vocabulary8: Vocabulary8,

    //Vocabulary9
    vocabulary9: Vocabulary9,

    //Vocabulary10
    vocabulary10: Vocabulary10,

    //Culture and Arts
    cultureandarts: cultureandartsMain,
    chantsScreen: Chants_Screen,
    kastifunScreen: Kastifun_Screen,
    prayersScreen: Prayers_Screen,
    dasalbagomatulogPlay: DasalBagoMatulogPlay,

    // //Games
    // gameMenu: GameMenu,
    // dadse : DadSe,
    // dadseTanbu1: DadSeTanbu1, 
    // dadseTanbu2: DadSeTanbu2,
    // dadseTanbu3: DadSeTanbu3,
    // dadseTanbu4: DadSeTanbu4,
    // dadbatak: DadBatak,
    // dadbataktanbu1: DadBatakTanbu1,
    // dadbataktanbu2: DadBatakTanbu2,
    // dadbataktanbu3: DadBatakTanbu3,

    // //Dad Batak - Bang 1
    // db_bang1Question1: Bang1Question1,
    // db_bang1Question2: Bang1Question2,
    // db_bang1Question3: Bang1Question3,
    // db_bang1Question4: Bang1Question4,
    // db_bang1Question5: Bang1Question5,
    // db_bang1Question6: Bang1Question6,
    // db_bang1Question7: Bang1Question7,
    // db_bang1Question8: Bang1Question8,
    // db_bang1Question9: Bang1Question9,
    // db_bang1Question10: Bang1Question10,
    // db_bang1Question11: Bang1Question11,
    // db_bang1Question12: Bang1Question12,

    // //Dad Se - Bang 1
    // ds_bang1Question1: DSBang1Question1,
    // ds_bang1Question2: DSBang1Question2,
    // ds_bang1Question3: DSBang1Question3,
    // ds_bang1Question4: DSBang1Question4,
    // ds_bang1Question5: DSBang1Question5,
    // ds_bang1Question6: DSBang1Question6,
    // ds_bang1Question7: DSBang1Question7,
    // ds_bang1Question10: DSBang1Question10,
  },
{

    initialRouteName:"tracing6",
    mode: 'card',
    cardStyle: {
    backgroundColor:"transperent"
}
}
);
