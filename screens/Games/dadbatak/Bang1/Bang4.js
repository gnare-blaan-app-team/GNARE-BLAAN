import React, { Component } from 'react';
import { Text, View, Image, PanResponder, TouchableOpacity, ImageBackground, AsyncStorage} from 'react-native';
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
import Coins from '../../gameImages/Coinbank.png';
import Sound from 'react-native-sound';

import choiceA from '../../gameImages/DB_choices1/a.png';
import choiceA2ccent from '../../gameImages/DB_choices1/a2-accent.png';
import choiceAccent from '../../gameImages/DB_choices1/a-accent.png';
import choiceB from '../../gameImages/DB_choices1/b.png';
import choiceD from '../../gameImages/DB_choices1/d.png';
import choiceE from '../../gameImages/DB_choices1/e.png';
import choiceE2ccent from '../../gameImages/DB_choices1/e2-accent.png';
import choiceEccent from '../../gameImages/DB_choices1/e-accent.png';
import choiceG from '../../gameImages/DB_choices1/g.png';
import choiceH from '../../gameImages/DB_choices1/h.png';
import choiceL from '../../gameImages/DB_choices1/l.png';
import choiceIccent from '../../gameImages/DB_choices1/i-accent.png';
import choiceN from '../../gameImages/DB_choices1/n.png';
import choiceOccent from '../../gameImages/DB_choices1/o-accent.png';
import choiceU from '../../gameImages/DB_choices1/u.png';
import choiceUccent from '../../gameImages/DB_choices1/u-accent.png';
import choiceW from '../../gameImages/DB_choices1/w.png';
import choiceK from '../../gameImages/DB_choices1/k.png';



import correctA from '../../gameImages/DB_choices1/correctA.png';
import correctAAccent from '../../gameImages/DB_choices1/correctAAccent.png';
import correctAAccent2 from '../../gameImages/DB_choices1/correctAAccent2.png';
import correctB from '../../gameImages/DB_choices1/correctB.png';
import correctD from '../../gameImages/DB_choices1/correctD.png';
import correctE from '../../gameImages/DB_choices1/correctE.png';
import correctEAccent from '../../gameImages/DB_choices1/correctEAccent.png';
import correctEAccent2 from '../../gameImages/DB_choices1/correctEAccent2.png';
import correctG from '../../gameImages/DB_choices1/correctG.png';
import correctH from '../../gameImages/DB_choices1/correctH.png';
import correctIAccent from '../../gameImages/DB_choices1/correctIAccent.png';
import correctK from '../../gameImages/DB_choices1/correctK.png';
import correctL from '../../gameImages/DB_choices1/correctL.png';
import correctN from '../../gameImages/DB_choices1/correctN.png';
import correctOAccent from '../../gameImages/DB_choices1/correctOAccent.png';
import correctU from '../../gameImages/DB_choices1/correctU.png';
import correctUAccent from '../../gameImages/DB_choices1/correctUAccent.png';
import correctW from '../../gameImages/DB_choices1/correctW.png';



import tranparentA from '../../gameImages/DB_choices1/tranparentA.png';
import tranparentAAccent from '../../gameImages/DB_choices1/tranparentAAccent.png';
import tranparentAAccent2 from '../../gameImages/DB_choices1/tranparentAAccent2.png';
import tranparentB from '../../gameImages/DB_choices1/tranparentB.png';
import tranparentD from '../../gameImages/DB_choices1/tranparentD.png';
import tranparentE from '../../gameImages/DB_choices1/tranparentE.png';
import tranparentEAccent from '../../gameImages/DB_choices1/tranparentEAccent.png';
import tranparentEAccent2 from '../../gameImages/DB_choices1/tranparentEAccent2.png';
import tranparentG from '../../gameImages/DB_choices1/tranparentG.png';
import tranparentH from '../../gameImages/DB_choices1/tranparentH.png';
import tranparentIAccent from '../../gameImages/DB_choices1/tranparentIAccent.png';
import tranparentK from '../../gameImages/DB_choices1/tranparentK.png';
import tranparentL from '../../gameImages/DB_choices1/tranparentL.png';
import tranparentN from '../../gameImages/DB_choices1/tranparentN.png';
import tranparentOAccent from '../../gameImages/DB_choices1/tranparentOAccent.png';
import tranparentU from '../../gameImages/DB_choices1/tranparentU.png';
import tranparentUAccent from '../../gameImages/DB_choices1/tranparentUAccent.png';
import tranparentW from '../../gameImages/DB_choices1/tranparentW.png';

