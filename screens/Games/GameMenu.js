import React, { Component } from 'react';
import { AsyncStorage, View, Image, StyleSheet, TouchableOpacity, ImageBackground, Animated, Text, TextInput } from 'react-native';
import { withNavigation } from 'react-navigation';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {globalStyleSheet} from '../globalStyleSheet/globalStyleSheet';
import Slide1 from './gameImages/Slide1.png';
import BG from './gameImages/GameBG.png';
import DadBatak from './gameImages/1Icon_DadBatak.png';
import DadSe from './gameImages/1Icon_DadSe.png';
import GnareIcon from './gameImages/GnareMain.png';
import DadseBG from './gameImages/DadSeBG.png';
import Bang1Icon from './gameImages/bang1_icon.png';
import Bang2Icon from './gameImages/12Icon_Bang2Lock.png';
import Bang22Icon from './gameImages/bang2_icon.png';
import Bang3Icon from './gameImages/12Icon_Bang3Lock.png';
import Bang33Icon from './gameImages/bang3_icon.png';
import KastifunIcon from './gameImages/kastifun_icon.png';
import TanbuIcon from './gameImages/tanbu_icon.png';
import NextLevel from './gameImages/nextlevel.png'; 
import CoinBank from './gameImages/bangko.png'; 
import Market from './gameImages/market.png';
import blackboard from './gameImages/background.png'; 
import kaito from './gameImages/kaitoGame.png'; 
import kaibe from './gameImages/kaibeGame.png'; 
import DadBatakBG from './gameImages/DadBatakBG.png';
import player from './gameImages/player_icon.png';
import back from '../images/Back_icon.png';


const backgroundList = [BG,Slide1,DadseBG,DadBatakBG];

const sample = '@MyApp:sample';


const Stage2 = '@MyApp:Stage2';
const Stage3 = '@MyApp:Stage3';
const DadbatakStage2 = '@MyApp:DadbatakStage2';
const DadbatakStage3 = '@MyApp:DadbatakStage3';
const RandomKey = '@MyApp:RandomKey';
const RandomKey2 = '@MyApp:RandomKey2';
const Player = '@MyApp:Player';
const CoinBalance = '@MyApp:CoinBalance';
const mainStar1 = '@MyApp:mainStar1';
const mainStar2 = '@MyApp:mainStar2';
const mainStar3 = '@MyApp:mainStar3';

//player1
const Player1RandomKey = '@MyApp:Player1RandomKey';
const Player1Star1 = '@MyApp:Player1Star1';
const Player1Star2 = '@MyApp:Player1Star2';
const Player1Star3 = '@MyApp:Player1Star3';
const Player1CoinBalance = '@MyApp:Player1CoinBalance';
const Player1QuestionDone = '@MyApp:Player1QuestionDone';
const Player1RandomKey2 = '@MyApp:Player1RandomKey2';
const Player1Stage2 = '@MyApp:Player1Stage2';
const Player1Stage3 = '@MyApp:Player1Stage3';

//player2
const Player2RandomKey = '@MyApp:Player2RandomKey';
const Player2Star1 = '@MyApp:Player2Star1';
const Player2Star2 = '@MyApp:Player2Star2';
const Player2Star3 = '@MyApp:Player2Star3';
const Player2CoinBalance = '@MyApp:Player2CoinBalance';
const Player2QuestionDone = '@MyApp:Player2QuestionDone';
const Player2RandomKey2 = '@MyApp:Player2RandomKey2';
const Player2Stage2 = '@MyApp:Player2Stage2';
const Player2Stage3 = '@MyApp:Player2Stage3';

