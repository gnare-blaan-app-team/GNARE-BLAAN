import React, { Component } from 'react';
import { Text, View, Image, PanResponder, StyleSheet, TouchableOpacity, BackHandler, ImageBackground, AsyncStorage} from 'react-native';
import { withNavigation } from 'react-navigation';
import GameBG from '../../gameImages/GameBG.png';
import { globalStyleSheet } from '../../../globalStyleSheet/globalStyleSheet';
import * as Animatable from 'react-native-animatable';
import Home_icon from '../../../images/Home_icon.png';
import Back_icon from '../../../images/Back_icon.png';
import stars from '../../gameImages/12Icon_Star.png';
import emptyStars from '../../gameImages/13Icon_EmptyStar.png';
import FadlugIcon from '../../gameImages/fadlug_icon.png';
import LamwaIcon from '../../gameImages/lamwa_icon.png';
import GufadyanIcon from '../../gameImages/gufadyan_icon.png';
import Gufadyan from '../../gameImages/gufadyan.png';
import Coins from '../../gameImages/Coinbank.png';
import Sound from 'react-native-sound';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import choiceSatu from '../../gameImages/choices2/DSB2_satu.png';
import choiceLwe from '../../gameImages/choices2/DSB2_iwe.png';
import choiceTlu from '../../gameImages/choices2/DSB2_tlu.png';
import choiceFat from '../../gameImages/choices2/DSB2_fat.png';
import choiceLime from '../../gameImages/choices2/DSB2_lime.png';
import choiceNam from '../../gameImages/choices2/DSB2_nam.png';
import choiceFitu from '../../gameImages/choices2/DSB2_fitu.png';
import choiceWalu from '../../gameImages/choices2/DSB2_walu.png';
import choiceSyem from '../../gameImages/choices2/DSB2_syem.png';
import choiceSfalo from '../../gameImages/choices2/DSB2_sfalo.png';


import correctSatu from '../../gameImages/choices2/correctb2Satu.png';
import correctLwe from '../../gameImages/choices2/correctb2Lwe.png';
import correctTlu from '../../gameImages/choices2/correctb2Tlu.png';
import correctFat from '../../gameImages/choices2/correctb2Fat.png';
import correctLime from '../../gameImages/choices2/correctb2Lime.png';
import correctNam from '../../gameImages/choices2/correctb2Nam.png';
import correctFitu from '../../gameImages/choices2/correctb2Fitu.png';
import correctWalu from '../../gameImages/choices2/correctb2Walu.png';
import correctSyem from '../../gameImages/choices2/correctb2Syem.png';
import correctSfalo from '../../gameImages/choices2/correctb2Sfalo.png';


import transparentSatu from '../../gameImages/choices2/tranparentb2Satu.png';
import transparentLwe from '../../gameImages/choices2/tranparentb2Lwe.png';
import transparentTlu from '../../gameImages/choices2/tranparentb2Tlu.png';
import transparentFat from '../../gameImages/choices2/tranparentb2Fat.png';
import transparentLime from '../../gameImages/choices2/tranparentb2Lime.png';
import transparentNam from '../../gameImages/choices2/tranparentb2Nam.png';
import transparentFitu from '../../gameImages/choices2/tranparentb2Fitu.png';
import transparentWalu from '../../gameImages/choices2/tranparentb2Walu.png';
import transparentSyem from '../../gameImages/choices2/tranparentb2Syem.png';
import transparentSfalo from '../../gameImages/choices2/tranparentb2Sfalo.png';

import Empty from '../../gameImages/choices/emptyChoices.png';

import BlackBoard1 from '../../gameImages/blackboard2/DS_bang2Q1.png';
import BlackBoard2 from '../../gameImages/blackboard2/DS_bang2Q2.png';
import BlackBoard3 from '../../gameImages/blackboard2/DS_bang2Q3.png';
import BlackBoard4 from '../../gameImages/blackboard2/DS_bang2Q4.png';
import BlackBoard5 from '../../gameImages/blackboard2/DS_bang2Q5.png';
import BlackBoard6 from '../../gameImages/blackboard2/DS_bang2Q6.png';
import BlackBoard7 from '../../gameImages/blackboard2/DS_bang2Q7.png';
import BlackBoard8 from '../../gameImages/blackboard2/DS_bang2Q8.png';
import BlackBoard9 from '../../gameImages/blackboard2/DS_bang2Q9.png';
import BlackBoard10 from '../../gameImages/blackboard2/DS_bang2Q10.png';

import Answer1 from '../../gameImages/blackboard2/bang2A1.png';
import Answer2 from '../../gameImages/blackboard2/bang2A2.png';
import Answer3 from '../../gameImages/blackboard2/bang2A3.png';
import Answer4 from '../../gameImages/blackboard2/bang2A4.png';
import Answer5 from '../../gameImages/blackboard2/bang2A5.png';
import Answer6 from '../../gameImages/blackboard2/bang2A6.png';
import Answer7 from '../../gameImages/blackboard2/bang2A7.png';
import Answer8 from '../../gameImages/blackboard2/bang2A8.png';
import Answer9 from '../../gameImages/blackboard2/bang2A9.png';
import Answer10 from '../../gameImages/blackboard2/bang2A10.png';

