import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, StatusBar, TouchableOpacity , Animated, 
    ImageBackground, PanResponder, Dimensions, AsyncStorage} from 'react-native';
import { withNavigation } from 'react-navigation';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet';
import GameBG from '../gameImages/GameBG.png';
import Home_icon from '../../images/Home_icon.png';
import Back_icon from '../../images/Back_icon.png';

import GnareIcon from '../gameImages/GnareMain.png';
import KwartoBG from '../gameImages/KwartoBG.png';
import DSKaibe from '../gameImages/Market/DB_kaito.png';
import DSSwatSalah from '../gameImages/Market/DB_IconUtub.png';
import DSUlel from '../gameImages/Market/DB_IconSaul.png';
import DSLbung from '../gameImages/Market/DB_IconGaling.png';
import DSTlayong from '../gameImages/Market/DB_IconFalimak.png';//DB_ItemFalimak
import DSDafeng from '../gameImages/Market/DB_IconSalwal.png';
import DSKulangTana from '../gameImages/Market/DB_IconSlamFang.png';
import DSSlah from '../gameImages/Market/DB_IconBeen.png';
import Coinbank from '../gameImages/Coinbank.png';
import DSMayad from '../gameImages/Market/Mayad.png';
import DSFule from '../gameImages/Market/Fule.png';

import DSProgressBarEmpty from '../gameImages/Market/ProgressBarEmpty.png';
import SwatSalah from '../gameImages/Market/DB_ItemUtub.png';
import Ulel from '../gameImages/Market/DB_ItemSaul.png';
import Lbung from '../gameImages/Market/DB_ItemGaling.png';
import Tlayong from '../gameImages/Market/DB_ItemFalimak.png';
import Dafeng from '../gameImages/Market/DB_ItemSalwal.png';
import KulangTana from '../gameImages/Market/DB_ItemSlamfang1.png';
import Slah from '../gameImages/Market/DB_ItemBeen.png';

import KaibeDafeng from '../gameImages/Market/Pants.png';
import KaibeLbung from '../gameImages/Market/Cloth.png';
import KaibeTlayong from '../gameImages/Market/KaitoBelt.png';
import KaibeSwatSlah from '../gameImages/Market/Cap.png';
import KaibeUlel from '../gameImages/Market/KaibeUlel.png';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const clothWidth = screenWidth * 0.05;
const clothHeight = screenHeight * 0.1;
let fule = [];
let barStack = 0;

class DadBatakMarket extends Component {