class GameMenu extends Component {
    
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this.state = {
            BackgroundImage: backgroundList[0],
            clearBackground: 'gotoGameMenu',
            dadbatakTop: '7%',
            dadseTop:'7%',
            tanbu1Top:'1000%',
            tanbu2Top:'1000%',
            tanbu3Top: '1000%',
            kastifunTop:'1000%',
            tanbuTop: '1000%',
            level:'',
            Clickabletanbu2Top:'1000%',
            Clickabletanbu3Top: '1000%',
            show:'',
             show3:'',
            show4: '',
            nextLevelTop:'1000%',
            coinBankTop:'1000%',
            marketTop:'1000%',
            passIndex:'',
            profile:'',
            kaitoTop: '22%',
            kaitoLeft: '15%',
            kaibeTop: '25%',
            kaibeLeft: '60%',
            profileTop: '0%',
            player1:'Player 1',
            player2: 'Player 2',
            player3: 'Player 3',
            player4: 'Player 4',
            player5: 'Player 5',
            player1Top:'30%',
            player2Top: '50%',
            player3Top:'30%',
            player4Top: '50%',
            player5Top: '70%',
            saveTop:'1000%',
            playerName:'Choose Player',
            newPlayername:'',
            playerTextInput:'1000%',
            playTop:'1000%',
            backTop: '1000%',
            playerNameLeft: '40%',
            getIndex:0,
            pass1:'',
            pass2: '',
            pass3: '',
            pass4: '',
            pass5: '',
            pass6: '',
            pass7: '',
            pass8: '',
            pass9: '',
            pass10: '',
            getPass1:'',
            getPass2:'',
            getPass3: '',
            getPass4:'',
            getPass5:'',
            getPass6:'',
            getPass7:'',
            getPass8: '',
            getPass9:'',
        }
    }

    checkStage = async (index) => {
       if(index == 1){
           const storedValue = this.state.pass9;//await AsyncStorage.getItem(Stage2);
           const storedValue2 = this.state.pass10;//await AsyncStorage.getItem(Stage3);
           if(this.state.pass2 == 'player1'){
               if (storedValue == 'unlock') {
                   this.setState({
                       tanbu2Top: '1000%',
                       Clickabletanbu2Top: '40%'
                   })
               }
               if (storedValue2 == 'unlock') {
                   this.setState({
                       tanbu3Top: '1000%',
                       Clickabletanbu3Top: '59%'
                   })
               }
           }       
        }
       if(index == 2){
           const storedValue3 = await AsyncStorage.getItem(DadbatakStage2);
               if (storedValue3 == 'unlock') {
                   this.setState({
                       tanbu2Top: '1000%',
                       Clickabletanbu2Top: '40%'
                   })
               }
               const storedValue4 = await AsyncStorage.getItem(DadbatakStage3);
             if (storedValue4 == 'unlock') {
                   this.setState({
                       tanbu3Top: '1000%',
                       Clickabletanbu3Top: '59%'
                   })
               }
           }
    }

    componentWillMount(){
        this.animatedValue = new Animated.Value(0);
    }

    componentDidMount(){
        const showIt = this.state.show;
        const showProfile = this.state.profile;
        if (showProfile == 'showProfile'){
            Animated.spring(this.animatedValue, {
                toValue: 1
            }).start()
        }else{
            this.setState({
                profileTop:'1000%'
            })
        }
        if (showIt == 'Dadse'){
            this.setState({
                kaitoTop: '1000%',
                kaibeLeft: '15%',
                nextLevelTop: '22%',
                coinBankTop: '40%',
                marketTop:'59%',
                dadbatakTop: '1000%',
                dadseTop:'1000%',
            })
            this.state.level = 'dadsePart';
        }
        if (showIt == 'DadBatak') {
            this.setState({
                kaibeTop: '1000%',
                nextLevelTop: '22%',
                coinBankTop: '40%',
                marketTop: '59%',
                dadbatakTop: '1000%',
                dadseTop: '1000%',
            })
            this.state.level = 'dadbatakPart';
        }

    }

    gotoNextLevel = () => {
        const showIt = this.state.show3;
        const showIt2 = this.state.show4;
        this.setState({
            nextLevelTop: '1000%',
            coinBankTop: '1000%',
            marketTop: '1000%',
            tanbu1Top: '22%',
            Clickabletanbu2Top:'40%',
            tanbu3Top: '59%',
        })
        if(showIt == 'Dadse2'){
            this.setState({
                Clickabletanbu3Top: '59%',
                tanbu3Top: '1000%',
            })
        }
        if (showIt2 == 'DadBatak2') {
            this.setState({
                Clickabletanbu3Top: '59%',
                tanbu3Top: '1000%',
            })
        }
        this.checkStage();
    }

    gotoMainMenu = () => {
        this.props.navigation.navigate('mainMenu');
    }

    gotoDadBatak = () => {
        this.setState({
            kaibeTop: '1000%',
            dadbatakTop: '1000%',
            dadseTop: '1000%',
            tanbu1Top: '22%',
            tanbu2Top: '40%',
            tanbu3Top: '59%',
            kastifunTop: '77%',
            level:'dadbatakPart',
        })
        this.checkStage(2);
    }

    gotoDadSe = () => {
        this.props.navigation.navigate('dsbangIntro');
        this.setState({
            kaitoTop:'1000%',
            kaibeLeft:'15%',
            dadbatakTop:'1000%',
            dadseTop:'1000%',
            tanbu1Top: '22%',
            tanbu2Top: '40%',
            tanbu3Top: '59%',
            kastifunTop: '77%',
            level:'dadsePart'
        })
        this.checkStage(1);
    }

    gotoTanbu = (index) => {
        this.setState({
            tanbuTop:'30%',
            dadbatakTop: '1000%',
            dadseTop: '1000%',
            tanbu1Top: '1000%',
            tanbu2Top: '1000%',
            tanbu3Top: '1000%',
            kastifunTop: '1000%',
            Clickabletanbu2Top: '1000%',
            Clickabletanbu3Top: '1000%',
        })
        this.state.passIndex = index;
    }
    gotoBang = (index) => {
      const set = this.state.level;
      const passIndex = this.state.passIndex;
      if(set == 'dadsePart'){
          if (passIndex == 1) {
              this.props.navigation.push('bang',{
                  getPass: this.state.pass1,
                  getPass2: this.state.pass2,
                  getPass3: this.state.pass3,
                  getPass4: this.state.pass4,
                  getPass5: this.state.pass5,
                  getPass6: this.state.pass6,
                  getPass7: this.state.pass7,
                  getPass8: this.state.pass8,
                  getPass9: this.state.pass9,
              });
          }
          if (passIndex == 2) {
              this.props.navigation.push('bang2',{
                  getPass8: this.state.pass8,
                  getPass2:this.state.pass2,
                  getPass3: this.state.pass3,
                  getPass4: this.state.pass4,
                  getPass5: this.state.pass5,
              });
          }
          if (passIndex == 3) {
              this.props.navigation.push('bang3');
          }
      }
        if (set == 'dadbatakPart') {
            if (passIndex == 1) {
                this.props.navigation.push('bang4');
            }
            if (passIndex == 2) {
                this.props.navigation.push('bang5');
            }
            if (passIndex == 3) {
                this.props.navigation.push('bang6');
            }
        }
        
    }

    goToProfile = () => {
        this.setState({
            saveTop: '1000%',
            playerTextInput: '1000%',
            playTop: '1000%',
            backTop: '1000%',
            player1Top: '30%',
            player2Top: '50%',
            player3Top: '30%',
            player4Top: '50%',
            player5Top: '70%',
            playerName: 'Choose Player',
        })
    }

    settings = async (index) => {
        this.setState({
            saveTop: '30%',
            playTop: '50%',
            backTop:'10%',
            player1Top: '1000%',
            player2Top: '1000%',
            player3Top: '1000%',
            player4Top: '1000%',
            player5Top: '1000%',
        })
        let Player = ['Player1','Player2','Player3','Player4','Player5'];
        this.setState({
                    playerName:Player[index],
                    playerNameLeft:'46%',
                    getIndex: index,
                });
       //this.setState
    }

    play = async () => {
        Animated.spring(this.animatedValue, {
            toValue: .0
        }).start();
        setTimeout(() => {
            this.setState({
                profileTop: '1000%',
            })
            this.state.profile = 'none';
        }, 1000);
        const storedValue1_2 = await AsyncStorage.getItem(this.state.playerName + 'RandomKey');
        const storedValue2_2 = await AsyncStorage.getItem(this.state.playerName + 'Star1');
        const storedValue3_2 = await AsyncStorage.getItem(this.state.playerName + 'Star2');
        const storedValue4_2 = await AsyncStorage.getItem(this.state.playerName + 'Star3');
        const storedValue5_2 = await AsyncStorage.getItem(this.state.playerName + 'CoinBalance');
        const storedValue6_2 = await AsyncStorage.getItem(this.state.playerName + 'QuestionDone');
        const storedValue7_2 = await AsyncStorage.getItem(this.state.playerName + 'RandomKey2');
        const storedValue8_2 = await AsyncStorage.getItem(this.state.playerName + 'Stage2');
        const storedValue9_2 = await AsyncStorage.getItem(this.state.playerName + 'Stage3');

        const stars = await AsyncStorage.getItem(this.state.playerName + 'Stars');
       
        if(stars == null) {
            await AsyncStorage.setItem(this.state.playerName + 'Stars', 0);
        }
        this.setState({
            pass1: storedValue1_2,
            pass2: this.state.playerName,
            pass3: storedValue2_2,
            pass4: storedValue3_2,
            pass5: storedValue4_2,
            pass6: storedValue5_2,
            pass7: storedValue6_2,
            pass8: storedValue7_2,
            pass9: storedValue8_2,
            pass10: storedValue9_2,
        });

        
        await AsyncStorage.setItem(mainStar1, this.state.pass3);
        await AsyncStorage.setItem(mainStar2, this.state.pass4);
        await AsyncStorage.setItem(mainStar3, this.state.pass5);
        await AsyncStorage.setItem(Player, this.state.playerName);
        await AsyncStorage.setItem(RandomKey, this.state.pass1);
        await AsyncStorage.setItem(RandomKey2, this.state.pass8);
        await AsyncStorage.setItem(CoinBalance, this.state.pass6);
        
        
        
    }

    get = async () => {
       
    }

    close = () => {
      
    }

    market = () => {
        // if (this.state.level == 'dadsePart'){
        //     this.props.navigation.navigate('dadseMarket');
        // }     
    }

    render() {
        console.disableYellowBox = true; 
        const { navigation } = this.props;
        const itemId = navigation.getParam('show', 'NO-ID');
        const itemId2 = navigation.getParam('show3', 'NO-ID');
        const itemId3 = navigation.getParam('show3DB', 'NO-ID');
        const getParam = navigation.getParam('openProfile', 'NO-ID');
        const getParam2 = navigation.getParam('getbang2', 'NO-ID');
        this.state.show = itemId;
        this.state.show3 = itemId2;
        this.state.show4 = itemId3;
        this.state.profile = getParam;
        const animatedStyle  = {
            transform: [{scale:this.animatedValue}]
        }
        return (
            <ImageBackground style={{ flex: 1, width: '100%', height: '100%', resizeMode: 'stretch' }}
                source={BG}
            >
                <View style={{ position: 'absolute', top: '0%', width: '100%', height: '100%' }}>
                    <Image source={BG} style={{ width: '100%', height: '100%', resizeMode: 'stretch' }}></Image>
                </View>
                <View style={{ position: 'absolute', width: '100%', height: '100%' }}>
                    <Image source={this.state.BackgroundImage} style={{ width: '100%', height: '100%', resizeMode: 'stretch' }}></Image>
                </View>
                <View style={styles.gnareIconStyle}>
                    <Image
                        source={GnareIcon}
                        style={styles.image}
                    >
                    </Image>
                </View>
                <View style={{
                    position: 'absolute',
                    top:this.state.dadbatakTop,
                    left: wp('20.5%'),
                    height: hp('13.5%'),
                    width: wp('20%'),
                }}>
                    <TouchableOpacity onPress={this.gotoDadBatak}>
                        <Image
                            source={DadBatak}
                            style={styles.image}
                        >
                        </Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top:this.state.dadseTop,
                    right: wp('16%'),
                    height: hp('13.5%'),
                    width: wp('20%'),
                }}>
                    <TouchableOpacity onPress={this.gotoDadSe}>
                        <Image
                            source={DadSe}
                            style={styles.image}
                        >
                        </Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.gnareIconStyle}>
                    <Image source={GnareIcon} style={styles.image}></Image>
                </View>
                <View style={{
                    position: 'absolute',
                    top:this.state.tanbu1Top,
                    left: wp('63%'),
                    height: hp('16%'),
                    width: wp('28%'),
                }}>
                    <TouchableOpacity onPress={() => {
                        this.gotoTanbu(1);
                    }}>
                        <Image source={Bang1Icon} style={styles.image}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top:this.state.tanbu2Top,
                    left: wp('63%'),
                    height: hp('16%'),
                    width: wp('28%'),
                }}>
                        <Image source={Bang2Icon} style={styles.image}></Image>
                </View>
                <View style={{
                    position: 'absolute',
                    top: this.state.Clickabletanbu2Top,
                    left: wp('63%'),
                    height: hp('16%'),
                    width: wp('28%'),
                }}>
                    <TouchableOpacity onPress={() => {
                        this.gotoTanbu(2);
                    }}>
                        <Image source={Bang22Icon} style={styles.image}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top: this.state.Clickabletanbu3Top,
                    left: wp('63%'),
                    height: hp('16%'),
                    width: wp('28%'),
                }}>
                    <TouchableOpacity onPress={() => {
                        this.gotoTanbu(3);
                    }}>
                        <Image source={Bang33Icon} style={styles.image}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top:this.state.tanbu3Top,
                    left: wp('63%'),
                    height: hp('16%'),
                    width: wp('28%'),
                }}>
                        <Image source={Bang3Icon} style={styles.image}></Image>
                </View>
                <View style={{
                    position: 'absolute',
                    top:this.state.kastifunTop,
                    left: wp('63%'),
                    height: hp('16%'),
                    width: wp('28%'),
                }}>
                    <TouchableOpacity onPress={() => {
                        this.gotoTanbu(4);
                    }}>
                        <Image source={KastifunIcon} style={styles.image}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top:this.state.tanbuTop,
                    height: hp('40%'),
                    width: wp('50%'),
                    left:'50%',
                }}>
                    <TouchableOpacity onPress={this.gotoBang}>
                        <Image
                            source={TanbuIcon}
                            style={styles.image}
                        >
                        </Image>
                    </TouchableOpacity>
                </View>
                <View style={globalStyleSheet.homeContainer}>
                    <TouchableOpacity onPress={this.gotoMainMenu}>
                        <Image
                            source={require('../images/Home_icon.png')}
                            style={globalStyleSheet.home}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top: this.state.nextLevelTop,
                    left: wp('63%'),
                    height: hp('16%'),
                    width: wp('28%'),
                }}>
                    <TouchableOpacity onPress={this.gotoNextLevel}>
                        <Image source={NextLevel} style={styles.image}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top: this.state.coinBankTop,
                    left: wp('63%'),
                    height: hp('16%'),
                    width: wp('28%'),
                }}>
                    <TouchableOpacity>
                        <Image source={CoinBank} style={styles.image}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top: this.state.marketTop,
                    left: wp('63%'),
                    height: hp('16%'),
                    width: wp('28%'),
                }}>
                    <TouchableOpacity onPress={this.market}>
                        <Image source={Market} style={styles.image}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{ position: 'absolute', width: '30%', height: '80%', top: this.state.kaitoTop, left: this.state.kaitoLeft }}>
                    <Image source={kaito} style={{ resizeMode: 'contain', width: '100%', height: '100%' }} />
                </View>
                <View style={{ position: 'absolute', width: '30%', height: '80%', top: this.state.kaibeTop, left: this.state.kaibeLeft }}>
                    <Image source={kaibe} style={{ resizeMode: 'contain', width: '100%', height: '100%' }} />
                </View>
                <Animated.View style={[{
                    position:'absolute',
                    left:'0%',
                    top:this.state.profileTop,
                    width:'100%',
                    height:'100%',
                    backgroundColor:'rgba(0,0,0)',
                    backgroundColor: 'rgba(0,0,0,0.4)',
                },animatedStyle]}>
                    <View
                     style={{
                        margin:'2%',
                         padding:'5%',
                         left:'4%'
                     }}
                     >  
                         <Image source={blackboard} style={{resizeMode:'contain',width:'90%',height:'90%'}} />
                        <View style={{position:'absolute',width:'30%',height:'20%',top:this.state.player1Top,left:'15%'}}>
                            <TouchableOpacity onPress={()=> {
                                this.settings(0);
                            }}>
                                <Image source={player} style={{resizeMode:'contain',width:'100%',height:'100%'}}/>
                                <View style={{ position: 'absolute', top: '20%', left: '27%' }}>
                                    <Text style={{ color: 'white', fontSize: 30 }}>{this.state.player1}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ position: 'absolute', width: '30%', height: '20%', top: this.state.player2Top, left: '15%' }}>
                            <TouchableOpacity onPress={() => {
                                this.settings(1);
                            }}>
                                <Image source={player} style={{ resizeMode: 'contain', width: '100%', height: '100%' }} />
                                <View style={{ position: 'absolute', top: '20%', left: '27%' }}>
                                    <Text style={{ color: 'white', fontSize: 30 }}>{this.state.player2}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ position: 'absolute', width: '30%', height: '20%', top: this.state.player3Top, left: '55%' }}>
                            <TouchableOpacity onPress={() => {
                                this.settings(2);
                            }}>
                                <Image source={player} style={{ resizeMode: 'contain', width: '100%', height: '100%' }} />
                                <View style={{ position: 'absolute', top: '20%', left: '27%' }}>
                                    <Text style={{ color: 'white', fontSize: 30 }}>{this.state.player3}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ position: 'absolute', width: '30%', height: '20%', top: this.state.player4Top, left: '55%' }}>
                            <TouchableOpacity onPress={() => {
                                this.settings(3);
                            }}>
                                <Image source={player} style={{ resizeMode: 'contain', width: '100%', height: '100%' }} />
                                <View style={{ position: 'absolute', top: '20%', left: '27%' }}>
                                    <Text style={{ color: 'white', fontSize: 30 }}>{this.state.player4}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ position: 'absolute', width: '30%', height: '20%', top: this.state.player5Top, left: '35%' }}>
                            <TouchableOpacity onPress={() => {
                                this.settings(4);
                            }}>
                                <Image source={player} style={{ resizeMode: 'contain', width: '100%', height: '100%' }} />
                                <View style={{ position: 'absolute', top: '20%', left: '27%' }}>
                                    <Text style={{ color: 'white', fontSize: 30 }}>{this.state.player5}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ position: 'absolute', width: '30%', height: '20%', top:this.state.saveTop, left: '38%' }}>
                            <TouchableOpacity>
                                <Image source={player} style={{ resizeMode: 'contain', width: '100%', height: '100%' }} />
                                <View style={{ position: 'absolute', top: '25%', left: '32%' }}>
                                    <Text style={{ color: 'white', fontSize: 30 }}>Reset</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ position: 'absolute', width: '30%', height: '20%', top:this.state.playTop, left: '38%' }}>
                            <TouchableOpacity onPress={this.play}>
                                <Image source={player} style={{ resizeMode: 'contain', width: '100%', height: '100%' }} />
                                <View style={{ position: 'absolute', top: '25%', left: '38%' }}>
                                    <Text style={{ color: 'white', fontSize: 30 }}>Play</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ position: 'absolute', width: '30%', height: '20%', top:this.state.backTop, left: '-5%' }}>
                            <TouchableOpacity onPress={this.goToProfile}>
                                <Image source={back} style={{ resizeMode: 'contain', width: '80%', height: '80%' }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ position: 'absolute',top:'17%',left:this.state.playerNameLeft }}>
                            <Text style={{color:'white',fontSize:30}}>{this.state.playerName}</Text>
                        </View>
                    </View>
                </Animated.View>
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    gnareIconStyle: {
        position: 'absolute',
        top: hp('5%'),
        left: wp('2%'),
        height: hp('12%'),
        width: wp('10%'),
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    }
})


export default withNavigation(GameMenu);