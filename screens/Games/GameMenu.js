import React, { Component } from 'react';
import { AsyncStorage, View, Image, StyleSheet, TouchableOpacity, ImageBackground, Animated, Text, TextInput,ListView } from 'react-native';
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
import blackboard from './gameImages/Hiwibackground.png'; 
import kaito from './gameImages/kaitoGame.png'; 
import kaibe from './gameImages/kaibeGame.png'; 
import DadBatakBG from './gameImages/DadBatakBG.png';
import player from './gameImages/player_icon.png';
import back from '../images/Back_icon.png';

var Realm = require('realm');
let realm;

const backgroundList = [BG,Slide1,DadseBG,DadBatakBG];

playerList = [];

const SessionPlayer = '@MyApp:SessionPlayer';

const Stage2 = '@MyApp:Stage2';
const Stage3 = '@MyApp:Stage3';
const DadbatakStage2 = '@MyApp:DadbatakStage2';
const DadbatakStage3 = '@MyApp:DadbatakStage3';



class GameMenu extends Component {
    
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        realm = new Realm({
            path: 'PlayerDatabase.realm',
            schema: [
                {
                    name: 'Players',
                    properties: {
                        playername:'string',
                        dateCreated:'date',
                        dadseBang1RandomKey:{type:'string',default:'null'},
                        star1:{type:'string',default:'null'},
                        star2: { type: 'string', default: 'null' },
                        star3: { type: 'string', default: 'null' },
                        coinBalance: {type:'string',default:'null'}
                    },
                },
            ],
        });
        realm = new Realm({ path: 'PlayerDatabase.realm' });
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
        })
        var getPlayers = realm.objects('Players');
        this.state = {   
            dataSource: ds.cloneWithRows(getPlayers),
            text:'',
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
            Nonclickableplayer1:'1000%',
            saveTop:'1000%',
            playerName:'Choose Player',
            newPlayername:'',
            playerTextInput:'1000%',
            playTop:'1000%',
            backTop: '1000%',
            playerNameLeft: '40%',
            getIndex:0,
            showdadse:'',
            get:'',
            textInputTop: '1000%',//20%
            saveTop: '1000%', //35%
            cancelTop: '1000%', //52%
            createTop: '80%',//80%
            playerListTop: '12%',
            getPlayername:'',
        }
    }

    checkStage = async (index) => {
       if(index == 1){
           const storedValue = await AsyncStorage.getItem(Stage2);
           const storedValue2 = await AsyncStorage.getItem(Stage3);
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
        const dadse = this.state.showdadse;
        if (showProfile == 'showProfile') {
            Animated.spring(this.animatedValue, {
                toValue: 1
            }).start()
        } else {
            this.setState({
                profileTop: '1000%'
            })
        }
        if(this.state.showdadse == 'show'){
            this.setState({
                kaitoTop: '1000%',
                kaibeLeft: '15%',
                dadbatakTop: '1000%',
                dadseTop: '1000%',
                tanbu1Top: '22%',
                tanbu2Top: '40%',
                tanbu3Top: '59%',
                kastifunTop: '77%',
                level: 'dadsePart'
            });
            this.checkStage(1);
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

    gotoHome = () => {
        this.props.navigation.navigate('home');
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
              this.props.navigation.push('bang');
          }
          if (passIndex == 2) {
              this.props.navigation.push('bang2');
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
        var number = [0,1,2,3,4];
        var Player = ['Player 1','Player 2','Player 3','Player 4','Player 5'];
        for(a = 0 ; a <= number.length; a++){
            if(index == number[a]){
                this.setState({
                    playerName:Player[a],
                    playerNameLeft:'46%',
                })
            }
        }
        this.state.getIndex = index;
    }

    play = async (getPlayer) => {
        await AsyncStorage.setItem(SessionPlayer, getPlayer);
          Animated.spring(this.animatedValue, {
            toValue: .0
        }).start();
        setTimeout(() => {
            this.setState({
                profileTop: '1000%',
            })
            this.state.profile = 'none';
        }, 1000); 
    }

    market = () => {
        if (this.state.level == 'dadsePart'){
            this.props.navigation.navigate('dadseMarket');
        }     
        if (this.state.level == 'dadbatakPart'){
            this.props.navigation.navigate('dadbatakmarket');
        } 
    }


    refreshPlayer =()=>{
        realm = new Realm({ path: 'PlayerDatabase.realm' });
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
        })
        var getPlayers = realm.objects('Players');
        this.setState({
            dataSource: ds.cloneWithRows(getPlayers),
            textInputTop: '1000%',//20%
            saveTop: '1000%', //35%
            cancelTop: '1000%', //52%
            createTop: '80%',//80%
            playerListTop: '12%',
            text:'',
        })
    }

    cancel = () =>{
        this.refreshPlayer();
    }

    save = () => {
        const {text} = this.state;
        realm = new Realm({ path: 'PlayerDatabase.realm' });
        var player = 'player';
        var date = new Date();
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
        })
        var getPlayers = realm.objects('Players');
        if(getPlayers.length <= 4){
            realm.write(() => {
                const myCar = realm.create('Players', {
                    playername: text,
                    dateCreated: String(date),
                });
            })
            this.refreshPlayer();
        }else{
            var getDate = realm.objects('Players');   
            var tmp_dateHolder = [];
            for(a=0;a<getDate.length;a++){
                const con = parseInt(a);
                const oldDate = getDate[con].dateCreated.getTime();
                tmp_dateHolder.push(oldDate);
            }
            const getLowest = Math.min(...tmp_dateHolder);
            const getIndex = tmp_dateHolder.indexOf(getLowest);
                realm.write(() => {
                    realm.delete(getDate[getIndex]);
                    const myCar = realm.create('Players', {
                        playername: text,
                        dateCreated: String(date),
                    });
                })
            this.refreshPlayer();
        }
      
    }

    create = () => {
        this.setState({
            createTop:'1000%',
            playerListTop:'1000%',
            textInputTop: '20%',//20%
            saveTop: '35%', //35%
            cancelTop: '52%', //52%
        })
    }

    render() {
        console.disableYellowBox = true; 
        const { navigation } = this.props;
        const itemId = navigation.getParam('show', 'NO-ID');
        const itemId2 = navigation.getParam('show3', 'NO-ID');
        const itemId3 = navigation.getParam('show3DB', 'NO-ID');
        const getParam = navigation.getParam('openProfile', 'NO-ID');
        const getParam2 = navigation.getParam('showDadseBang', 'NO-ID');
        this.state.show = itemId;
        this.state.show3 = itemId2;
        this.state.show4 = itemId3;
        this.state.profile = getParam;
        this.state.showdadse = getParam2;
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
                    <TouchableOpacity onPress={this.gotoHome}>
                        <Image source={GnareIcon} style={styles.image}></Image>
                    </TouchableOpacity>
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
                        <View style={{
                            position:'absolute',
                            top:this.state.playerListTop,
                            left:'34%',
                            width:'33%',
                            height:'65%',
                            borderColor:'white',
                            borderWidth:1
                        }}>
                            <ListView
                                dataSource={this.state.dataSource}
                                renderRow={rowData => (
                                    <View style={{ backgroundColor: 'white', padding: 20 }}>
                                        <TouchableOpacity onPress={this.play.bind(this,rowData.playername)}>
                                            <Text>Playername : {rowData.playername}</Text>
                                        </TouchableOpacity>
                                    </View>
                                )}
                            />
                        </View>
                        <View style={{
                            position:'absolute',
                            width:'28%',
                            height:'30%',
                            top:this.state.textInputTop,
                            left:'36.30%'
                            }}>
                            <TextInput
                                style={{ backgroundColor: 'white', padding: 10,fontSize:20}}
                                placeholder="Enter player name"
                                autoCapitalize="none"
                                onChangeText={(text) => this.setState({ text })} 
                                value={this.state.text}
                                />
                        </View>
                        <View style={{
                            position: 'absolute',
                            top:this.state.saveTop,
                            left: '36%',
                            width: '30%',
                            height: '15%'
                        }}>
                            <TouchableOpacity onPress={this.save}>
                                <Image source={player} style={{ height: '100%', width: '100%', resizeMode: 'contain' }} />
                                <View style={{ position: 'absolute', left: '38%', top: '25%' }}>
                                    <Text style={{ color: 'white', fontSize: 21, }}>SAVE</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            position: 'absolute',
                            top:this.state.cancelTop,
                            left: '36%',
                            width: '30%',
                            height: '15%'
                        }}>
                            <TouchableOpacity onPress={this.cancel}>
                                <Image source={player} style={{ height: '100%', width: '100%', resizeMode: 'contain' }} />
                                <View style={{ position: 'absolute', left: '33%', top: '25%' }}>
                                    <Text style={{ color: 'white', fontSize: 21, }}>CANCEL</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            position:'absolute',
                            top:this.state.createTop,
                            left:'36%',
                            width:'30%',
                            height:'15%'
                        }}>
                            <TouchableOpacity onPress={this.create}>
                            <Image source={player} style={{height:'100%',width:'100%',resizeMode:'contain'}}/>
                            <View style={{ position: 'absolute',left: '14%', top: '25%'}}>
                                    <Text style={{ color: 'white', fontSize: 21,}}>CREATE PLAYER</Text>
                                </View>
                            </TouchableOpacity>
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