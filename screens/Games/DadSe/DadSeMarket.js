import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity , Animated, 
    ImageBackground, PanResponder, Dimensions, AsyncStorage} from 'react-native';
import { withNavigation } from 'react-navigation';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet';
import GameBG from '../gameImages/GameBG.png';
import Home_icon from '../../images/Home_icon.png';
import GnareIcon from '../gameImages/GnareMain.png';
import KwartoBG from '../gameImages/KwartoBG.png';
import DSKaibe from '../gameImages/Market/DS_Kaibe.png';
import DSSwatSalah from '../gameImages/Market/DS_SwatSlahContainer.png';
import DSUlel from '../gameImages/Market/DS_UlelContainer.png';
import DSLbung from '../gameImages/Market/DS_LbungContainer.png';
import DSTlayong from '../gameImages/Market/DS_TlayongContainer.png';
import DSDafeng from '../gameImages/Market/DS_DafengContainer.png';
import DSKulangTana from '../gameImages/Market/DS_KulangTanaContainer.png';
import DSSlah from '../gameImages/Market/DS_SlahContainer.png';
import Coinbank from '../gameImages/Coinbank.png';
import DSMayad from '../gameImages/Market/Mayad.png';
import DSFule from '../gameImages/Market/Fule.png';
import DSXButton from '../gameImages/Market/XButton.png';
import DSProgressBarEmpty from '../gameImages/Market/ProgressBarEmpty.png';
import SwatSalah from '../gameImages/Market/DS_SwatSlah.png';
import Ulel from '../gameImages/Market/DS_Ulel.png';
import Lbung from '../gameImages/Market/DS_Lbung.png';
import Tlayong from '../gameImages/Market/DS_Tlayong.png';
import Dafeng from '../gameImages/Market/DS_Dafeng.png';
import KulangTana from '../gameImages/Market/DS_KulangTana.png';
import Slah from '../gameImages/Market/DS_Slah.png';

import KaibeDafeng from '../gameImages/Market/Skirt.png';
import KaibeLbung from '../gameImages/Market/Blouse.png';
import KaibeTlayong from '../gameImages/Market/KaibeBelt.png';
import KaibeSwatSlah from '../gameImages/Market/Headband.png';
import KaibeUlel from '../gameImages/Market/KaibeUlel.png';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const CoinBalance = '@MyApp:CoinBalance';
const showLbung = '@MyApp:showLbung';
const showDafeng = '@MyApp:showDafeng';
const showUlel = '@MyApp:showUlel';
const showSwatSlah = '@MyApp:showSwatSlah';
const showTlayong = '@MyApp:showTlayong';
const showKulangTana = '@MyApp:showKulangTana';
const showSlah = '@MyApp:showSlah';

