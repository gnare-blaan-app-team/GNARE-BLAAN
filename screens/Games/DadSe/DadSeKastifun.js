import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity , ImageBackground } from 'react-native';
import { withNavigation } from 'react-navigation';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import {globalStyleSheet} from '../../globalStyleSheet/globalStyleSheet';
import GameBG from '../gameImages/GameBG.png';
import KwartoBG from '../gameImages/KwartoBG.png';
import Home_icon from '../../images/Home_icon.png';
import GnareIcon from '../gameImages/GnareMain.png';
import Kaibe from '../gameImages/kaibe.png';

class DadSeKastifun extends Component {
    static navigationOptions = {
        header: null,
    }

    gotoMainMenu = () =>{
        this.props.navigation.navigate('mainMenu')
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
                    <Image source={KwartoBG} style={styles.image}></Image>
                </View>
                <View style={styles.kaibeStyle}>
                    <Image source={Kaibe} style={styles.image}></Image>
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
        top: '10%',
        left:'42%',
        height: hp('73%'),
        width: wp('20%'),
    },
})


export default withNavigation(DadSeKastifun);