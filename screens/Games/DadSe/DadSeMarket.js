import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity , ImageBackground } from 'react-native';
import { withNavigation } from 'react-navigation';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import {globalStyleSheet} from '../../globalStyleSheet/globalStyleSheet';
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
import DSCoinbank from '../gameImages/Market/Coinbank.png';
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


class DadSeMarket extends Component {
    static navigationOptions = {
        header: null,
    }

    gotoMainMenu = () =>{
        this.props.navigation.navigate('mainMenu')
    }

    gotoDadSe = () =>{
        this.props.navigation.navigate('dadse')
    }
    
    render() {
        return (
            <ImageBackground
                source={GameBG}
                style={globalStyleSheet.image}
            >
                <View style={globalStyleSheet.gnareIconStyle}>
                    <Image source={GnareIcon} style={styles.image}></Image>
                </View>

                <View style={globalStyleSheet.homeContainer}>
                    <TouchableOpacity onPress={this.gotoMainMenu}>
                        <Image source={Home_icon} style={globalStyleSheet.home}></Image>
                    </TouchableOpacity>
                </View>

                <View style={globalStyleSheet.kwartoStyle}>
                    <Image source={KwartoBG} style={styles.imageStyle}></Image>
                    <View style={styles.kaibeStyle}>
                        <Image source={DSKaibe} style={styles.image}></Image>
                    </View>

                    {/* Swat Salah */}
                    <View style={globalStyleSheet.item1Style}>
                        <Image source={DSSwatSalah} style={styles.imageStyle}></Image>
                    </View>
                    <View style={globalStyleSheet.item1Image}>
                        <TouchableOpacity>
                            <Image source={SwatSalah} style={styles.imageStyle}></Image>
                        </TouchableOpacity>
                    </View>

                    {/* Ulel */}
                    <View style={globalStyleSheet.item2Style}>
                        <Image source={DSUlel} style={styles.imageStyle}></Image>
                    </View>
                    <View style={globalStyleSheet.item2Image}>
                        <TouchableOpacity>
                            <Image source={Ulel} style={styles.imageStyle}></Image>
                        </TouchableOpacity>
                    </View>

                    {/* Lbung */}
                    <View style={globalStyleSheet.item3Style}>
                        <Image source={DSLbung} style={styles.imageStyle}></Image>
                    </View>
                    <View style={globalStyleSheet.item3Image}>
                        <TouchableOpacity>
                            <Image source={Lbung} style={styles.imageStyle}></Image>
                        </TouchableOpacity>
                    </View>

                    {/* Tlayong */}
                    <View style={globalStyleSheet.item4Style}>
                        <Image source={DSTlayong} style={styles.imageStyle}></Image>
                    </View>
                    <View style={globalStyleSheet.item4Image}>
                        <TouchableOpacity>
                            <Image source={Tlayong} style={styles.imageStyle}></Image>
                        </TouchableOpacity>
                    </View>

                    {/* Dafeng */}
                    <View style={globalStyleSheet.item5Style}>
                        <Image source={DSDafeng} style={styles.imageStyle}></Image>
                    </View>
                    <View style={globalStyleSheet.item5Image}>
                        <TouchableOpacity>
                            <Image source={Dafeng} style={styles.imageStyle}></Image>
                        </TouchableOpacity>
                    </View>

                    {/* KulangTana */}
                    <View style={globalStyleSheet.item6Style}>
                        <Image source={DSKulangTana} style={styles.imageStyle}></Image>
                    </View>
                    <View style={globalStyleSheet.item6Image}>
                        <TouchableOpacity>
                            <Image source={KulangTana} style={styles.imageStyle}></Image>
                        </TouchableOpacity>
                    </View>

                    {/* Slah */}
                    <View style={globalStyleSheet.item7Style}>
                        <Image source={DSSlah} style={styles.imageStyle}></Image>
                    </View>
                    <View style={globalStyleSheet.item7Image}>
                        <TouchableOpacity>
                            <Image source={Slah} style={styles.imageStyle}></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={globalStyleSheet.coinbankStyle}>
                        <Image source={DSCoinbank} style={styles.imageStyle}></Image>
                    </View>

                    <View style={globalStyleSheet.mayadStyle}>
                        <TouchableOpacity>
                            <Image source={DSMayad} style={styles.imageStyle}></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={globalStyleSheet.fuleStyle}>
                        <TouchableOpacity>
                            <Image source={DSFule} style={styles.imageStyle}></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={globalStyleSheet.xbuttonStyle}>
                        <TouchableOpacity onPress={this.gotoDadSe}>
                            <Image source={DSXButton} style={styles.imageStyle}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={globalStyleSheet.barEmptyStyle}>
                        <Image source={DSProgressBarEmpty} style={styles.imageStyle}></Image>
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
    },
    kaibeStyle: {
        position: 'absolute',
        top: '3%',
        left: '40%',
        height: hp('75%'),
        width: wp('18%'), 
    },
    imageStyle: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    }
})


export default withNavigation(DadSeMarket);