class DadSeMarket extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showLbung: 0,
            showLbung2: 1,
            showDafeng: 0,
            showDafeng2: 1,
            showUlel: 0,
            showUlel2: 1,
            showTlayong: 0,
            showTlayong2: 1,
            showSwatSlah: 0,
            showSwatSlah2: 1,
            CoinBalance: 0,
            showSlah: 0,
            showSlah2: 1,
            showKulangTana: 0,
            showKulangTana2: 1,

            pan: new Animated.ValueXY(),
            swatX: screenWidth * 0.272,
            swatY: screenHeight * 0.15,

            ulelX: screenWidth * 0.255,
            ulelY: screenHeight * 0.3,

            lbungX: screenWidth * 0.26,
            lbungY: screenHeight * 0.5,

            tlayongX: screenWidth * 0.26,
            tlayongY: screenHeight * 0.69,

            dafengX: screenWidth * 0.625,
            dafengY: screenHeight * 0.21,

            kulangTanaX: screenWidth * 0.625,
            kulangTanaY: screenHeight * 0.41,

            slahX: screenWidth * 0.625,
            slahY: screenHeight * 0.6,
            index: -1,
        };

        this.clothing = [{
            x: screenWidth * 0.272,
            y: screenHeight * 0.145,
        }, {
            x: screenWidth * 0.255,
            y: screenHeight * 0.3,
        }, {
            x: screenWidth * 0.26,
            y: screenHeight * 0.5,
        }, {
            x: screenWidth * 0.26,
            y: screenHeight * 0.69,
        }, {
            x: screenWidth * 0.625,
            y: screenHeight * 0.21,
        }, {
            x: screenWidth * 0.625,
            y: screenHeight * 0.41,
        }, {
            x: screenWidth * 0.625,
            y: screenHeight * 0.6,
        }, ];

        this._val = {x: screenWidth * 0.275, y: screenHeight * 0.147};
        this.state.pan.addListener((value) => this._val = value);

        this.swatResponder = PanResponder.create({
            onStartShouldSetPanResponder: (e, gesture)=> true,
            onPanResponderMove: (e, gesture)=> {
                this.setState({swatX: gesture.moveX - ((screenWidth * 0.05)/2), 
                    swatY: gesture.moveY - ((screenHeight * 0.1)/2)});
            },
            onPanResponderRelease: (e, gesture)=> {
                if(gesture.moveX >= (screenWidth * 0.49) - (screenWidth * 0.05) && 
                gesture.moveX <= (screenWidth * 0.49) + (screenWidth * 0.05)) {
                    if(gesture.moveY >= (screenHeight * 0.12) - (screenHeight * 0.05) &&
                    gesture.moveY <= (screenHeight * 0.12) + (screenHeight * 0.05)) {
                        this.setState({showSwatSlah: 1, showSwatSlah2: 0});

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
                    if(gesture.moveY >= (screenHeight * 0.2) - (screenHeight * 0.05) &&
                    gesture.moveY <= (screenHeight * 0.2) + (screenHeight * 0.05)) {
                        this.setState({showUlel: 1, showUlel2: 0});
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
                    if(gesture.moveY >= (screenHeight * 0.28) - (screenHeight * 0.05) &&
                    gesture.moveY <= (screenHeight * 0.28) + (screenHeight * 0.2)) {
                        this.setState({showLbung: 1, showLbung2: 0});
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
                    if(gesture.moveY >= (screenHeight * 0.45) - (screenHeight * 0.05) &&
                    gesture.moveY <= (screenHeight * 0.45) + (screenHeight * 0.05)) {
                        this.setState({showTlayong: 1, showTlayong2: 0});
                    }
                }
                this.setState({tlayongX: this.clothing[3].x, tlayongY: this.clothing[3].y});
            },
        });

        this.dafengResponder = PanResponder.create({
            onStartShouldSetPanResponder: (e, gesture)=> true,
            onPanResponderMove: (e, gesture)=> {
                this.setState({dafengX: gesture.moveX - ((screenWidth * 0.08)/2), 
                    dafengY: gesture.moveY - ((screenHeight * 0.14)/2)});
            },
            onPanResponderRelease: (e, gesture)=> {
                if(gesture.moveX >= (screenWidth * 0.49) - (screenWidth * 0.05) && 
                gesture.moveX <= (screenWidth * 0.49) + (screenWidth * 0.05)) {
                    if(gesture.moveY >= (screenHeight * 0.45) - (screenHeight * 0.05) &&
                    gesture.moveY <= (screenHeight * 0.45) + (screenHeight * 0.2)) {
                        this.setState({showDafeng: 1, showDafeng2: 0});
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
                    }
                }
                this.setState({slahX: this.clothing[6].x, slahY: this.clothing[6].y});
            },
        });

    }
    static navigationOptions = {
        header: null,
    }

    fule = () =>{
        this.setState({showDafeng2: 1, showLbung2: 1, showTlayong2: 1, 
            showSwatSlah2: 1, showUlel2: 1, showKulangTana2: 1, showSlah2: 1,
            });
        this.setState({showUlel: 0, showLbung: 0, showKulangTana: 0, showSlah: 0,
            showDafeng: 0, showSwatSlah: 0, showTlayong: 0, });
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

    gotoDadSe = () =>{
        this.props.navigation.navigate('dadse')
    }
    
    render() {
        const panStyle = {
            transform: this.state.pan.getTranslateTransform()
        }
        return (
            <ImageBackground
                source={GameBG}
                style={styles.image}
            >
                <View style={styles.gnareIconStyle}>
                    <Image source={GnareIcon} style={styles.image}></Image>
                </View>
                
                <View style={{width: '70%', height: '90%',}}>
                    <Image source={KwartoBG} style={{width: '100%', height: '100%',
                        resizeMode: 'contain'}}></Image>
                    <View style={{top: '0%', width: '100%', height: '100%', position: 'absolute'}}>
                        <View style={{position: 'absolute', width: '17.5%', height: '80%', top: '5%',
                            left: '40%'}}>
                            <Image source={DSKaibe} style={styles.image}></Image>
                        </View>

                        {/* Mayad */}
                        {/* Swat Salah */}
                        <View style={{position: 'absolute', width: '15%', height: '20%', top: '7.5%',
                            left: '15%'}}>
                            <Image source={DSSwatSalah} style={styles.image}></Image>
                        </View>
                        
                        {/* Ulel */}
                        <View style={{position: 'absolute', width: '15%', height: '20%', top: '30%',
                            left: '15%'}}>
                            <Image source={DSUlel} style={styles.image}></Image>
                        </View>
                        {/* Lbung */}
                        <View style={{position: 'absolute', width: '15%', height: '20%', top: '52.5%',
                            left: '15%'}}>
                            <Image source={DSLbung} style={styles.image}></Image>
                        </View>
                        {/* Tlayong */}
                        <View style={{position: 'absolute', width: '15%', height: '20%', top: '75%',
                            left: '15%'}}>
                            <Image source={DSTlayong} style={styles.image}></Image>
                        </View>

                        {/* Mayad Right */}
                        <View style={{position: 'absolute', width: '15%', height: '20%', top: '17.5%',
                            right: '17.5%'}}>
                            <Image source={DSDafeng} style={styles.image}></Image>
                        </View>
                        <View style={{position: 'absolute', width: '15%', height: '20%', top: '41.25%',
                            right: '17.5%'}}>
                            <Image source={DSKulangTana} style={styles.image}></Image>
                        </View>
                        <View style={{position: 'absolute', width: '15%', height: '20%', top: '65%',
                            right: '17.5%'}}>
                            <Image source={DSSlah} style={styles.image}></Image>
                        </View>

                        
                        {/* Coins, ProgressBar */}
                        <View style={{position: 'absolute', width: '10%', height: '80%', top: '15%',
                            right: '2.5%'}}>
                            <Image source={DSProgressBarEmpty} style={styles.image}></Image>
                        </View>
                        <View style={{position: 'absolute', width: '10%', height: '15%', top: '-2.5%',
                            right: '2.5%'}}>
                            <Image source={Coinbank} style={styles.image}></Image>
                            <Text style={{position: 'absolute', width: '70%', height: '30%',
                                top: '13%', left: '40%', color: '#ffea00', fontSize: 12}}>{this.state.CoinBalance}.0</Text>
                        </View>

                        {/* Bottom Buttons */}
                        <View style={{position: 'absolute', width: '10%', height: '10%', top: '87.5%',
                            left: '32.2%'}}>
                            <Image source={DSMayad} style={styles.image}></Image>
                        </View>
                        <View style={{position: 'absolute', width: '10%', height: '10%', top: '87.5%',
                            left: '43.7%'}}>
                            <TouchableOpacity onPress={this.fule}>
                                <View style={{width: '100%', height: '100%'}}>
                                    <Image source={DSFule} style={styles.image}></Image>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{position: 'absolute', width: '10%', height: '10%', top: '87.5%',
                            left: '55.2%'}}>
                            <Image source={DSXButton} style={styles.image}></Image>
                        </View>
                    </View>
                </View>

                
                <View style={{ position: 'absolute', width: '6%', resizeMode: 'contain',
                        height: '9%', top: '8.8%', left: '46.1%', opacity: this.state.showSwatSlah,
                    }}>
                    <Image source={KaibeSwatSlah} style={clothStyle.clothing}></Image>
                </View>
                <View style={{ position: 'absolute', width: '12%', resizeMode: 'contain',
                        height: '23.3%', top: '24.5%', left: '43.3%', opacity: this.state.showLbung,
                    }}>
                    <Image source={KaibeLbung} style={clothStyle.clothing}></Image>
                </View>
                <View style={{ position: 'absolute', width: '5.8%', resizeMode: 'contain',
                        height: '17%', top: '19.9%', left: '45.9%', opacity: this.state.showUlel,
                    }}>
                    <Image source={KaibeUlel} style={clothStyle.clothing}></Image>
                </View>
                <View style={{ position: 'absolute', width: '8.7%', resizeMode: 'contain',
                        height: '32.5%', top: '43%', left: '44.9%', opacity: this.state.showDafeng,
                    }}>
                    <Image source={KaibeDafeng} style={clothStyle.clothing}></Image>
                </View>
                <View style={{ position: 'absolute', width: '8%', resizeMode: 'contain',
                        height: '20%', top: '40%', left: '45.3%', opacity: this.state.showTlayong,
                    }}>
                    <Image source={KaibeTlayong} style={clothStyle.clothing}></Image>
                </View>
                <View style={{ position: 'absolute', width: '8%', resizeMode: 'contain',
                        height: '20%', top: '40%', left: '45.3%', opacity: this.state.showTlayong,
                    }}>
                    <Image source={KaibeTlayong} style={clothStyle.clothing}></Image>
                </View>
                <View style={{ position: 'absolute', width: '15%', resizeMode: 'contain',
                        height: '15%', top: '65%', left: '50%', opacity: this.state.showKulangTana,
                    }}>
                    <Image source={KulangTana} style={clothStyle.clothing}></Image>
                </View>
                <View style={{ position: 'absolute', width: '15%', resizeMode: 'contain',
                        height: '15%', top: '65%', left: '33%', opacity: this.state.showSlah,
                    }}>
                    <Image source={Slah} style={clothStyle.clothing}></Image>
                </View>

                <View style={{position: 'absolute', top: screenHeight * 0.17,
                    left: screenWidth * 0.27, width: screenWidth * 0.05, 
                    height: screenHeight * 0.08,}}>
                    <Image source={SwatSalah} style={{width: '100%', height: '100%', 
                        resizeMode: 'stretch'}}></Image>
                </View>

                <View style={{position: 'absolute', top: screenHeight * 0.38,
                    left: screenWidth * 0.27, width: screenWidth * 0.05, 
                    height: screenHeight * 0.08,}}>
                    <Image source={Ulel} style={{width: '100%', height: '100%', 
                        resizeMode: 'stretch'}}></Image>
                </View>

                <View style={[styles.dot,{top: screenHeight * 0.12,
                    left: screenWidth * 0.49}]}></View>
                
                <View style={[styles.dot,{top: screenHeight * 0.2,
                    left: screenWidth * 0.49}]}></View>
                
                <View style={[styles.dot,{top: screenHeight * 0.28,
                    left: screenWidth * 0.49}]}></View>

                <View style={[styles.dot,{top: screenHeight * 0.45,
                    left: screenWidth * 0.49}]}></View>
                
                
                <View style={styles.homeContainer}>
                    <TouchableOpacity onPress={this.gotoMainMenu}>
                        <Image source={Home_icon} style={styles.home}></Image>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

const clothStyle = {
    clothing: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    }
}


export default withNavigation(DadSeMarket);