import Empty from '../../gameImages/choices/emptyChoices.png';

import BlackBoard1 from '../../gameImages/DB_blackboard1/bang1Q1.png';
import BlackBoard2 from '../../gameImages/DB_blackboard1/bang1Q2.png';
import BlackBoard3 from '../../gameImages/DB_blackboard1/bang1Q3.png';
import BlackBoard4 from '../../gameImages/DB_blackboard1/bang1Q4.png';
import BlackBoard5 from '../../gameImages/DB_blackboard1/bang1Q5.png';
import BlackBoard6 from '../../gameImages/DB_blackboard1/bang1Q6.png';
import BlackBoard7 from '../../gameImages/DB_blackboard1/bang1Q7.png';
import BlackBoard8 from '../../gameImages/DB_blackboard1/bang1Q8.png';
import BlackBoard9 from '../../gameImages/DB_blackboard1/bang1Q9.png';
import BlackBoard10 from '../../gameImages/DB_blackboard1/bang1Q10.png';
import BlackBoard11 from '../../gameImages/DB_blackboard1/bang1Q11.png';
import BlackBoard12 from '../../gameImages/DB_blackboard1/bang1Q12.png';

import Answer1 from '../../gameImages/DB_blackboard1/DB_bang1A1.png';
import Answer2 from '../../gameImages/DB_blackboard1/DB_bang1A2.png';
import Answer3 from '../../gameImages/DB_blackboard1/DB_bang1A3.png';
import Answer4 from '../../gameImages/DB_blackboard1/DB_bang1A4.png';
import Answer5 from '../../gameImages/DB_blackboard1/DB_bang1A5.png';
import Answer6 from '../../gameImages/DB_blackboard1/DB_bang1A6.png';
import Answer7 from '../../gameImages/DB_blackboard1/DB_bang1A7.png';
import Answer8 from '../../gameImages/DB_blackboard1/DB_bang1A8.png';
import Answer9 from '../../gameImages/DB_blackboard1/DB_bang1A9.png';
import Answer10 from '../../gameImages/DB_blackboard1/DB_bang1A10.png';
import Answer11 from '../../gameImages/DB_blackboard1/DB_bang1A11.png';
import Answer12 from '../../gameImages/DB_blackboard1/DB_bang1A12.png';

const DadbatakBang1 = '@MyApp:DadbatakBang1';
const Star1 = '@MyApp:Star1';
const Star2 = '@MyApp:Star2';
const Star3 = '@MyApp:Star3';
const CoinBalance = '@MyApp:CoinBalance';
const QuestionDone = '@MyApp:QuestionDone';
const DadbatakStage2 = '@MyApp:DadbatakStage2';

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
    BlackBoard10,
    BlackBoard11,
    BlackBoard12,
];

const choiceList = [
    choiceA, 
    choiceA2ccent,
    choiceAccent,
    choiceB,
    choiceD,
    choiceE,
    choiceE2ccent,
    choiceEccent,
    choiceG,
    choiceH,
    choiceL,
    choiceIccent,
    choiceN,
    choiceOccent,
    choiceU,
    choiceUccent,
    choiceW,
    choiceK
];