const SessionPlayer = '@MyApp:SessionPlayer';

var Realm = require('realm');
let realm;

Sound.setCategory('Playback');

const blackboardList = [
    BlackBoard1, 
    BlackBoard2, 
    BlackBoard3, 
    BlackBoard4, 
    BlackBoard5, 
    BlackBoard6, 
    BlackBoard7, 
    BlackBoard8, 
    BlackBoard9,
    BlackBoard10
];

const choiceList = [
    {
        choice: choiceSatu,
        choicestring: 'choiceSatu',
    },
    {
        choice: choiceLwe,
        choicestring: 'choiceLwe'
    },
    {
        choice: choiceTlu,
        choicestring: 'choiceTlu'
    },
    {
        choice: choiceFat,
        choicestring: 'choiceFat'
    },
    {
        choice: choiceLime,
        choicestring: 'choiceLime'
    },
    {
        choice: choiceNam,
        choicestring: 'choiceNam'
    },
    {
        choice: choiceFitu,
        choicestring: 'choiceFitu'
    },
    {
        choice: choiceWalu,
        choicestring: 'choiceWalu'
    },
    {
        choice: choiceSyem,
        choicestring: 'choiceSyem'
    },
    {
        choice: choiceSfalo,
        choicestring: 'choiceSfalo'
    },
];

const tranparent = [
    transparentSatu,
    transparentLwe,
    transparentTlu,
    transparentFat,
    transparentLime,
    transparentNam,
    transparentFitu,
    transparentWalu,
    transparentSyem,
    transparentSfalo,
];
const correct = [
    correctSatu,
    correctLwe,
    correctTlu,
    correctFat,
    correctLime,
    correctNam,
    correctFitu,
    correctWalu,
    correctSyem,
    correctSfalo,
];

const answer = [
    'choiceSatu',
    'choiceLwe',
    'choiceTlu',
    'choiceFat',
    'choiceLime',
    'choiceNam',
    'choiceFitu',
    'choiceWalu',
    'choiceSyem',
    'choiceSfalo',
];

const combine = [
    combine1 = {
        blackboard:blackboardList[0],
        choices1:choiceList[1].choice,
        choices2: choiceList[3].choice,
        choices3: choiceList[4].choice,
        choices4: choiceList[0].choice,
        choice1String: choiceList[1].choicestring,
        choice2String: choiceList[3].choicestring,
        choice3String: choiceList[4].choicestring,
        choice4String: choiceList[0].choicestring,
        answer: 'choiceSatu',
        description: Answer1
    },
    combine2 = {
        blackboard: blackboardList[1],
        choices1: choiceList[4].choice,
        choices2: choiceList[3].choice,
        choices3: choiceList[1].choice,
        choices4: choiceList[7].choice,
        choice1String: choiceList[4].choicestring,
        choice2String: choiceList[3].choicestring,
        choice3String: choiceList[1].choicestring,
        choice4String: choiceList[7].choicestring,
        answer: 'choiceLwe',
        description: Answer2
    },
    combine3 = {
        blackboard: blackboardList[2],
        choices1: choiceList[4].choice,
        choices2: choiceList[2].choice,
        choices3: choiceList[1].choice,
        choices4: choiceList[7].choice,
        choice1String: choiceList[4].choicestring,
        choice2String: choiceList[2].choicestring,
        choice3String: choiceList[1].choicestring,
        choice4String: choiceList[7].choicestring,
        answer: 'choiceTlu',
        description: Answer3
    },
    combine4 = {
        blackboard: blackboardList[3],
        choices1: choiceList[2].choice,
        choices2: choiceList[4].choice,
        choices3: choiceList[3].choice,
        choices4: choiceList[7].choice,
        choice1String: choiceList[2].choicestring,
        choice2String: choiceList[4].choicestring,
        choice3String: choiceList[3].choicestring,
        choice4String: choiceList[7].choicestring,
        answer: 'choiceFat',
        description: Answer4
    },
    combine5 = {
        blackboard: blackboardList[4],
        choices1: choiceList[1].choice,
        choices2: choiceList[4].choice,
        choices3: choiceList[3].choice,
        choices4: choiceList[7].choice,
        choice1String: choiceList[1].choicestring,
        choice2String: choiceList[4].choicestring,
        choice3String: choiceList[3].choicestring,
        choice4String: choiceList[7].choicestring,
        answer: 'choiceLime',
        description: Answer5
    },
    combine6 = {
        blackboard: blackboardList[5],
        choices1: choiceList[6].choice,
        choices2: choiceList[5].choice,
        choices3: choiceList[2].choice,
        choices4: choiceList[8].choice,
        choice1String: choiceList[6].choicestring,
        choice2String: choiceList[5].choicestring,
        choice3String: choiceList[2].choicestring,
        choice4String: choiceList[8].choicestring,
        answer: 'choiceNam',
        description: Answer6
    },
    combine7 = {
        blackboard: blackboardList[6],
        choices1: choiceList[6].choice,
        choices2: choiceList[7].choice,
        choices3: choiceList[8].choice,
        choices4: choiceList[5].choice,
        choice1String: choiceList[6].choicestring,
        choice2String: choiceList[7].choicestring,
        choice3String: choiceList[8].choicestring,
        choice4String: choiceList[5].choicestring,
        answer: 'choiceFitu',
        description: Answer7
    },
    combine8 = {
        blackboard: blackboardList[7],
        choices1: choiceList[5].choice,
        choices2: choiceList[8].choice,
        choices3: choiceList[7].choice,
        choices4: choiceList[9].choice,
        choice1String: choiceList[5].choicestring,
        choice2String: choiceList[8].choicestring,
        choice3String: choiceList[7].choicestring,
        choice4String: choiceList[9].choicestring,
        answer: 'choiceWalu',
        description: Answer8
    },
    combine9 = {
        blackboard: blackboardList[8],
        choices1: choiceList[7].choice,
        choices2: choiceList[2].choice,
        choices3: choiceList[5].choice,
        choices4: choiceList[8].choice,
        choice1String: choiceList[7].choicestring,
        choice2String: choiceList[2].choicestring,
        choice3String: choiceList[5].choicestring,
        choice4String: choiceList[8].choicestring,
        answer: 'choiceSyem',
        description: Answer9
    },
    combine10 = {
        blackboard: blackboardList[9],
        choices1: choiceList[5].choice,
        choices2: choiceList[9].choice,
        choices3: choiceList[8].choice,
        choices4: choiceList[6].choice,
        choice1String: choiceList[5].choicestring,
        choice2String: choiceList[9].choicestring,
        choice3String: choiceList[8].choicestring,
        choice4String: choiceList[6].choicestring,
        answer: 'choiceSfalo',
        description: Answer10
    }
];

