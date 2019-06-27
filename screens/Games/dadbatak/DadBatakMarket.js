import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity , ImageBackground } from 'react-native';
import { withNavigation } from 'react-navigation';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import {globalStyleSheet} from '../../globalStyleSheet/globalStyleSheet';
import GameBG from '../gameImages/GameBG.png';
import Home_icon from '../../images/Home_icon.png';
import GnareIcon from '../gameImages/GnareMain.png';
import KwartoBG from '../gameImages/KwartoBG.png';
import DB_Kaito from '../gameImages/Market/DB_kaito.png';
import DB_IconUtub from '../gameImages/Market/DB_IconUtub.png';
import DB_ItemUtub from '../gameImages/Market/DB_ItemUtub.png';
import DB_IconSalwal from '../gameImages/Market/DB_IconSalwal.png';
import DB_ItemSalwal from '../gameImages/Market/DB_ItemSalwal.png';
import DB_IconGaling from '../gameImages/Market/DB_IconGaling.png';
import DB_ItemGaling from '../gameImages/Market/DB_ItemGaling.png';
import DB_IconFalimak from '../gameImages/Market/DB_IconFalimak.png';
import DB_ItemFalimak from '../gameImages/Market/DB_ItemFalimak.png';
import DB_IconSaul from '../gameImages/Market/DB_IconSaul.png';
import DB_ItemSaul from '../gameImages/Market/DB_ItemSaul.png';
import DB_IconSlamFang from '../gameImages/Market/DB_IconSlamFang.png';
import DB_ItemSlamFang from '../gameImages/Market/DB_ItemSlamfang1.png';
import DB_IconBeen from '../gameImages/Market/DB_IconBeen.png';
import DB_ItemBeen from '../gameImages/Market/DB_ItemBeen.png';

import DSCoinbank from '../gameImages/Market/Coinbank.png';
import DSMayad from '../gameImages/Market/Mayad.png';
import DSFule from '../gameImages/Market/Fule.png';
import DSXButton from '../gameImages/Market/XButton.png';
import DSProgressBarEmpty from '../gameImages/Market/ProgressBarEmpty.png';

class DadBatakMarket extends Component {
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
                    <View style={styles.kaitoStyle}>
                        <Image source={DB_Kaito} style={styles.image}></Image>
                    </View>

                    {/* Utub */}
                    <View style={globalStyleSheet.item1Style}>
                            <Image source={DB_IconUtub} style={styles.imageStyle}></Image>
                        </View>
                        <View style={globalStyleSheet.item1Image}>
                            <TouchableOpacity>
                                <Image source={DB_ItemUtub} style={styles.imageStyle}></Image>
                            </TouchableOpacity>
                    </View>

                    {/* Salwal */}
                    <View style={globalStyleSheet.item2Style}>
                        <Image source={DB_IconSalwal} style={styles.imageStyle}></Image>
                    </View>
                    <View style={globalStyleSheet.item2Image}>
                        <TouchableOpacity>
                            <Image source={DB_ItemSalwal} style={styles.imageStyle}></Image>
                        </TouchableOpacity>
                    </View>

                    {/* Galing */}
                    <View style={globalStyleSheet.item3Style}>
                        <Image source={DB_IconGaling} style={styles.imageStyle}></Image>
                    </View>
                    <View style={globalStyleSheet.item3Image}>
                        <TouchableOpacity>
                            <Image source={DB_ItemGaling} style={styles.imageStyle}></Image>
                        </TouchableOpacity>
                    </View>

                    {/* Falimak */}
                    <View style={globalStyleSheet.item4Style}>
                        <Image source={DB_IconFalimak} style={styles.imageStyle}></Image>
                    </View>
                    <View style={globalStyleSheet.item4Image}>
                        <TouchableOpacity>
                            <Image source={DB_ItemFalimak} style={styles.imageStyle}></Image>
                        </TouchableOpacity>
                    </View>

                    {/* Saul */}
                    <View style={globalStyleSheet.item5Style}>
                        <Image source={DB_IconSaul} style={styles.imageStyle}></Image>
                    </View>
                    <View style={globalStyleSheet.item5Image}>
                        <TouchableOpacity>
                            <Image source={DB_ItemSaul} style={styles.imageStyle}></Image>
                        </TouchableOpacity>
                    </View>

                    {/* Slamfang */}
                    <View style={globalStyleSheet.item6Style}>
                        <Image source={DB_IconSlamFang} style={styles.imageStyle}></Image>
                    </View>
                    <View style={globalStyleSheet.item6Image}>
                        <TouchableOpacity>
                            <Image source={DB_ItemSlamFang} style={styles.imageStyle}></Image>
                        </TouchableOpacity>
                    </View>

                    {/* Been */}
                    <View style={globalStyleSheet.item7Style}>
                        <Image source={DB_IconBeen} style={styles.imageStyle}></Image>
                    </View>
                    <View style={globalStyleSheet.item7Image}>
                        <TouchableOpacity>
                            <Image source={DB_ItemBeen} style={styles.imageStyle}></Image>
                        </TouchableOpacity>
                    </View>

                    {/* Buttons below */}
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

                {/* Progress Bar */}
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
    kaitoStyle: {
        position: 'absolute',
        top: '14%',
        left: '40%',
        height: hp('63%'),
        width: wp('15%'), 
    },
    imageStyle: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    }
})


export default withNavigation(DadBatakMarket);