const combine = [
    combine1 = {
        blackboard:blackboardList[0],
        choices1:choiceList[7],
        choices2: choiceList[0],
        choices3: choiceList[13],
        choices4: choiceList[2],
        answer: 733,
        description: Answer1,
        leftPosition:'48%',
    },
    combine2 = {
        blackboard: blackboardList[1],
        choices1: choiceList[5],
        choices2: choiceList[15],
        choices3: choiceList[13],
        choices4: choiceList[11],
        answer: 746,
        description: Answer2,
        leftPosition: '47%',
    },
    combine3 = {
        blackboard: blackboardList[2],
        choices1: choiceList[1],
        choices2: choiceList[15],
        choices3: choiceList[14],
        choices4: choiceList[11],
        answer: 745,
        description: Answer3,
        leftPosition: '46%',
    },
    combine4 = {
        blackboard: blackboardList[3],
        choices1: choiceList[1],
        choices2: choiceList[15],
        choices3: choiceList[0],
        choices4: choiceList[11],
        answer: 731,
        description: Answer4,
        leftPosition: '46.20%',
    },
    combine5 = {
        blackboard: blackboardList[4],
        choices1: choiceList[5],
        choices2: choiceList[0],
        choices3: choiceList[13],
        choices4: choiceList[2],
        answer: 731,
        description: Answer5,
        leftPosition: '47.60%',
    },
    combine6 = {
        blackboard: blackboardList[5],
        choices1: choiceList[5],
        choices2: choiceList[15],
        choices3: choiceList[13],
        choices4: choiceList[11],
        answer: 736,
        description: Answer6,
        leftPosition: '47.60%',
    },
    combine7 = {
        blackboard: blackboardList[6],
        choices1: choiceList[16],
        choices2: choiceList[9],
        choices3: choiceList[12],
        choices4: choiceList[10],
        answer: 747,
        description: Answer7,
        leftPosition: '44%',
    },
    combine8 = {
        blackboard: blackboardList[7],
        choices1: choiceList[10],
        choices2: choiceList[17],
        choices3: choiceList[3],
        choices4: choiceList[9],
        answer: 740,
        description: Answer8,
        leftPosition: '45.20%',
    },
    combine9 = {
        blackboard: blackboardList[8],
        choices1: choiceList[5],
        choices2: choiceList[0],
        choices3: choiceList[13],
        choices4: choiceList[6],
        answer: 737,
        description: Answer9,
        leftPosition: '45.50%',
    },
    combine10 = {
        blackboard: blackboardList[9],
        choices1: choiceList[2],
        choices2: choiceList[15],
        choices3: choiceList[6],
        choices4: choiceList[11],
        answer: 733,
        description: Answer10,
        leftPosition: '48%',
    },
    combine11 = {
        blackboard: blackboardList[10],
        choices1: choiceList[12],
        choices2: choiceList[17],
        choices3: choiceList[3],
        choices4: choiceList[10],
        answer: 731,
        description: Answer11,
        leftPosition: '46%',
    },
     combine12 = {
        blackboard: blackboardList[11],
        choices1: choiceList[4],
        choices2: choiceList[17],
        choices3: choiceList[8],
        choices4: choiceList[3],
        answer: 748,
        description: Answer12,
         leftPosition: '48%',
    }
];

const stageNumber = [0,1,2,3,4,5,6,7,8,9,10,11];

const questionAnswered = [];

const audio = ['number_1','number_2','number_3','number_4','number_5','number_6','number_7','number_8','number_9','number_10'];

//playsound
//answer
//correct
//combine[answer]