const stageNumber = [0,1,2,3,4,5,6,7,8,9];

const questionAnswered = [];

const choiceGame = ['game_wrong', 'game_correct'];
const audio = ['dadse_1', 'dadse_2', 'dadse_3', 'dadse_4', 'dadse_5', 'dadse_6', 'dadse_7', 'dadse_8', 'dadse_9', 'dadse_10'];

//playsound
//answer
//correct
//combine[answer]


class Bang2 extends Component {
    handleViewRef = ref => this.view = ref;
    wrong = () => this.view.tada();
    Animatecorrect = () => this.view.pulse();
    StarAnimation = () => this.view.shake();
    static navigationOptions = {
        header: null,
    }

    constructor(props){
        super(props);
        this.state={
            max: stageNumber.length,
            getChoice1Name:'',
            getChoice2Name: '',
            getChoice3Name: '',
            getChoice4Name: '',
            answer:'',
            choice1Top: '1000%',//75%
            choice2Top: '1000%',//75%
            choice3Top: '1000%',//75%
            choice4Top: '1000%',//75%
            emptyChoiceLeft: '1000%',
            randomQuestion:0,
            answerTop: '1000%', //53%
            answerImage: transparentFat,
            descriptionTop:'1000%',
            blackboardTop:'1000%',
            star1Top:'1%',
            star2Top:'1%',
            star3Top:'1%',
            emptyStar1Top:'1000%',
            emptyStar2Top:'1000%',
            emptyStar3Top:'1000%',
            fadlugTop:'1000%',
            gufadyanTop:'1000%',
            marketBottom: '3%',
            lamwaTop:'1000%',
            Balance:0,
        }

        //Sound
        answerAudio = null;
    }

    componentDidMount() {
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);