    constructor(props) {
        super(props);

        this.progressBar = ['100%', '100%', '100%', '100%', '100%', ];

        this.state = {
            showLbung: 0,
            showLbung2: 1,
            showDafeng: 0,
            showDafeng2: 1,
            showUlel: 0,
            showUlel2: 1,
            showTlayong: 0,
            showFalimak: 0,
            showTlayong2: 1,
            showSwatSlah: 0,
            showSwatSlah2: 1,
            CoinBalance: 0,
            showSlah: 0,
            showSlah2: 1,
            showKulangTana: 0,
            showKulangTana2: 1,

            bar1: this.progressBar[0],
            bar2: this.progressBar[1],
            bar3: this.progressBar[2],
            bar4: this.progressBar[3],
            bar5: this.progressBar[4],

            pan: new Animated.ValueXY(),
            swatX: '26%',
            swatY: '14%',

            ulelX: '26%',
            ulelY: '34%',

            lbungX: '26%',
            lbungY: '54%',

            tlayongX: '26%',
            tlayongY: '74%',

            dafengX: '64%',
            dafengY: '22%',

            kulangTanaX: '66%',
            kulangTanaY: '42.5%',

            slahX: '64%',
            slahY: '62%',
            index: 0,
            fule: [],
        };

        this.clothing = [{
            x: '26%',
            y: '14%',
            width: screenWidth * 0.05,
            height: screenHeight * 0.09,
            price: 10,
        }, {
            x: '26%',
            y: '34%',
            width: screenWidth * 0.1,
            height: screenHeight * 0.16,
            price: 5,
        }, {
            x: '26%',
            y: '54%',
            width: screenWidth * 0.08,
            height: screenHeight * 0.13,
            price: 15,
        }, {
            x: '26%',
            y: '74%',
            width: screenWidth * 0.08,
            height: screenHeight * 0.13,
            price: 15,
        }, {
            x: '64%',
            y: '22%',
            width: screenWidth * 0.08,
            height: screenHeight * 0.13,
            price: 15,
        }, {
            x: '66%',
            y: '42.5%',
            width: screenWidth * 0.08,
            height: screenHeight * 0.13,
            price: 15,
        }, {
            x: '64%',
            y: '62%',
            width: screenWidth * 0.08,
            height: screenHeight * 0.13,
            price: 10,
        }, ];

        this._val = {x: screenWidth * 0.275, y: screenHeight * 0.147};
        this.state.pan.addListener((value) => this._val = value);

        this.swatResponder = PanResponder.create({
            onStartShouldSetPanResponder: (e, gesture)=> true,
            onPanResponderMove: (e, gesture)=> {
                this.setState({swatX: gesture.moveX - (clothWidth/2), swatY: gesture.moveY - (clothHeight/2)});
            },
            onPanResponderRelease: (e, gesture)=> {
                if(gesture.moveX >= (screenWidth * 0.49) - (screenWidth * 0.05) && 
                gesture.moveX <= (screenWidth * 0.49) + (screenWidth * 0.05)) {
                    if(gesture.moveY >= (screenHeight * 0.12) - (screenHeight * 0.05) &&
                    gesture.moveY <= (screenHeight * 0.12) + (screenHeight * 0.05)) {
                        this.setState({showSwatSlah: 1, showSwatSlah2: 0});
                        fule.push(DSSwatSalah);
                        this.fillProgressBar();
                    }
                }
                this.setState({swatX: this.clothing[0].x, swatY: this.clothing[0].y});
            },
        });

        this.ulelResponder = PanResponder.create({
            onStartShouldSetPanResponder: (e, gesture)=> true,
            onPanResponderMove: (e, gesture)=> {
                this.setState({ulelX: gesture.moveX - ((screenWidth * 0.09)/2), 
                    ulelY: gesture.moveY  - ((screenHeight * 0.17)/2)});
            },
            onPanResponderRelease: (e, gesture)=> {
                if(gesture.moveX >= (screenWidth * 0.49) - (screenWidth * 0.05) && 
                gesture.moveX <= (screenWidth * 0.49) + (screenWidth * 0.05)) {
                    if(gesture.moveY >= (screenHeight * 0.28) - (screenHeight * 0.05) &&
                    gesture.moveY <= (screenHeight * 0.28) + (screenHeight * 0.2)) {
                        this.setState({showLbung: 1, showUlel2: 0});
                        fule.push(DSUlel);
                        this.fillProgressBar();
                    }
                }
                this.setState({ulelX: this.clothing[1].x, ulelY: this.clothing[1].y});
            },
        });

        this.lbungResponder = PanResponder.create({
            onStartShouldSetPanResponder: (e, gesture)=> true,
            onPanResponderMove: (e, gesture)=> {
                this.setState({lbungX: gesture.moveX - ((screenWidth * 0.08)/2), 
                    lbungY: gesture.moveY - ((screenHeight * 0.14)/2)});
            },
            onPanResponderRelease: (e, gesture)=> {
                if(gesture.moveX >= (screenWidth * 0.49) - (screenWidth * 0.05) && 
                gesture.moveX <= (screenWidth * 0.49) + (screenWidth * 0.05)) {
                    if(gesture.moveY >= (screenHeight * 0.45) - (screenHeight * 0.05) &&
                    gesture.moveY <= (screenHeight * 0.45) + (screenHeight * 0.05)) {
                        this.setState({showTlayong: 1, showLbung2: 0});
                        fule.push(DSLbung);
                        this.fillProgressBar();
                    }
                }
                this.setState({lbungX: this.clothing[2].x, lbungY: this.clothing[2].y});
            },
        });

        this.tlayongResponder = PanResponder.create({
            onStartShouldSetPanResponder: (e, gesture)=> true,
            onPanResponderMove: (e, gesture)=> {
                this.setState({tlayongX: gesture.moveX - ((screenWidth * 0.08)/2), 
                    tlayongY: gesture.moveY - ((screenHeight * 0.14)/2)});
            },
            onPanResponderRelease: (e, gesture)=> {
                if(gesture.moveX >= (screenWidth * 0.49) - (screenWidth * 0.05) && 
                gesture.moveX <= (screenWidth * 0.49) + (screenWidth * 0.05)) {
                    if(gesture.moveY >= (screenHeight * 0.35) - (screenHeight * 0.05) &&
                    gesture.moveY <= (screenHeight * 0.35) + (screenHeight * 0.2)) {
                        this.setState({showFalimak: 1, showTlayong2: 0});
                        fule.push(DSTlayong);
                        
                    }
                }
                this.setState({tlayongX: this.clothing[3].x, tlayongY: this.clothing[3].y});
            },
        });

        this.dafengResponder = PanResponder.create({
            onStartShouldSetPanResponder: (e, gesture)=> true,
            onPanResponderMove: (e, gesture)=> {
                this.setState({dafengX: gesture.moveX - ((screenWidth * 0.08)/2), 
                    dafengY: gesture.moveY - ((screenHeight * 0.13)/2)});
            },
            onPanResponderRelease: (e, gesture)=> {
                if(gesture.moveX >= (screenWidth * 0.49) - (screenWidth * 0.05) && 
                gesture.moveX <= (screenWidth * 0.49) + (screenWidth * 0.05)) {
                    if(gesture.moveY >= (screenHeight * 0.45) - (screenHeight * 0.05) &&
                    gesture.moveY <= (screenHeight * 0.45) + (screenHeight * 0.2)) {
                        this.setState({showDafeng: 1, showDafeng2: 0});
                        fule.push(DSDafeng);
                        this.fillProgressBar();
                    }
                }
                this.setState({dafengX: this.clothing[4].x, dafengY: this.clothing[4].y});
            },
        });

        this.kulangTanaResponder = PanResponder.create({
            onStartShouldSetPanResponder: (e, gesture)=> true,
            onPanResponderMove: (e, gesture)=> {
                this.setState({kulangTanaX: gesture.moveX - ((screenWidth * 0.08)/2), 
                    kulangTanaY: gesture.moveY - ((screenHeight * 0.14)/2)});
            },
            onPanResponderRelease: (e, gesture)=> {
                if(gesture.moveX >= (screenWidth * 0.49) - (screenWidth * 0.05) && 
                gesture.moveX <= (screenWidth * 0.49) + (screenWidth * 0.05)) {
                    if(gesture.moveY >= (screenHeight * 0.4) - (screenHeight * 0.4) &&
                    gesture.moveY <= (screenHeight * 0.4) + (screenHeight * 0.4)) {
                        this.setState({showKulangTana: 1, showKulangTana2: 0});
                        fule.push(DSKulangTana);
                        this.fillProgressBar();
                    }
                }
                this.setState({kulangTanaX: this.clothing[5].x, kulangTanaY: this.clothing[5].y});
            },
        });

        this.slahResponder = PanResponder.create({
            onStartShouldSetPanResponder: (e, gesture)=> true,
            onPanResponderMove: (e, gesture)=> {
                this.setState({slahX: gesture.moveX - ((screenWidth * 0.08)/2), 
                    slahY: gesture.moveY - ((screenHeight * 0.14)/2)});
            },
            onPanResponderRelease: (e, gesture)=> {
                if(gesture.moveX >= (screenWidth * 0.49) - (screenWidth * 0.05) && 
                gesture.moveX <= (screenWidth * 0.49) + (screenWidth * 0.05)) {
                    if(gesture.moveY >= (screenHeight * 0.4) - (screenHeight * 0.4) &&
                    gesture.moveY <= (screenHeight * 0.4) + (screenHeight * 0.4)) {
                        this.setState({showSlah: 1, showSlah2: 0});
                        fule.push(DSSlah);
                    }
                }
                this.setState({slahX: this.clothing[6].x, slahY: this.clothing[6].y});
            },
        });

    }
    static navigationOptions = {
        header: null,
    }

