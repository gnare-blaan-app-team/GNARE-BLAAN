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
import Prayer1_Screen from './screens/CultureandArts/cultureandartsScreens/prayers/prayers1Screen';
import Prayer2_Screen from './screens/CultureandArts/cultureandartsScreens/prayers/prayers2Screen';
import Prayer3_Screen from './screens/CultureandArts/cultureandartsScreens/prayers/prayers3Screen';
import Chant1_Screen from './screens/CultureandArts/cultureandartsScreens/chants/chants1Screen';
import Chant2_Screen from './screens/CultureandArts/cultureandartsScreens/chants/chants2Screen';
import Chant3_Screen from './screens/CultureandArts/cultureandartsScreens/chants/chants3Screen';
import Kastifun1_Screen from './screens/CultureandArts/cultureandartsScreens/kastifun/kastifun1Screen';
import Kastifun2_Screen from './screens/CultureandArts/cultureandartsScreens/kastifun/kastifun2Screen';

// Games
import GameMenu from './screens/Games/GameMenu';
import DadSe from './screens/Games/DadSe/DadSe';
import DadSeTanbu1 from './screens/Games/DadSe/DadSeTanbu1';
import DadSeTanbu2 from './screens/Games/DadSe/DadSeTanbu2';
import DadSeTanbu3 from './screens/Games/DadSe/DadSeTanbu3';
import DadSeProceed from './screens/Games/DadSe/DadSeProceed';
import DadSeMarket from './screens/Games/DadSe/DadSeMarket';
import DadSeBank from './screens/Games/DadSe/DadSeBank';
import DadSeBankQuestion from './screens/Games/DadSe/DadSeBankQuestion';
import DadSeEnd from './screens/Games/DadSe/DadSeEnd';

import DadBatak from './screens/Games/dadbatak/DadBatak';
import DadBatakTanbu1 from './screens/Games/dadbatak/Tanbu1';
import DadBatakTanbu2 from './screens/Games/dadbatak/Tanbu2';
import DadBatakTanbu3 from './screens/Games/dadbatak/Tanbu3';
import DadBatakProceed from './screens/Games/dadbatak/DadBatakProceed';
import DadBatakMarket from './screens/Games/dadbatak/DadBatakMarket';

//Dad Batak - Bang 1
import Bang1Question1 from './screens/Games/dadbatak/Bang1/Bang1Question1';
import Bang1Question2 from './screens/Games/dadbatak/Bang1/Bang1Question2';
import Bang1Question3 from './screens/Games/dadbatak/Bang1/Bang1Question3';
import Bang1Question4 from './screens/Games/dadbatak/Bang1/Bang1Question4';
import Bang1Question5 from './screens/Games/dadbatak/Bang1/Bang1Question5';
import Bang1Question6 from './screens/Games/dadbatak/Bang1/Bang1Question6';
import Bang1Question7 from './screens/Games/dadbatak/Bang1/Bang1Question7';
import Bang1Question8 from './screens/Games/dadbatak/Bang1/Bang1Question8';
import Bang1Question9 from './screens/Games/dadbatak/Bang1/Bang1Question9';
import Bang1Question10 from './screens/Games/dadbatak/Bang1/Bang1Question10';
import Bang1Question11 from './screens/Games/dadbatak/Bang1/Bang1Question11';
import Bang1Question12 from './screens/Games/dadbatak/Bang1/Bang1Question12';

//Dad Batak - Bang 2
import Bang2Question1 from './screens/Games/dadbatak/Bang2/Bang2Question1';
import Bang2Question2 from './screens/Games/dadbatak/Bang2/Bang2Question2';
import Bang2Question3 from './screens/Games/dadbatak/Bang2/Bang2Question3';
import Bang2Question4 from './screens/Games/dadbatak/Bang2/Bang2Question4';
import Bang2Question5 from './screens/Games/dadbatak/Bang2/Bang2Question5';
import Bang2Question6 from './screens/Games/dadbatak/Bang2/Bang2Question6';
import Bang2Question7 from './screens/Games/dadbatak/Bang2/Bang2Question7';
import Bang2Question8 from './screens/Games/dadbatak/Bang2/Bang2Question8';
import Bang2Question9 from './screens/Games/dadbatak/Bang2/Bang2Question9';
import Bang2Question10 from './screens/Games/dadbatak/Bang2/Bang2Question10';
import Bang2Question11 from './screens/Games/dadbatak/Bang2/Bang2Question11';
import Bang2Question12 from './screens/Games/dadbatak/Bang2/Bang2Question12';
import Bang2Question13 from './screens/Games/dadbatak/Bang2/Bang2Question13';
import Bang2Question14 from './screens/Games/dadbatak/Bang2/Bang2Question14';
import Bang2Question15 from './screens/Games/dadbatak/Bang2/Bang2Question15';
import Bang2Question16 from './screens/Games/dadbatak/Bang2/Bang2Question16';

