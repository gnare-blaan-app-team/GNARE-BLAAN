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
import Bang2Icon from './gameImages/bang2_icon.png';
import Bang3Icon from './gameImages/bang3_icon.png';
import KastifunIcon from './gameImages/kastifun_icon.png';
import TanbuIcon from './gameImages/tanbu_icon.png';

const backgroundList = [BG,Slide1,DadseBG]

const Key = '@MyApp:key';

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
            level:0,
        }
    }
       onLoad = async () => {
        const quesion = await AsyncStorage.getItem(Key);
        this.setState({ quesion });
        if (quesion == 'Level3') {
            this.props.navigation.push('ds_bang1Question2')
        }
    }

    gotoMainMenu = () => {
        this.props.navigation.navigate('mainMenu');
    }

    gotoDadBatak = () => {
        this.props.navigation.navigate('dadbatak');
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
        })
    }

    gotoDadSeTanbu = (index) => {
        this.onLoad();
        this.setState({
            tanbuTop:'30%',
            dadbatakTop: '1000%',
            dadseTop: '1000%',
            tanbu1Top: '1000%',
            tanbu2Top: '1000%',
            tanbu3Top: '1000%',
            kastifunTop: '1000%',
        })
        
    }
    gotoBang = () => {
        const index = this.state.level;
        if(index == 1){
            this.props.navigation.push('ds_bang1Question1');
        }
        if(index == 2){
            this.props.navigation.push('ds_bang2Question1');
        }
        if(index == 3){
            this.props.navigation.push('ds_bang3Question1');
        }
    }

    render() {
        console.disableYellowBox = true; 
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
                        this.gotoDadSeTanbu();
                        this.setState({
                            level:1,
                        })
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
                    <TouchableOpacity onPress={() => {
                        this.gotoDadSeTanbu();
                        this.setState({
                            level: 2,
                        })
                    }}>
                        <Image source={Bang2Icon} style={styles.image}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top:this.state.tanbu3Top,
                    left: wp('63%'),
                    height: hp('16%'),
                    width: wp('28%'),
                }}>
                    <TouchableOpacity onPress={() => {
                        this.gotoDadSeTanbu();
                        this.setState({
                            level: 3,
                        })
                    }}>
                        <Image source={Bang3Icon} style={styles.image}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top:this.state.kastifunTop,
                    left: wp('63%'),
                    height: hp('16%'),
                    width: wp('28%'),
                }}>
                    <TouchableOpacity onPress={() => {
                        this.gotoDadSeTanbu();
                        this.setState({
                            level: 4,
                        })
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