    fule = () => {
        switch(fule[fule.length - 1]) {
            case DSSwatSalah: {
                this.setState({showSwatSlah2: 1, showSwatSlah: 0});
                fule.pop();
                break;
            };
            case DSUlel: {
                this.setState({showUlel2: 1, showLbung: 0});
                fule.pop();
                break;
            };
            case DSLbung: {
                this.setState({showLbung2: 1, showTlayong: 0});
                fule.pop();
                break;
            };
            case DSTlayong: {
                this.setState({showTlayong2: 1, showFalimak: 0});
                fule.pop();
                break;
            };
            case DSDafeng: {
                this.setState({showDafeng2: 1, showDafeng: 0});
                fule.pop();
                break;
            };
            case DSKulangTana: {
                this.setState({showKulangTana2: 1, showKulangTana: 0});
                fule.pop();
                break;
            };
            case DSSlah: {
                this.setState({showSlah2: 1, showSlah: 0});
                fule.pop();
                break;
            };
        }
    }

    componentDidMount() {
        this.initClothing();
    }

    initClothing = async () => {
        const showLbung = '@MyApp:showLbung';
        const showDafeng = '@MyApp:showDafeng';
        const showUlel = '@MyApp:showUlel';
        const showSwatSlah = '@MyApp:showSwatSlah';
        const showTlayong = '@MyApp:showTlayong';
        const showKulangTana = '@MyApp:showKulangTana';
        const showSlah = '@MyApp:showSlah';
        const CoinBalance = '@MyApp:CoinBalance';
        try {
            const coin = await AsyncStorage.getItem(CoinBalance);
            const dafeng = await AsyncStorage.getItem(showDafeng);
            const ulel = await AsyncStorage.getItem(showUlel);
            const swatSlah = await AsyncStorage.getItem(showSwatSlah);
            const tlayong = await AsyncStorage.getItem(showTlayong);
            const kulangTana = await AsyncStorage.getItem(showKulangTana);
            const slah = await AsyncStorage.getItem(showSlah);
            const lbung = await AsyncStorage.getItem(showLbung);

            if(coin == null) {
                await AsyncStorage.setItem(CoinBalance, 0);
            } else {
                this.setState({CoinBalance: coin});
            }
            if(dafeng == null) {
                await AsyncStorage.setItem(showDafeng, 0);
            } else {
                this.setState({showDafeng: dafeng});
                this.setState({showDafeng2: dafeng == 0 ? 1 : 0});
            }
            if(ulel == null) {
                await AsyncStorage.setItem(showUlel, 0);
            } else {
                this.setState({showUlel: ulel});
                this.setState({showUlel2: ulel == 0 ? 1 : 0});
            }
            if(swatSlah == null) {
                await AsyncStorage.setItem(showSwatSlah, 0);
            } else {
                this.setState({showSwatSlah: swatSlah});
                this.setState({showSwatSlah2: swatSlah == 0 ? 1 : 0});
            }
            if(tlayong == null) {
                await AsyncStorage.setItem(showTlayong, 0);
            } else {
                this.setState({showTlayong: tlayong});
                this.setState({showTlayong2: tlayong == 0 ? 1 : 0});
            }
            if(kulangTana == null) {
                await AsyncStorage.setItem(showKulangTana, 0);
            } else {
                this.setState({showKulangTana: kulangTana});
                this.setState({kulangTana: kulangTana == 0 ? 1 : 0});
            }
            if(slah == null) {
                await AsyncStorage.setItem(showSlah, 0);
            } else {
                this.setState({showSlah: slah});
                this.setState({showSlah2: slah == 0 ? 1 : 0});
            }
            if(lbung == null) {
                await AsyncStorage.setItem(showLbung, 0);
            } else {
                this.setState({showLbung: lbung});
                this.setState({showLbung2: lbung == 0 ? 1 : 0});
            }
        } catch (error) {

        }
    }

