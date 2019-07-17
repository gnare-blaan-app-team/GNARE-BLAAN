import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity , ImageBackground } from 'react-native';
import { withNavigation } from 'react-navigation';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import {globalStyleSheet} from '../../globalStyleSheet/globalStyleSheet';
import GameBG from '../gameImages/GameBG.png';
import Home_icon from '../../images/Home_icon.png';
import Back_icon from '../../images/Back_icon.png';
import GnareIcon from '../gameImages/GnareMain.png';
import MoneyContainer from '../gameImages/moneyContainer.png';
import TlasIcon from '../gameImages/tlas_icon.png';
import Coinbank from '../gameImages/Coinbank.png';
import Coin from '../gameImages/coin.png';


class DadSeBank extends Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this.state = {
            money: 105,
        }
    }

    gotoMainMenu = () =>{
        this.props.navigation.navigate('mainMenu')
    }

    coinView = () => {
        const coin = [];
        for( let index=0 ; index < this.state.money; index++) {
            coin.push(
                <Image source={Coin} style={styles.coinImage}></Image>
            )
        }
        return coin;
    }



    render() {
        return (
            <ImageBackground
                source={GameBG}
                style={globalStyleSheet.image}
            >
                {/* <View style={globalStyleSheet.gnareIconStyle}>
                    <Image source={GnareIcon} style={styles.image}></Image>
                </View> */}
                <View style={globalStyleSheet.homeContainer}>
                    <TouchableOpacity onPress={this.gotoMainMenu}>
                        <Image source={Home_icon} style={globalStyleSheet.home}></Image>
                    </TouchableOpacity>
                </View>
                <View style={globalStyleSheet.backContainer}>
                    <TouchableOpacity>
                        <Image source={Back_icon} style={globalStyleSheet.back}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.moneyConStyle}>
                    <Image source={MoneyContainer} style={styles.image}></Image>
                </View>
                <View style={styles.moneyConStyle2}>
                    <Image source={MoneyContainer} style={styles.image}></Image>
                </View>
                <View style={styles.coinbankStyle}>
                        <Image source={Coinbank} style={styles.image}></Image>
                    </View>
                <View style={styles.tlasStyle}>
                    <TouchableOpacity>
                        <Image source={TlasIcon} style={styles.image}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top: '28.5%',
                    left: '10%',
                    width: '34%',
                    height: '42%',
                    flex:  1,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'flex-start',
                    borderWidth: 0.5 
                }}>
                        {this.coinView()}
                </View>
                <View style={{
                    position: 'absolute',
                    top: '28.5%',
                    left: '53.5%',
                    width: '34%',
                    height: '42%',
                    flex: 1,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'flex-start',
                    borderWidth: 0.5 
                }}>
                        {this.coinView()}
                </View>
            </ImageBackground>
        )
    }
}


const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    coinImage: {
        // width: wp('4%'),
        // height: hp('8%'),
        width: wp('3%'),
        height: undefined,
        aspectRatio: 1,
        resizeMode: 'cover'
    },
    moneyConStyle: {
        position: 'absolute',
        top: '25%',
        left: '6.5%',
        width: wp('45%'),
        height: hp('50%'),
    },
    moneyConStyle2: {
        position: 'absolute',
        top: '25%',
        left: '50%',
        width: wp('45%'),
        height: hp('50%'),
    },
    tlasStyle: {
        position: 'absolute',
        top: '82%',
        left: '20%',
        width: wp('15%'),
        height: hp('15%'),
    },
    coinbankStyle: {
        position: 'absolute',
        top: '56.5%',
        left: '22%',
        height: hp('14%'),
        width: wp('13%'),
    },
})


export default withNavigation(DadSeBank);