//Dad Batak - Bang 3
import Bang3Question1 from './screens/Games/dadbatak/Bang3/Bang3Question1';
import Bang3Question2 from './screens/Games/dadbatak/Bang3/Bang3Question2';
import Bang3Question3 from './screens/Games/dadbatak/Bang3/Bang3Question3';
import Bang3Question4 from './screens/Games/dadbatak/Bang3/Bang3Question4';
import Bang3Question5 from './screens/Games/dadbatak/Bang3/Bang3Question5';
import Bang3Question6 from './screens/Games/dadbatak/Bang3/Bang3Question6';
import Bang3Question7 from './screens/Games/dadbatak/Bang3/Bang3Question7';
import Bang3Question8 from './screens/Games/dadbatak/Bang3/Bang3Question8';
import Bang3Question9 from './screens/Games/dadbatak/Bang3/Bang3Question9';
import Bang3Question10 from './screens/Games/dadbatak/Bang3/Bang3Question10';
import Bang3Question11 from './screens/Games/dadbatak/Bang3/Bang3Question11';
import Bang3Question12 from './screens/Games/dadbatak/Bang3/Bang3Question12';

//Dad Se - Bang 1
import DSBang1Question1 from './screens/Games/DadSe/Bang1/DSBang1Question1';
import DSBang1Question2 from './screens/Games/DadSe/Bang1/DSBang1Question2';
import DSBang1Question3 from './screens/Games/DadSe/Bang1/DSBang1Question3';
import DSBang1Question4 from './screens/Games/DadSe/Bang1/DSBang1Question4';
import DSBang1Question5 from './screens/Games/DadSe/Bang1/DSBang1Question5';
import DSBang1Question6 from './screens/Games/DadSe/Bang1/DSBang1Question6';
import DSBang1Question7 from './screens/Games/DadSe/Bang1/DSBang1Question7';
import DSBang1Question8 from './screens/Games/DadSe/Bang1/DSBang1Question8';
import DSBang1Question9 from './screens/Games/DadSe/Bang1/DSBang1Question9';
import DSBang1Question10 from './screens/Games/DadSe/Bang1/DSBang1Question10';

//Dad Se - Bang 2
import DSBang2Question1 from './screens/Games/DadSe/Bang2/DSBang2Question1';
import DSBang2Question2 from './screens/Games/DadSe/Bang2/DSBang2Question2';
import DSBang2Question3 from './screens/Games/DadSe/Bang2/DSBang2Question3';
import DSBang2Question4 from './screens/Games/DadSe/Bang2/DSBang2Question4';
import DSBang2Question5 from './screens/Games/DadSe/Bang2/DSBang2Question5';
import DSBang2Question6 from './screens/Games/DadSe/Bang2/DSBang2Question6';
import DSBang2Question7 from './screens/Games/DadSe/Bang2/DSBang2Question7';
import DSBang2Question8 from './screens/Games/DadSe/Bang2/DSBang2Question8';
import DSBang2Question9 from './screens/Games/DadSe/Bang2/DSBang2Question9';
import DSBang2Question10 from './screens/Games/DadSe/Bang2/DSBang2Question10';

//Dad Se - Bang 3
import DSBang3Question1 from './screens/Games/DadSe/Bang3/DSBang3Question1';
import DSBang3Question2 from './screens/Games/DadSe/Bang3/DSBang3Question2';
import DSBang3Question3 from './screens/Games/DadSe/Bang3/DSBang3Question3';
import DSBang3Question4 from './screens/Games/DadSe/Bang3/DSBang3Question4';
import DSBang3Question5 from './screens/Games/DadSe/Bang3/DSBang3Question5';

import Bang from './screens/Games/DadSe/Bang1/Bang';

//Letter Tracing
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
import TenTracing from './screens/Numbers/NumberTracing/10Tracing';