    gotoMainMenu = () =>{
        this.props.navigation.navigate('mainMenu')
    }

    // gotoDadSe = () =>{
    //     this.props.navigation.replace('gameMenu', { showGameover: 'Dadse' });
    // }

    gotoBack = () =>{
        this.props.navigation.replace('gameMenu', { showDadseBang: 'show' });
    }


    gotoHome = () =>{
        this.props.navigation.navigate('home')
    }

    unFillProgressBar = () => {
        fill = 0;
        let index = barStack;
        let progress = setInterval(()=> {
            fill = fill + 5;
            
            switch(index) {
                case 1: {
                    this.setState({bar1: fill + '%'});
                    break;
                };
                case 2: {
                    this.setState({bar2: fill + '%'});
                    break;
                };
                case 3: {
                    this.setState({bar3: fill + '%'});
                    break;
                };
                case 4: {
                    this.setState({bar4: fill + '%'});
                    break;
                };
                case 5: {
                    this.setState({bar5: fill + '%'});
                    break;
                };
            }
            if(fill >=  100) {
                fill = 100;
                clearInterval(progress);
            }
        }, 10);
        barStack--;
    }

    fillProgressBar = () => {
        fill = 100;
        barStack++;
        let index = barStack;
        
        let progress = setInterval(()=> {
            fill = fill - 5;
            
            switch(index) {
                case 1: {
                    this.setState({bar1: fill + '%'});
                    break;
                };
                case 2: {
                    this.setState({bar2: fill + '%'});
                    break;
                };
                case 3: {
                    this.setState({bar3: fill + '%'});
                    break;
                };
                case 4: {
                    this.setState({bar4: fill + '%'});
                    break;
                };
                case 5: {
                    this.setState({bar5: fill + '%'});
                    break;
                };
            }
            if(fill <= 0) {
                clearInterval(progress);
                fill = 0;
            }
        }, 10);
    }