        this.load('check');
        this.minusStar();
        this.checkBalance();
    }

    componentWillUnmount() {
        this.backHandler.remove()
      }
    
      handleBackPress = () => {
        this.goBack(); 
        return true;
      }

    playChoiceGame = (index) => {
        this.choiceGame = new Sound(choiceGame[index] + '.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            alert('failed to load the sound', error);
            return;
        } else {
            this.choiceGame.play();
        }});
    }

    playSound = (index) => {
        if (index == 'choiceSatu') {
            this.answerAudio = new Sound(audio[0] + '.mp3', Sound.MAIN_BUNDLE, (error) => {
                if (error) {
                    alert('failed to load the sound', error);
                    return;
                } else {
                    this.answerAudio.play();
                }
            });
        }
        if (index == 'choiceLwe') {
            this.answerAudio = new Sound(audio[1] + '.mp3', Sound.MAIN_BUNDLE, (error) => {
                if (error) {
                    alert('failed to load the sound', error);
                    return;
                } else {
                    this.answerAudio.play();
                }
            });
        }
        if (index == 'choiceTlu') {
            this.answerAudio = new Sound(audio[2] + '.mp3', Sound.MAIN_BUNDLE, (error) => {
                if (error) {
                    alert('failed to load the sound', error);
                    return;
                } else {
                    this.answerAudio.play();
                }
            });
        }
        if (index == 'choiceFat') {
            this.answerAudio = new Sound(audio[3] + '.mp3', Sound.MAIN_BUNDLE, (error) => {
                if (error) {
                    alert('failed to load the sound', error);
                    return;
                } else {
                    this.answerAudio.play();
                }
            });
        }
        if (index == 'choiceLime') {
            this.answerAudio = new Sound(audio[4] + '.mp3', Sound.MAIN_BUNDLE, (error) => {
                if (error) {
                    alert('failed to load the sound', error);
                    return;
                } else {
                    this.answerAudio.play();
                }
            });
        }
        if (index == 'choiceNam') {
            this.answerAudio = new Sound(audio[5] + '.mp3', Sound.MAIN_BUNDLE, (error) => {
                if (error) {
                    alert('failed to load the sound', error);
                    return;
                } else {
                    this.answerAudio.play();
                }
            });
        }
        if (index == 'choiceFitu') {
            this.answerAudio = new Sound(audio[6] + '.mp3', Sound.MAIN_BUNDLE, (error) => {
                if (error) {
                    alert('failed to load the sound', error);
                    return;
                } else {
                    this.answerAudio.play();
                }
            });
        }
        if (index == 'choiceWalu') {
            this.answerAudio = new Sound(audio[7] + '.mp3', Sound.MAIN_BUNDLE, (error) => {
                if (error) {
                    alert('failed to load the sound', error);
                    return;
                } else {
                    this.answerAudio.play();
                }
            });
        }
        if (index == 'choiceSyem') {
            this.answerAudio = new Sound(audio[8] + '.mp3', Sound.MAIN_BUNDLE, (error) => {
                if (error) {
                    alert('failed to load the sound', error);
                    return;
                } else {
                    this.answerAudio.play();
                }
            });
        }
        if (index == 'choiceSfalo') {
            this.answerAudio = new Sound(audio[9] + '.mp3', Sound.MAIN_BUNDLE, (error) => {
                if (error) {
                    alert('failed to load the sound', error);
                    return;
                } else {
                    this.answerAudio.play();
                }
            });
        }
  }

  stopSounds = () => {
    if (this.answerAudio != null){
      this.answerAudio.stop();
    }
  }

    checkBalance = async (index) => {
        const storedValue = await AsyncStorage.getItem(SessionPlayer);
        realm = new Realm({ path: 'PlayerDatabase.realm' });
        var getCoin = realm.objects('Players');

        var id = 0;
        var coin = '';
        for (a = 0; a < getCoin.length; a++) {
            const con = parseInt(a);
            if (storedValue == getCoin[con].playername) {
                coin = getCoin[con].coinBalance;
                id = con;
            }
        }
        if (coin == 'null') {
            const value = 0;
            this.setState({
                Balance: value,
            })
        } else {
            this.setState({
                Balance: coin
            })
        }

        if (index == 'addBalance') {
            if (this.state.Balance == 0) {
                const value = 1;
                realm.write(() => {
                    getCoin[id].coinBalance = String(value);
                })
                this.setState({
                    Balance: value,
                })
            } else {
                const convertToNumber = Number(this.state.Balance);
                this.state.Balance = convertToNumber + 2;
                realm.write(() => {
                    getCoin[id].coinBalance = String(this.state.Balance);
                })
                this.setState({
                    Balance: this.state.Balance,
                })
            }
        }

    }

    gotoMainMenu = () => {
        this.props.navigation.replace('mainMenu');
    }

    goBack = () => {
        this.stopSounds();
        this.props.navigation.replace('gameMenu',{showDadseBang:'show'});
    }

    goLamwa = () => {
        this.props.navigation.replace('gameMenu', { showDadseBang: 'show' });
    }

    goGufadyan = () => {
        this.props.navigation.replace('dadbatakmarket');
    }
    
    load = async (index) => {
        const storedValue = await AsyncStorage.getItem(SessionPlayer);
        realm = new Realm({ path: 'PlayerDatabase.realm' });
        var getPlayers = realm.objects('Players');
        var id = 0;
        var random = 0;
        const randomizer = Math.floor(Math.random() * stageNumber.length);
        var use = stageNumber[randomizer];
        stageNumber.splice(randomizer, 1);
        var q = '';
        for (a = 0; a < getPlayers.length; a++) {
            const con = parseInt(a);
            if (storedValue == getPlayers[con].playername) {
                q = getPlayers[con].questionDoneBang2;
            }
        }

        if (questionAnswered.length == 5 || q == 5) {
            for (a = 0; a < getPlayers.length; a++) {
                const con = parseInt(a);
                if (storedValue == getPlayers[con].playername) {
                    realm.write(() => {
                        getPlayers[con].star1 = 'null';
                        getPlayers[con].star2 = 'null';
                        getPlayers[con].star3 = 'null';
                        getPlayers[con].questionDoneBang2 = 'null';
                        getPlayers[con].DSbangStage3 = 'unlock';
                    })
                }
            }
            this.props.navigation.replace('gameMenu', { show: 'Dadse', show3: 'Dadse2' });
        }
        if (index == 'check') {
            for (a = 0; a < getPlayers.length; a++) {
                const con = parseInt(a);
                if (storedValue == getPlayers[con].playername) {
                    random = getPlayers[con].dadseBang2RandomKey;
                    id = con;
                    if (random == 'null') {
                        realm.write(() => {
                            getPlayers[con].dadseBang2RandomKey = String(use);
                        })
                        this.setState({
                            randomQuestion: use,
                            choice1Top: '75%',//75%
                            choice2Top: '75%',//75%
                            choice3Top: '75%',//75%
                            choice4Top: '75%',//75%
                            blackboardTop: '14%',
                        });
                    } else {
                        this.setState({
                            randomQuestion: random,
                            choice1Top: '75%',//75%
                            choice2Top: '75%',//75%
                            choice3Top: '75%',//75%
                            choice4Top: '75%',//75%
                            blackboardTop: '14%',
                        });
                        stageNumber.splice(random, 1);
                    }
                }
            }
        }

        if (index == 'next') {
            this.setState({
                choice1Top: '1000%',//75%
                choice2Top: '1000%',//75%
                choice3Top: '1000%',//75%
                choice4Top: '1000%',//75%
                blackboardTop: '1000%',
            });
            realm.write(() => {
                getPlayers[id].dadseBang2RandomKey = String(use);
            })
            this.setState({
                randomQuestion: use,
                choice1Top: '75%',//75%
                choice2Top: '75%',//75%
                choice3Top: '75%',//75%
                choice4Top: '75%',//75%
                blackboardTop: '14%',
            });
        }

        if (index == 'retry') {
            this.setState({
                choice1Top: '1000%',//75%
                choice2Top: '1000%',//75%
                choice3Top: '1000%',//75%
                choice4Top: '1000%',//75%
                blackboardTop: '1000%',
            });
            realm.write(() => {
                getPlayers[id].dadseBang2RandomKey = String(use);
            })
            this.setState({
                randomQuestion: use,
                choice1Top: '75%',//75%
                choice2Top: '75%',//75%
                choice3Top: '75%',//75%
                choice4Top: '75%',//75%
                blackboardTop: '14%',
                marketBottom: '3%',
            });
        }
    }

    validate = async (index) => {
        if (index == 1) {
            if (this.state.getChoice1Name == this.state.answer) {
                this.correct(this.state.getChoice1Name);
                this.Animatecorrect();
                setTimeout(() => {
                    this.playSound(this.state.getChoice1Name);
                    this.setState({
                        answerTop: '1000%',
                        blackboardTop: '1000%',
                        descriptionTop: '14%',
                        choice1Top: '1000%',
                        choice2Top: '1000%',
                        choice3Top: '1000%',
                        choice4Top: '1000%'
                    });
                    setTimeout(() => {
                        const next = 'next';
                        this.load(next);
                        this.setState({
                            descriptionTop: '1000%',
                        });
                        setTimeout(() => {
                            this.setState({
                                answerTop: '1000%',
                                blackboardTop: '14%',
                                choice1Top: '75%',
                                choice2Top: '75%',
                                choice3Top: '75%',
                                choice4Top: '75%'
                            });
                        }, 1300)
                    }, 3000)
                }, 2000)
            } else {
                this.answer(this.state.getChoice1Name);
                this.wrong();
                const minus = 'minus';
                this.minusStar(minus);
                this.setState({
                    choice1Top: '1000%',
                    emptyChoiceLeft: '18%',
                })
                setTimeout(() => {
                    this.setState({
                        choice1Top: '75%',
                        emptyChoiceLeft: '1000%',
                    })
                }, 1000)
            }
        }
        if (index == 2) {
            if (this.state.getChoice2Name == this.state.answer) {
                this.correct(this.state.getChoice2Name);
                this.Animatecorrect();
                setTimeout(() => {
                    this.playSound(this.state.getChoice2Name);
                    this.setState({
                        answerTop: '1000%',
                        blackboardTop: '1000%',
                        descriptionTop: '14%',
                        choice1Top: '1000%',
                        choice2Top: '1000%',
                        choice3Top: '1000%',
                        choice4Top: '1000%'
                    });
                    setTimeout(() => {
                        const next = 'next';
                        this.load(next);
                        this.setState({
                            descriptionTop: '1000%',
                        });
                        setTimeout(() => {
                            this.setState({
                                answerTop: '1000%',
                                blackboardTop: '14%',
                                choice1Top: '75%',
                                choice2Top: '75%',
                                choice3Top: '75%',
                                choice4Top: '75%'
                            });
                        }, 1300)
                    }, 3000)
                }, 2000)
            } else {
                this.wrong();
                const minus = 'minus';
                this.minusStar(minus);
                this.answer(this.state.getChoice2Name);
                this.setState({
                    choice2Top: '1000%',
                    emptyChoiceLeft: '35%',
                })
                setTimeout(() => {
                    this.setState({
                        choice2Top: '75%',
                        emptyChoiceLeft: '1000%',
                    })
                }, 1000)
            }
        }
        if (index == 3) {
            if (this.state.getChoice3Name == this.state.answer) {
                this.correct(this.state.getChoice3Name);
                this.Animatecorrect();
                setTimeout(() => {
                    this.playSound(this.state.getChoice3Name);
                    this.setState({
                        answerTop: '1000%',
                        blackboardTop: '1000%',
                        descriptionTop: '14%',
                        choice1Top: '1000%',
                        choice2Top: '1000%',
                        choice3Top: '1000%',
                        choice4Top: '1000%'
                    });
                    setTimeout(() => {
                        const next = 'next';
                        this.load(next);
                        this.setState({
                            descriptionTop: '1000%',
                        });
                        setTimeout(() => {
                            this.setState({
                                answerTop: '1000%',
                                blackboardTop: '14%',
                                choice1Top: '75%',
                                choice2Top: '75%',
                                choice3Top: '75%',
                                choice4Top: '75%'
                            });
                        }, 1300)
                    }, 3000)
                }, 2000)
            } else {
                this.wrong();
                const minus = 'minus';
                this.minusStar(minus);
                this.answer(this.state.getChoice3Name);
                this.setState({
                    choice3Top: '1000%',
                    emptyChoiceLeft: '53%',
                })
                setTimeout(() => {
                    this.setState({
                        choice3Top: '75%',
                        emptyChoiceLeft: '1000%',
                    })
                }, 1000)
            }
        }
        if (index == 4) {
            if (this.state.getChoice4Name == this.state.answer) {
                this.correct(this.state.getChoice4Name);
                this.Animatecorrect();
                setTimeout(() => {
                    this.playSound(this.state.getChoice4Name);
                    this.setState({
                        answerTop: '1000%',
                        blackboardTop: '1000%',
                        descriptionTop: '14%',
                        choice1Top: '1000%',
                        choice2Top: '1000%',
                        choice3Top: '1000%',
                        choice4Top: '1000%'
                    });
                    setTimeout(() => {
                        const next = 'next';
                        this.load(next);
                        this.setState({
                            descriptionTop: '1000%',
                        });
                        setTimeout(() => {
                            this.setState({
                                answerTop: '1000%',
                                blackboardTop: '14%',
                                choice1Top: '75%',
                                choice2Top: '75%',
                                choice3Top: '75%',
                                choice4Top: '75%'
                            });
                        }, 1300)
                    }, 3000)
                }, 2000)
            } else {
                this.wrong();
                const minus = 'minus';
                this.minusStar(minus);
                this.answer(this.state.getChoice4Name);
                this.setState({
                    choice4Top: '1000%',
                    emptyChoiceLeft: '70%',
                })
                setTimeout(() => {
                    this.setState({
                        choice4Top: '75%',
                        emptyChoiceLeft: '1000%',
                    })
                }, 1000)
            }
        }
    }

    answer = (index) => {
        this.playChoiceGame(0);
        for (var a = 0; a <= answer.length; a++) {
            if (index == answer[a]) {
                const get = a;
                this.setState({
                    answerImage: tranparent[get],
                    answerTop: '49%',
                })
                setTimeout(() => {
                    this.setState({
                        answerTop: '1000%',
                    })
                }, 1000)
            }
        }
    }

    correct = async (index) => {
        this.playChoiceGame(1);
        const add = 'addBalance';
        this.checkBalance(add);
        questionAnswered.push(1);
        var value = JSON.stringify(questionAnswered.length);
        const storedValue = await AsyncStorage.getItem(SessionPlayer);
        realm = new Realm({ path: 'PlayerDatabase.realm' });
        var getPlayers = realm.objects('Players');

        for (a = 0; a < getPlayers.length; a++) {
            const con = parseInt(a);
            if (storedValue == getPlayers[con].playername) {
                realm.write(() => {
                    getPlayers[con].questionDoneBang2 = String(value);
                })
            }
        }

        for (var a = 0; a <= answer.length; a++) {
            if (index == answer[a]) {
                const get = a;
                this.setState({
                    answerImage: correct[get],
                    answerTop: '49%',
                    choice1Top: '1000%',
                    choice2Top: '1000%',
                    choice3Top: '1000%',
                    choice4Top: '1000%'
                })
                setTimeout(() => {
                    this.setState({
                        answerTop: '1000%',
                    })
                }, 1000)
            }
        }
    }

    minusStar = async (index) => {
        const storedValue = await AsyncStorage.getItem(SessionPlayer);
        realm = new Realm({ path: 'PlayerDatabase.realm' });
        var getStars = realm.objects('Players');
        var id = 0;
        var star1 = '';
        var star2 = '';
        var star3 = '';
        for (a = 0; a < getStars.length; a++) {
            const con = parseInt(a);
            if (storedValue == getStars[con].playername) {
                star1 = getStars[con].star1;
                star2 = getStars[con].star2;
                star3 = getStars[con].star3;
                id = con;

            }
        }
        if (star1 == 'wrong') {
            this.setState({
                star3Top: '1000%',
                emptyStar3Top: '1%',
            })
        }

        if (star2 == 'wrong') {
            this.setState({
                star2Top: '1000%',
                emptyStar2Top: '1%',
            })
        }

        if (star3 == 'wrong') {
            this.setState({
                star3Top: '1000%',
                emptyStar3Top: '1%',
            })
        }

        if (index == 'minus') {
            if (star1 == 'null') {
                realm.write(() => {
                    getStars[id].star1 = 'wrong';
                })
                this.setState({
                    star3Top: '1000%',
                    emptyStar3Top: '1%',
                })
            } else {
                if (star2 == 'null') {
                    realm.write(() => {
                        getStars[id].star2 = 'wrong';
                    })
                    this.setState({
                        star2Top: '1000%',
                        emptyStar2Top: '1%',
                    })
                } else {
                    if (star3 == 'null') {
                        realm.write(() => {
                            getStars[id].star3 = 'wrong';
                        })
                        setTimeout(() => {
                            this.setState({
                                star1Top: '1000%',
                                emptyStar1Top: '1%',
                                fadlugTop: '19%',
                                gufadyanTop: '19%',
                                lamwaTop: '56%',
                                choice1Top: '1000%',//75%
                                choice2Top: '1000%',//75%
                                choice3Top: '1000%',//75%
                                choice4Top: '1000%',//75%
                                blackboardTop: '1000%',
                                star1Top: '1000%',
                                star2Top: '1000%',
                                star3Top: '1000%',
                                emptyStar1Top: '1000%',
                                emptyStar2Top: '1000%',
                                emptyStar3Top: '1000%',
                                marketBottom: '1000%',
                            })
                        }, 1000)
                    }
                }
            }
        }
    }

    retry = async () => {
        const storedValue = await AsyncStorage.getItem(SessionPlayer);
        realm = new Realm({ path: 'PlayerDatabase.realm' });
        var getStars = realm.objects('Players');
        var id = 0;

        for (a = 0; a < getStars.length; a++) {
            const con = parseInt(a);
            if (storedValue == getStars[con].playername) {
                realm.write(() => {
                    getStars[con].star1 = 'null';
                    getStars[con].star2 = 'null';
                    getStars[con].star3 = 'null';
                })
            }
        }
        const retry = 'retry';
        this.load(retry);
        this.setState({
            star1Top: '1%',
            star2Top: '1%',
            star3Top: '1%',
            emptyStar1Top: '1000%',
            emptyStar2Top: '1000%',
            emptyStar3Top: '1000%',
            choice1Top: '75%',//75%
            choice2Top: '75%',//75%
            choice3Top: '75%',//75%
            choice4Top: '75%',//75%
            blackboardTop: '14%',
            fadlugTop: '1000%',
            gufadyanTop: '1000%',
            lamwaTop: '1000%',
        })

    }

    render() {
        const show = combine[this.state.randomQuestion];//this.state.randomQuestion
        const convert1 = show.choice1String;
        this.state.getChoice1Name = convert1;
        const convert2 = show.choice2String;
        this.state.getChoice2Name = convert2;
        const convert3 = show.choice3String;
        this.state.getChoice3Name = convert3;
        const convert4 = show.choice4String;
        this.state.getChoice4Name = convert4;
        const answer = show.answer;
        this.state.answer = answer;
        return (
            <ImageBackground
                source={GameBG}
                style={globalStyleSheet.image}
            >
                <View style={globalStyleSheet.homeContainer}>
                    <TouchableOpacity onPress={this.gotoMainMenu}>
                        <Image source={Home_icon} style={globalStyleSheet.home}></Image>
                    </TouchableOpacity>
                </View>
                <View style={globalStyleSheet.backContainer}>
                    <TouchableOpacity onPress={this.goBack}>
                        <Image
                            source={Back_icon}
                            style={globalStyleSheet.back}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={{
                     position: 'absolute',
                     bottom: this.state.marketBottom,
                     right: '8%',
                     height: hp('9%'),
                     width: wp('18%'),
                }}>
                    <TouchableOpacity onPress={this.goGufadyan}>
                        <Image
                            source={Gufadyan}
                            style={styles.image}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={{ position: 'absolute',width:'60%',height:'50%',top:this.state.blackboardTop}}> 
                    <Image source={show.blackboard}
                    style={{
                        width:'100%',
                        height:'100%',
                        resizeMode:'contain'
                    }}
                    ></Image>
                </View>
                <View style={{position:'absolute', width: '70%', height: '60%', top:this.state.descriptionTop }}>
                    <Image source={show.description}
                        style={{
                            width: '100%',
                            height: '100%',
                            resizeMode: 'contain'
                        }}
                    ></Image>
                </View>
                <View style={{
                    position: 'absolute',
                    top: this.state.choice1Top,
                    left: '18%',
                    height: '10%',
                    width: '14%',
                }}>
                    <TouchableOpacity onPress={() => {
                        this.validate(1);
                    }}>
                        <Image source={show.choices1}
                         style={{
                            width: '100%',
                            height: '100%',
                            resizeMode: 'contain'
                        }}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top: this.state.choice2Top,
                    left: '35%',
                    height: '10%',
                    width: '14%',
                }}>
                    <TouchableOpacity onPress={() => {
                        this.validate(2);
                    }}>
                        <Image source={show.choices2} 
                        style={{
                            width: '100%',
                            height: '100%',
                            resizeMode: 'contain'
                        }}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top: this.state.choice3Top,
                    left: '53%',
                    height: '10%',
                    width: '14%',
                }}>
                    <TouchableOpacity onPress={() => {
                        this.validate(3);
                    }}>
                        <Image source={show.choices3} 
                        style={{
                            width: '100%',
                            height: '100%',
                            resizeMode: 'contain'
                        }}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top: this.state.choice4Top,
                    left: '70%',
                    height: '10%',
                    width: '14%',
                }}>
                    <TouchableOpacity onPress={() => {
                        this.validate(4);
                    }}>
                        <Image source={show.choices4} 
                        style={{
                            width: '100%',
                            height: '100%',
                            resizeMode: 'contain'
                        }}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top: '75%',
                    left: this.state.emptyChoiceLeft,
                    height: '10%',
                    width: '14%',
                }}>
                        <Image source={Empty}
                            style={{
                                width: '100%',
                                height: '100%',
                                resizeMode: 'contain'
                            }}></Image>
                </View>
                <Animatable.View ref={this.handleViewRef} 
                style={{
                    position: 'absolute',
                    width: '10%',
                    height: '10%',
                    top:this.state.answerTop,
                }}>
                    <Image source={this.state.answerImage} style={{
                        width: '100%',
                        height: '100%',
                        resizeMode: 'contain',
                    }}></Image>
                </Animatable.View>
                <Animatable.View ref={this.handleViewRef} style={{ position: 'absolute', left: '25%', width: '20%', height: '12%', top: '2%', }}>
                    <View style={{ position: 'absolute', width: '100%', height: '100%', top: this.state.star1Top }}>
                        <Image source={stars} style={{ height: '100%', width: '100%', resizeMode: 'contain' }} />
                    </View>
                    <View style={{ position: 'absolute', width: '100%', height: '100%', left: '39%', top: this.state.star2Top }}>
                        <Image source={stars} style={{ height: '100%', width: '100%', resizeMode: 'contain' }} />
                    </View>
                    <View style={{ position: 'absolute', width: '100%', height: '100%', left: '77%', top: this.state.star3Top }}>
                        <Image source={stars} style={{ height: '100%', width: '100%', resizeMode: 'contain' }} />
                    </View>
                    <View style={{ position: 'absolute', width: '100%', height: '100%', top: this.state.emptyStar1Top }}>
                        <Image source={emptyStars} style={{ height: '100%', width: '100%', resizeMode: 'contain' }} />
                    </View>
                    <View style={{ position: 'absolute', width: '100%', height: '100%', left: '39%', top: this.state.emptyStar2Top }}>
                        <Image source={emptyStars} style={{ height: '100%', width: '100%', resizeMode: 'contain' }} />
                    </View>
                    <View style={{ position: 'absolute', width: '100%', height: '100%', left: '77%', top: this.state.emptyStar3Top }}>
                        <Image source={emptyStars} style={{ height: '100%', width: '100%', resizeMode: 'contain' }} />
                    </View>
                </Animatable.View>
               <View style={{
                    position:'absolute',
                    width:'30%',
                    height:'31%',
                    left:'18%',
                    top:this.state.fadlugTop
               }}>
                   <TouchableOpacity onPress={this.retry}>
                        <Image 
                        style={{width:'100%',height:'100%',resizeMode:'contain'}}
                        source={FadlugIcon}/>
                    </TouchableOpacity>
               </View>
                <View style={{
                    position: 'absolute',
                    width: '30%',
                    height: '31%',
                    left: '55%',
                    top: this.state.gufadyanTop
                }}>
                    <TouchableOpacity onPress={this.goGufadyan}>
                        <Image
                            style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                            source={GufadyanIcon} />
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    width: '30%',
                    height: '31%',
                    left: '36%',
                    top: this.state.lamwaTop
                }}>
                    <TouchableOpacity onPress={this.goLamwa}>
                        <Image
                            style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                            source={LamwaIcon} />
                    </TouchableOpacity>
                </View>
                 <View style={{
                    position:'absolute',
                    width:'17%',
                    height:'24%',
                    top:'75%',
                    left:'1%',
                }}> 
                    <Image source={Coins} style={{width:'100%',height:'100%',resizeMode:'contain'}}/>
                    <View style={{
                        position:'absolute',
                        top:'20%',
                        left:'40%',
                    }}>
                        <Text style={{
                            fontSize:20,
                            color:'#ffea00'
                        }}>{this.state.Balance}.00</Text>
                    </View>
                </View>
            </ImageBackground>
        )
           
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    }
})

export default withNavigation(Bang2);