class Bang extends Component {
    handleViewRef = ref => this.view = ref;
    wrong = () => this.view.tada();
    Animatecorrect = () => this.view.pulse();
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
            answerTop: '1000%', //51%
            answerImage: tranparentA,
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
            lamwaTop:'1000%',
            Balance:0,
        }
    }

    componentWillMount() {
        this.onLoad();
        this.minusStar();
        this.checkBalance();
    }

    playSound = (index) => {
        if (index == 620) {
            const answerAudio = new Sound(audio[0] + '.mp3', Sound.MAIN_BUNDLE, (error) => {
                if (error) {
                    alert('failed to load the sound', error);
                    return;
                } else {
                    answerAudio.play();
                }
            });
        }
        if (index == 621) {
            const answerAudio = new Sound(audio[1] + '.mp3', Sound.MAIN_BUNDLE, (error) => {
                if (error) {
                    alert('failed to load the sound', error);
                    return;
                } else {
                    answerAudio.play();
                }
            });
        }
        if (index == 622) {
            const answerAudio = new Sound(audio[2] + '.mp3', Sound.MAIN_BUNDLE, (error) => {
                if (error) {
                    alert('failed to load the sound', error);
                    return;
                } else {
                    answerAudio.play();
                }
            });
        }
        if (index == 623) {
            const answerAudio = new Sound(audio[3] + '.mp3', Sound.MAIN_BUNDLE, (error) => {
                if (error) {
                    alert('failed to load the sound', error);
                    return;
                } else {
                    answerAudio.play();
                }
            });
        }
        if (index == 624) {
            const answerAudio = new Sound(audio[4] + '.mp3', Sound.MAIN_BUNDLE, (error) => {
                if (error) {
                    alert('failed to load the sound', error);
                    return;
                } else {
                    answerAudio.play();
                }
            });
        }
        if (index == 625) {
            const answerAudio = new Sound(audio[5] + '.mp3', Sound.MAIN_BUNDLE, (error) => {
                if (error) {
                    alert('failed to load the sound', error);
                    return;
                } else {
                    answerAudio.play();
                }
            });
        }
        if (index == 626) {
            const answerAudio = new Sound(audio[6] + '.mp3', Sound.MAIN_BUNDLE, (error) => {
                if (error) {
                    alert('failed to load the sound', error);
                    return;
                } else {
                    answerAudio.play();
                }
            });
        }
        if (index == 627) {
            const answerAudio = new Sound(audio[7] + '.mp3', Sound.MAIN_BUNDLE, (error) => {
                if (error) {
                    alert('failed to load the sound', error);
                    return;
                } else {
                    answerAudio.play();
                }
            });
        }
        if (index == 628) {
            const answerAudio = new Sound(audio[8] + '.mp3', Sound.MAIN_BUNDLE, (error) => {
                if (error) {
                    alert('failed to load the sound', error);
                    return;
                } else {
                    answerAudio.play();
                }
            });
        }
        if (index == 629) {
            const answerAudio = new Sound(audio[9] + '.mp3', Sound.MAIN_BUNDLE, (error) => {
                if (error) {
                    alert('failed to load the sound', error);
                    return;
                } else {
                    answerAudio.play();
                }
            });
        }
  }

    checkBalance = async (index) => {
        var storedValue = await AsyncStorage.getItem(CoinBalance);
        if(storedValue == null){
                    const value = 0;
                    this.state.Balance = value;            
        }else{
            this.setState({
                Balance:storedValue
            })
        }
        if(index == 'addBalance'){
            if(this.state.Balance == 0){
                const value = 2;
                const convertValue = JSON.stringify(value);
                this.setState({Balance:convertValue});
                await AsyncStorage.setItem(CoinBalance, convertValue); 
            }else{
                const convertToNumber = Number(this.state.Balance);
                this.state.Balance = convertToNumber + 2;
                const convertValue = JSON.stringify(this.state.Balance);
                 await AsyncStorage.setItem(CoinBalance, convertValue); 
            }
        }
        
    }

    gotoMainMenu = () =>{
        this.props.navigation.navigate('mainMenu');
    }

    goBack = () => {
        this.props.navigation.push('gameMenu');
    }
    
    onLoad = async (index) => {
        const storedValue = await AsyncStorage.getItem(DadbatakBang1);
        const Reach5 = await AsyncStorage.getItem(QuestionDone);
        const randomizer = Math.floor(Math.random() * stageNumber.length);
        const use = stageNumber[randomizer];
        stageNumber.splice(randomizer,1);
        var random = use;
        if (Reach5 == 5){
            this.props.navigation.push('gameMenu', { show: 'DadBatak' });
            const stage2 = 'unlock';
            await AsyncStorage.removeItem(QuestionDone);
            await AsyncStorage.removeItem(DadbatakBang1);
            await AsyncStorage.setItem(DadbatakStage2, stage2);
       } 
            if(storedValue == null){
                const store = JSON.stringify(random);
                await AsyncStorage.setItem(DadbatakBang1, store);
                this.setState({ 
                    randomQuestion: random,
                    choice1Top: '75%',//75%
                    choice2Top: '75%',//75%
                    choice3Top: '75%',//75%
                    choice4Top: '75%',//75%
                    blackboardTop: '14%',
                });
            }else{
                this.setState({ 
                    randomQuestion: storedValue,
                    choice1Top: '75%',//75%
                    choice2Top: '75%',//75%
                    choice3Top: '75%',//75%
                    choice4Top: '75%',//75%
                    blackboardTop: '14%',
                });
            }
            if(index == 'next'){
                this.setState({
                    choice1Top: '1000%',//75%
                    choice2Top: '1000%',//75%
                    choice3Top: '1000%',//75%
                    choice4Top: '1000%',//75%
                    blackboardTop: '1000%',
                });
                const store = JSON.stringify(random);
                await AsyncStorage.setItem(DadbatakBang1, store);
                this.setState({ 
                    randomQuestion: random,
                    choice1Top: '75%',//75%
                    choice2Top: '75%',//75%
                    choice3Top: '75%',//75%
                    choice4Top: '75%',//75%
                    blackboardTop: '14%',
                });
            }
            if(index == 'retry'){
                this.setState({
                    choice1Top: '1000%',//75%
                    choice2Top: '1000%',//75%
                    choice3Top: '1000%',//75%
                    choice4Top: '1000%',//75%
                    blackboardTop: '1000%',
                });
                const store = JSON.stringify(random);
                await AsyncStorage.setItem(DadbatakBang1, store);
                this.setState({ 
                    randomQuestion: random,
                    choice1Top: '75%',//75%
                    choice2Top: '75%',//75%
                    choice3Top: '75%',//75%
                    choice4Top: '75%',//75%
                    blackboardTop: '14%',
                });
            }
        }

    validate = async (index) => {
       if(index == 1){
           if(this.state.getChoice1Name == this.state.answer){
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
                       this.onLoad(next);
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
                   }, 6500)
               }, 2000)
           }else{
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
                        this.onLoad(next);
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
                    }, 6500)
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
                setTimeout(()=>{
                    this.setState({
                        choice2Top: '75%',
                        emptyChoiceLeft: '1000%',
                    })
                },1000)
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
                        this.onLoad(next);
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
                    }, 6500)
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
                        this.onLoad(next);
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
                    }, 6500)
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
        if(index == 731){
            this.setState({
                answerImage: tranparentA,
                answerTop:'51%',
            })
            setTimeout(()=>{
                this.setState({
                    answerTop: '1000%',
                })
            },1000)
        }
        if (index == 732) {
            this.setState({
                answerImage: tranparentAAccent,
                answerTop: '51%',
            })
            setTimeout(() => {
                this.setState({
                    answerTop: '1000%',
                })
            }, 1000)
        }
        if (index == 733) {
            this.setState({
                answerImage: tranparentAAccent2,
                answerTop: '51%',
            })
            setTimeout(() => {
                this.setState({
                    answerTop: '1000%',
                })
            }, 1000)
        }
        if (index == 734) {
            this.setState({
                answerImage: tranparentB,
                answerTop: '51%',
            })
            setTimeout(() => {
                this.setState({
                    answerTop: '1000%',
                })
            }, 1000)
        }
        if (index == 735) {
            this.setState({
                answerImage: tranparentD,
                answerTop:'51%',
            })
            setTimeout(() => {
                this.setState({
                    answerTop: '1000%',
                })
            }, 1000)
        }
        if (index == 736) {
            this.setState({
                answerImage: tranparentE,
                answerTop: '51%',
            })
            setTimeout(() => {
                this.setState({
                    answerTop: '1000%',
                })
            }, 1000)
        }
        if (index == 737) {
            this.setState({
                answerImage:  tranparentEAccent2,
                answerTop: '51%',
            })
            setTimeout(() => {
                this.setState({
                    answerTop: '1000%',
                })
            }, 1000)
        }
        if (index == 738) {
            this.setState({
                answerImage: tranparentEAccent,
                answerTop: '51%',
            })
            setTimeout(() => {
                this.setState({
                    answerTop: '1000%',
                })
            }, 1000)
        }
        if (index == 739) {
            this.setState({
                answerImage: tranparentG,
                answerTop: '51%',
            })
            setTimeout(() => {
                this.setState({
                    answerTop: '1000%',
                })
            }, 1000)
        }
        if (index == 740) {
            this.setState({
                answerImage: tranparentH,
                answerTop: '51%',
            })
            setTimeout(() => {
                this.setState({
                    answerTop: '1000%',
                })
            }, 1000)
        }
        if (index == 741) {
            this.setState({
                answerImage:  tranparentL,
                answerTop: '51%',
            })
            setTimeout(() => {
                this.setState({
                    answerTop: '1000%',
                })
            }, 1000)
        }
        if (index == 742) {
            this.setState({
                answerImage:  tranparentIAccent,
                answerTop: '51%',
            })
            setTimeout(() => {
                this.setState({
                    answerTop: '1000%',
                })
            }, 1000)
        }
        if (index == 743) {
            this.setState({
                answerImage:  tranparentN,
                answerTop: '51%',
            })
            setTimeout(() => {
                this.setState({
                    answerTop: '1000%',
                })
            }, 1000)
        }
        if (index == 744) {
            this.setState({
                answerImage:  tranparentOAccent,
                answerTop: '51%',
            })
            setTimeout(() => {
                this.setState({
                    answerTop: '1000%',
                })
            }, 1000)
        }
        if (index == 745) {
            this.setState({
                answerImage: tranparentU,
                answerTop: '51%',
            })
            setTimeout(() => {
                this.setState({
                    answerTop: '1000%',
                })
            }, 1000)
        }
        if (index == 746) {
            this.setState({
                answerImage:  tranparentUAccent,
                answerTop: '51%',
            })
            setTimeout(() => {
                this.setState({
                    answerTop: '1000%',
                })
            }, 1000)
        }
        if (index == 747) {
            this.setState({
                answerImage: tranparentW,
                answerTop: '51%',
            })
            setTimeout(() => {
                this.setState({
                    answerTop: '1000%',
                })
            }, 1000)
        }
        if (index == 748) {
            this.setState({
                answerImage: tranparentK,
               answerTop:'51%',
            })
            setTimeout(() => {
                this.setState({
                    answerTop: '1000%',
                })
            }, 1000)
        }
    }

    correct = async (index) => {
        const add = 'addBalance';
        this.checkBalance(add);
        questionAnswered.push(1);
        const value = JSON.stringify(questionAnswered.length);
        await AsyncStorage.setItem(QuestionDone, value);
        if (index == 731) {
            this.setState({
                answerImage: correctA,
                answerTop: '51%',
            })
            setTimeout(() => {
                this.setState({
                    answerTop: '1000%',
                })
            }, 1000)
        }
        if (index == 732) {
            this.setState({
                answerImage:  correctAAccent2,
                answerTop: '51%',
            })
            setTimeout(() => {
                this.setState({
                    answerTop: '1000%',
                })
            }, 1000)
        }
        if (index == 733) {
            this.setState({
                answerImage: correctAAccent,
                answerTop: '51%',
            })
            setTimeout(() => {
                this.setState({
                    answerTop: '1000%',
                })
            }, 1000)
        }
        if (index == 734) {
            this.setState({
                answerImage: correctB,
                answerTop: '51%',
            })
            setTimeout(() => {
                this.setState({
                    answerTop: '1000%',
                })
            }, 1000)
        }
        if (index == 735) {
            this.setState({
                answerImage: correctD,
                answerTop: '51%',
            })
            setTimeout(() => {
                this.setState({
                    answerTop: '1000%',
                })
            }, 1000)
        }
        if (index == 736) {
            this.setState({
                answerImage: correctE,
                answerTop: '51%',
            })
            setTimeout(() => {
                this.setState({
                    answerTop: '1000%',
                })
            }, 1000)
        }
        if (index == 737) {
            this.setState({
                answerImage:  correctEAccent2,
                answerTop: '51%',
            })
            setTimeout(() => {
                this.setState({
                    answerTop: '1000%',
                })
            }, 1000)
        }
        if (index == 738) {
            this.setState({
                answerImage: correctEAccent,
                answerTop: '51%',
            })
            setTimeout(() => {
                this.setState({
                    answerTop: '1000%',
                })
            }, 1000)
        }
        if (index == 739) {
            this.setState({
                answerImage: correctG,
                answerTop: '51%',
            })
            setTimeout(() => {
                this.setState({
                    answerTop: '1000%',
                })
            }, 1000)
        }
        if (index == 740) {
            this.setState({
                answerImage: correctH,
                answerTop: '51%',
            })
            setTimeout(() => {
                this.setState({
                    answerTop: '1000%',
                })
            }, 1000)
        }
        if (index == 741) {
            this.setState({
                answerImage: correctL,
                answerTop: '51%',
            })
            setTimeout(() => {
                this.setState({
                    answerTop: '1000%',
                })
            }, 1000)
        }
        if (index == 742) {
            this.setState({
                answerImage:  correctIAccent,
                answerTop: '51%',
            })
            setTimeout(() => {
                this.setState({
                    answerTop: '1000%',
                })
            }, 1000)
        }
        if (index == 743) {
            this.setState({
                answerImage: correctN,
                answerTop: '51%',
            })
            setTimeout(() => {
                this.setState({
                    answerTop: '1000%',
                })
            }, 1000)
        }
        if (index == 744) {
            this.setState({
                answerImage: correctOAccent,
                answerTop: '51%',
            })
            setTimeout(() => {
                this.setState({
                    answerTop: '1000%',
                })
            }, 1000)
        }
        if (index == 745) {
            this.setState({
                answerImage: correctU,
                answerTop: '51%',
            })
            setTimeout(() => {
                this.setState({
                    answerTop: '1000%',
                })
            }, 1000)
        }
        if (index == 746) {
            this.setState({
                answerImage:correctUAccent,
                answerTop: '51%',
            })
            setTimeout(() => {
                this.setState({
                    answerTop: '1000%',
                })
            }, 1000)
        }
        if (index == 747) {
            this.setState({
                answerImage: correctW,
                answerTop: '51%',
            })
            setTimeout(() => {
                this.setState({
                    answerTop: '1000%',
                })
            }, 1000)
        }
        if (index == 748) {
            this.setState({
                answerImage: correctK, 
                answerTop: '51%',
            })
            setTimeout(() => {
                this.setState({
                    answerTop: '1000%',
                })
            }, 1000)
        }
    }

    minusStar = async (index) => {
        const storedValue1 = await AsyncStorage.getItem(Star1);
        const storedValue2 = await AsyncStorage.getItem(Star2);
        const storedValue3 = await AsyncStorage.getItem(Star3);
        var wrong = 'wrong';
        if(storedValue1 == 'wrong'){
            this.setState({
               star3Top: '1000%',
               emptyStar3Top: '1%',
           })
        }
        if(storedValue2 == 'wrong'){
            this.setState({
               star2Top: '1000%',
               emptyStar2Top: '1%',
           })
        }
        if(storedValue3 == 'wrong'){
            this.setState({
               star3Top: '1000%',
               emptyStar3Top: '1%',
           })
        

}
        if(index == 'minus'){
            if(storedValue1 == null){
            await AsyncStorage.setItem(Star1, wrong);
           this.setState({
               star3Top: '1000%',
               emptyStar3Top: '1%',
           })
        }else{
            if (storedValue2 == null) {
                await AsyncStorage.setItem(Star2, wrong);
                this.setState({
                    star2Top: '1000%',
                    emptyStar2Top: '1%',
                })
            }else{
                if (storedValue3 == null) {
                    await AsyncStorage.setItem(Star3, wrong);
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
                        })
                    },1000)
                }
            }
        }
        }
    }

    retry = async () => {
        const retry = 'retry';
        this.onLoad(retry);
        await AsyncStorage.removeItem(Star1);
        await AsyncStorage.removeItem(Star2);
        await AsyncStorage.removeItem(Star3);
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
            fadlugTop:'1000%',
            gufadyanTop:'1000%',
            lamwaTop:'1000%',
        })

    }

    render() {
        const show = combine[this.state.randomQuestion];
        const convert1 = JSON.stringify(show.choices1);
        this.state.getChoice1Name = convert1;
        const convert2 = JSON.stringify(show.choices2);
        this.state.getChoice2Name = convert2;
         const convert3 = JSON.stringify(show.choices3);
        this.state.getChoice3Name = convert3;
          const convert4 = JSON.stringify(show.choices4);
        this.state.getChoice4Name = convert4;
        const answer = JSON.stringify(show.answer);
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
                    left:show.leftPosition,
                    top:this.state.answerTop,
                }}>
                    <Image source={this.state.answerImage} style={{
                        width: '100%',
                        height: '100%',
                        resizeMode: 'contain',
                    }}></Image>
                </Animatable.View>
               <View style={{position:'absolute',width:'50%',height:'50%',top:'2%'}}>
                    <Image source={stars} style={{resizeMode:'contain',position:'absolute',top:this.state.star1Top}}/>
                    <Image source={stars} style={{ resizeMode: 'contain', position: 'absolute', left: '14%', top: this.state.star2Top}}/>
                    <Image source={stars} style={{ resizeMode: 'contain', position: 'absolute', left: '28%', top: this.state.star3Top }} />
                    <Image source={emptyStars} style={{ resizeMode: 'contain', position: 'absolute', top: this.state.emptyStar1Top }} />
                    <Image source={emptyStars} style={{ resizeMode: 'contain', position: 'absolute', left: '14%', top: this.state.emptyStar2Top }} />
                    <Image source={emptyStars} style={{ resizeMode: 'contain', position: 'absolute', left: '28%', top: this.state.emptyStar3Top }} />
               </View>
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
                    <TouchableOpacity>
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
                    <TouchableOpacity>
                        <Image
                            style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                            source={LamwaIcon} />
                    </TouchableOpacity>
                </View>
                <View style={{
                    position:'absolute',
                    width:'25%',
                    height:'20%',
                    top:'75%',
                    left:'-3%'
                }}> 
                    <Image source={Coins} style={{width:'100%',height:'100%',resizeMode:'contain'}}/>
                    <View style={{
                        position:'absolute',
                        top:'12%',
                        left:'45%',
                    }}>
                        <Text style={{
                            fontSize:23,
                            color:'#ffea00'
                        }}>{this.state.Balance}.00</Text>
                    </View>
                </View>
            </ImageBackground>
        )
           
    }
}




export default withNavigation(Bang);