    fule = () => {
        switch(fule[fule.length - 1]) {
            case DSSwatSalah: {
                this.unFillProgressBar();
                this.setState({showSwatSlah2: 1, showSwatSlah: 0});
                fule.pop();
                //this.unfillProgressBar();
                break;
            };
            case DSUlel: {
                this.unFillProgressBar();
                this.setState({showUlel2: 1, showLbung: 0});
                //this.unfillProgressBar();
                fule.pop();
                break;
            };
            case DSLbung: {
                this.unFillProgressBar();
                this.setState({showLbung2: 1, showTlayong: 0});
                //this.unfillProgressBar();
                fule.pop();
                break;
            };
            case DSTlayong: {
                //this.unFillProgressBar();
                this.setState({showTlayong2: 1, showFalimak: 0});
                //this.unfillProgressBar();
                fule.pop();
                break;
            };
            case DSDafeng: {
                this.unFillProgressBar();
                this.setState({showDafeng2: 1, showDafeng: 0});
                //this.unfillProgressBar();
                fule.pop();
                break;
            };
            case DSKulangTana: {
                this.unFillProgressBar();
                this.setState({showKulangTana2: 1, showKulangTana: 0});
                fule.pop();
                //this.unfillProgressBar();
                break;
            };
            case DSSlah: {
                this.setState({showSlah2: 1, showSlah: 0});
                fule.pop();
                break;
            };
        }
    }

    componentDidMount() {
        this.initClothing();
    }
    