import Try from './try';


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
    tracing10: TenTracing,
    


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
    prayer1Screen: Prayer1_Screen,
    prayer2Screen: Prayer2_Screen,
    prayer3Screen: Prayer3_Screen,
    chant1Screen: Chant1_Screen,
    chant2Screen: Chant2_Screen,
    chant3Screen: Chant3_Screen,
    kastifun1Screen: Kastifun1_Screen,
    kastifun2Screen: Kastifun2_Screen,

    //Games
    gameMenu: GameMenu,
    dadse : DadSe,
    dadseTanbu1: DadSeTanbu1, 
    dadseTanbu2: DadSeTanbu2,
    dadseTanbu3: DadSeTanbu3,
    dadseProceed: DadSeProceed,
    dadseMarket: DadSeMarket,
    dadseBank: DadSeBank,
    dadseBankQuestion: DadSeBankQuestion,
    dadseEnd: DadSeEnd,

    dadbatak: DadBatak,
    dadbataktanbu1: DadBatakTanbu1,
    dadbataktanbu2: DadBatakTanbu2,
    dadbataktanbu3: DadBatakTanbu3,
    dadbatakproceed: DadBatakProceed,
    dadbatakmarket: DadBatakMarket,

    //Dad Batak - Bang 1

    db_bang1Question1: Bang1Question1,
    db_bang1Question2: Bang1Question2,
    db_bang1Question3: Bang1Question3,
    db_bang1Question4: Bang1Question4,
    db_bang1Question5: Bang1Question5,
    db_bang1Question6: Bang1Question6,
    db_bang1Question7: Bang1Question7,
    db_bang1Question8: Bang1Question8,
    db_bang1Question9: Bang1Question9,
    db_bang1Question10: Bang1Question10,
    db_bang1Question11: Bang1Question11,
    db_bang1Question12: Bang1Question12,

    //Dad Batak - Bang 2
    db_bang2Question1: Bang2Question1,
    db_bang2Question2: Bang2Question2,
    db_bang2Question3: Bang2Question3,
    db_bang2Question4: Bang2Question4,
    db_bang2Question5: Bang2Question5,
    db_bang2Question6: Bang2Question6,
    db_bang2Question7: Bang2Question7,
    db_bang2Question8: Bang2Question8,
    db_bang2Question9: Bang2Question9,
    db_bang2Question10: Bang2Question10,
    db_bang2Question11: Bang2Question11,
    db_bang2Question12: Bang2Question12,
    db_bang2Question13: Bang2Question13,
    db_bang2Question14: Bang2Question14,
    db_bang2Question15: Bang2Question15,
    db_bang2Question16: Bang2Question16,

    //Dad Batak - Bang 3
    db_bang3Question1: Bang3Question1,
    db_bang3Question2: Bang3Question2,
    db_bang3Question3: Bang3Question3,
    db_bang3Question4: Bang3Question4,
    db_bang3Question5: Bang3Question5,
    db_bang3Question6: Bang3Question6,
    db_bang3Question7: Bang3Question7,
    db_bang3Question8: Bang3Question8,
    db_bang3Question9: Bang3Question9,
    db_bang3Question10: Bang3Question10,
    db_bang3Question11: Bang3Question11,
    db_bang3Question12: Bang3Question12,

    //Dad Se - Bang 1
    ds_bang1Question1: DSBang1Question1,
    ds_bang1Question2: DSBang1Question2,
    ds_bang1Question3: DSBang1Question3,
    ds_bang1Question4: DSBang1Question4,
    ds_bang1Question5: DSBang1Question5,
    ds_bang1Question6: DSBang1Question6,
    ds_bang1Question7: DSBang1Question7,
    ds_bang1Question8: DSBang1Question8,
    ds_bang1Question9: DSBang1Question9,
    ds_bang1Question10: DSBang1Question10,

    //Dad Se - Bang 2
    ds_bang2Question1: DSBang2Question1,
    ds_bang2Question2: DSBang2Question2,
    ds_bang2Question3: DSBang2Question3,
    ds_bang2Question4: DSBang2Question4,
    ds_bang2Question5: DSBang2Question5,
    ds_bang2Question6: DSBang2Question6,
    ds_bang2Question7: DSBang2Question7,
    ds_bang2Question8: DSBang2Question8,
    ds_bang2Question9: DSBang2Question9,
    ds_bang2Question10: DSBang2Question10,

    //Dad Se - Bang 3s
    ds_bang3Question1: DSBang3Question1,
    ds_bang3Question2: DSBang3Question2,
    ds_bang3Question3: DSBang3Question3,
    ds_bang3Question4: DSBang3Question4,
    ds_bang3Question5: DSBang3Question5,

    bang: Bang
  },
{

    initialRouteName:"home",
    mode: 'card',
    cardStyle: {
    backgroundColor:"transperent"
}
}
);
