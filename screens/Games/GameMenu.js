import React, { Component } from 'react';
import { AsyncStorage, View, Image, StyleSheet, TouchableOpacity , ImageBackground } from 'react-native';
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

import DadBatakBG from './gameImages/DadBatakBG.png';

const backgroundList = [BG,Slide1,DadseBG,DadBatakBG]

const prevKey = '@MyApp:prevkey';

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
        this.state = {
            BackgroundImage: backgroundList[1],
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
        }
    }

    checkStage = async (index) => {
       if(index == 1){
           const storedValue = await AsyncStorage.getItem(Stage2);
               if (storedValue == 'unlock') {
                   this.setState({
                       tanbu2Top: '1000%',
                       Clickabletanbu2Top: '40%'
                   })
               }
               const storedValue2 = await AsyncStorage.getItem(Stage3);
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

    componentDidMount(){
        const showIt = this.state.show;
        if (showIt == 'Dadse'){
            this.setState({
                BackgroundImage: backgroundList[2],
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
                BackgroundImage: backgroundList[3],
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
            BackgroundImage: backgroundList[3],
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
        this.setState({
            BackgroundImage:backgroundList[2],
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

    render() {
        console.disableYellowBox = true; 
        const { navigation } = this.props;
        const itemId = navigation.getParam('show', 'NO-ID');
        const itemId2 = navigation.getParam('show3', 'NO-ID');
        const itemId3 = navigation.getParam('show3DB', 'NO-ID');
        this.state.show = itemId;
        this.state.show3 = itemId2;
        this.state.show4 = itemId3;
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
                    <TouchableOpacity>
                        <Image source={Market} style={styles.image}></Image>
                    </TouchableOpacity>
                </View>
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