    render() {
        StatusBar.setHidden(true);
        const panStyle = {
            transform: this.state.pan.getTranslateTransform()
        }
        return (
            <ImageBackground source={GameBG} style={styles.image}>

                <View style={{position: 'absolute', width: '70%', height: '90%'}}>
                    <Image source={KwartoBG} style={{width: '100%', height: '100%',
                    resizeMode: 'stretch'}}></Image>
                </View>

                <View style={{position: 'absolute', top:'10%', left: '42.5%',
                    width: '15%', height: '70%'}}>
                    <Image source={DSKaibe} style={{width: '100%', height: '100%',
                    resizeMode: 'stretch'}}></Image>
                </View>

                <View style={{position: 'absolute', top:'12.5%', left: '25%',
                    width: '12%', height: '17%'}}>
                    <Image source={DSSwatSalah} style={{width: '100%', height: '100%',
                    resizeMode: 'stretch'}}></Image>
                </View>
                <View style={{position: 'absolute', top:'32%', left: '25%',
                    width: '12%', height: '17%'}}>
                    <Image source={DSUlel} style={{width: '100%', height: '100%',
                    resizeMode: 'stretch'}}></Image>
                </View>
                <View style={{position: 'absolute', top:'51.5%', left: '25%',
                    width: '12%', height: '17%'}}>
                    <Image source={DSLbung} style={{width: '100%', height: '100%',
                    resizeMode: 'stretch'}}></Image>
                </View>
                <View style={{position: 'absolute', top:'71%', left: '25%',
                    width: '12%', height: '17%'}}>
                    <Image source={DSTlayong} style={{width: '100%', height: '100%',
                    resizeMode: 'stretch'}}></Image>
                </View>

                <View style={{position: 'absolute', top:'20%', right: '25%',
                    width: '12%', height: '17%'}}>
                    <Image source={DSDafeng} style={{width: '100%', height: '100%',
                    resizeMode: 'stretch'}}></Image>
                </View>
                <View style={{position: 'absolute', top:'39.5%', right: '25%',
                    width: '12%', height: '17%'}}>
                    <Image source={DSKulangTana} style={{width: '100%', height: '100%',
                    resizeMode: 'stretch'}}></Image>
                </View>
                <View style={{position: 'absolute', top:'59%', right: '25%',
                    width: '12%', height: '17%'}}>
                    <Image source={DSSlah} style={{width: '100%', height: '100%',
                    resizeMode: 'stretch'}}></Image>
                </View>

                <View style={{position: 'absolute', top:'2.5%', right: '12%',
                    width: '12%', height: '17%'}}>
                    <Image source={Coinbank} style={{width: '100%', height: '100%',
                    resizeMode: 'stretch'}}></Image>
                    <Text style={{position: 'absolute', top: '15%',
                        left: '40%', fontSize: 15, color: '#ffea00'}}>{this.state.CoinBalance}.0</Text>
                </View>

                <View style={{position: 'absolute', top:'20%', right: '12%',
                    width: '8%', height: '70%'}}>
                    <View style={{position: 'absolute', top: '16%', width: '65%', height: '81%', 
                        left: '17.5%',
                        backgroundColor: 'white'}}>
                        <View style={{ width: '100%', height: '20.5%', top: '1%', 
                            position: 'absolute',
                            backgroundColor: '#F1C40F'}}>
                            <View style={{width: '100%', height: this.state.bar5, backgroundColor: 'white'}}>
                            </View>
                        </View>
                        <View style={{ width: '100%', height: '20%', top: '20.5%', 
                            position: 'absolute',
                            backgroundColor: '#F39C12'}}>
                            <View style={{width: '100%', height: this.state.bar4, backgroundColor: 'white'}}>
                            </View>
                        </View>
                        <View style={{ width: '100%', height: '20%', top: '39.5%', 
                            position: 'absolute',
                            backgroundColor: '#E67E22'}}>
                            <View style={{width: '100%', height: this.state.bar3, backgroundColor: 'white'}}>
                            </View>
                        </View>
                        <View style={{ width: '100%', height: '20%', top: '59.5%', 
                            position: 'absolute',
                            backgroundColor: '#D35400'}}>
                            <View style={{width: '100%', height: this.state.bar2, backgroundColor: 'white'}}>
                            </View>
                        </View>
                        <View style={{ width: '100%', height: '20%', top: '79%', 
                            position: 'absolute',
                            backgroundColor: '#C0392B'}}>
                            <View style={{width: '100%', height: this.state.bar1, backgroundColor: 'white'}}>
                            </View>
                        </View>
                    </View>
                    <Image source={DSProgressBarEmpty} style={{width: '100%', height: '100%',
                    resizeMode: 'stretch'}}></Image>
                </View>


                {/* Utub/Cap */}
                <View style={{position: 'absolute', top:'8.2%', left: '46.8%',
                    width: '7%', height: '8%', opacity: this.state.showSwatSlah}}>
                    <Image source={KaibeSwatSlah} style={{width: '100%', height: '100%',
                    resizeMode: 'stretch'}}></Image>
                </View>

                {/* Salwal */}
                <View style={{position: 'absolute', top:'41%', left: '45.5%',
                    width: '9.5%', height: '22%', opacity: this.state.showDafeng}}>
                    <Image source={KaibeDafeng} style={{width: '100%', height: '100%',
                    resizeMode: 'stretch'}}></Image>
                </View>

                {/* Galing */}
                <View style={{position: 'absolute', top:'46.5%', left: '46.3%',
                    width: '7.8%', height: '12.5%', opacity: this.state.showTlayong}}>
                    <Image source={KaibeTlayong} style={{width: '100%', height: '100%',
                    resizeMode: 'stretch'}}></Image>
                </View>

                {/* Saul */}
                <View style={{position: 'absolute', top:'24%', left: '45.8%',
                    width: '9%', height: '24%', opacity: this.state.showLbung}}>
                    <Image source={KaibeLbung} style={{width: '100%', height: '100%',
                    resizeMode: 'stretch'}}></Image>
                </View>
               

                <View style={{position: 'absolute', top:'67%', left: '38%',
                    width: '8%', height: '13%', opacity: this.state.showFalimak}}>
                    <Image source={Tlayong} style={{width: '100%', height: '100%',
                    resizeMode: 'stretch'}}></Image>
                </View>
                

                <View style={{position: 'absolute', top:'20%', left: '38%',
                    width: '8%', height: '60%', opacity: this.state.showKulangTana}}>
                    <Image source={KulangTana} style={{width: '100%', height: '100%',
                    resizeMode: 'stretch'}}></Image>
                </View>

                <View style={{position: 'absolute', top:'67%', left: '54%',
                    width: '8%', height: '13%', opacity: this.state.showSlah}}>
                    <Image source={Slah} style={{width: '100%', height: '100%',
                    resizeMode: 'stretch'}}></Image>
                </View>


                <View style={{position: 'absolute', top: this.state.swatY, 
                    left: this.state.swatX, opacity: this.state.showSwatSlah2,
                    width: '8%', height: '13%'}} {...this.swatResponder.panHandlers}>
                    <Image source={SwatSalah} style={{width: '100%', height: '100%',
                    resizeMode: 'stretch'}}></Image>
                </View>

                {/* Galing */}
                <View style={{position: 'absolute', top: this.state.lbungY, 
                    left: this.state.lbungX, opacity: this.state.showLbung2,
                    width: '8%', height: '13%'}} {...this.lbungResponder.panHandlers}>
                    <Image source={Lbung} style={{width: '100%', height: '100%',
                    resizeMode: 'stretch'}}></Image>
                </View>

                <View style={{position: 'absolute', top: this.state.ulelY, 
                    left: this.state.ulelX, opacity: this.state.showUlel2,
                    width: '8%', height: '13%'}} {...this.ulelResponder.panHandlers}>
                    <Image source={Ulel} style={{width: '100%', height: '100%',
                    resizeMode: 'stretch'}}></Image>
                </View>

                <View style={{position: 'absolute', top: this.state.tlayongY, 
                    left: this.state.tlayongX, opacity: this.state.showTlayong2,
                    width: '8%', height: '13%'}} {...this.tlayongResponder.panHandlers}>
                    <Image source={Tlayong} style={{width: '100%', height: '100%',
                    resizeMode: 'stretch'}}></Image>
                </View>

                <View style={{position: 'absolute', top: this.state.dafengY, 
                    left: this.state.dafengX, opacity: this.state.showDafeng2,
                    width: '8%', height: '13%'}} {...this.dafengResponder.panHandlers}>
                    <Image source={Dafeng} style={{width: '100%', height: '100%',
                    resizeMode: 'stretch'}}></Image>
                </View>

                <View style={{position: 'absolute', top: this.state.kulangTanaY, 
                    left: this.state.kulangTanaX, opacity: this.state.showKulangTana2,
                    width: '3%', height: '11%'}} {...this.kulangTanaResponder.panHandlers}>
                    <Image source={KulangTana} style={{width: '100%', height: '100%',
                    resizeMode: 'stretch'}}></Image>
                </View>

                <View style={{position: 'absolute', top: this.state.slahY, 
                    left: this.state.slahX, opacity: this.state.showSlah2,
                    width: '8%', height: '13%'}} {...this.slahResponder.panHandlers}>
                    <Image source={Slah} style={{width: '100%', height: '100%',
                    resizeMode: 'stretch'}}></Image>
                </View>



                <View style={{position: 'absolute', top:'83%', left: '41%',
                    width: '8%', height: '8%'}}>
                    <Image source={DSMayad} style={{width: '100%', height: '100%',
                    resizeMode: 'stretch'}}></Image>
                </View>

                <View style={{position: 'absolute', top:'83%', right: '41%',
                    width: '8%', height: '8%'}}>
                    <TouchableOpacity onPress={this.fule}>
                        <Image source={DSFule} style={{width: '100%', height: '100%',
                        resizeMode: 'stretch'}}></Image>
                    </TouchableOpacity>
                </View>
                
            
                {/* <View style={{position: 'absolute',  left: '3%', 
                    bottom: '3%', width: '10%', height: '24%'}}>
                        <TouchableOpacity>
                            <Image source={GnareIcon} style={styles.image}></Image>
                        </TouchableOpacity>
                </View> */}


                <View style={styles.backContainer}>
                    <TouchableOpacity onPress={this.gotoBack}>
                        <Image source={Back_icon} style={styles.home}></Image>
                    </TouchableOpacity>
                </View>

                <View style={style.gnareIconStyle}>
                    <TouchableOpacity onPress={this.gotoHome}>
                        <Image source={GnareIcon} style={style.image}></Image>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.homeContainer}>
                    <TouchableOpacity onPress={this.gotoMainMenu}>
                        <Image source={Home_icon} style={styles.home}></Image>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

const style = StyleSheet.create({
    gnareIconStyle: {
        position: 'absolute',
        bottom: '9%',
        left: '2%',
        height: hp('12%'),
        width: wp('12%'),
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
})


export default withNavigation(DadBatakMarket);