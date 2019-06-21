import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity , ImageBackground } from 'react-native';
import { withNavigation } from 'react-navigation';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import {globalStyleSheet} from '../../../globalStyleSheet/globalStyleSheet';
import GameBG from '../../gameImages/GameBG.png';
import Home_icon from '../../../images/Home_icon.png';
import GnareIcon from '../../gameImages/GnareMain.png';
import Gufadyan from '../../gameImages/gufadyan.png';
import Bang1Board from '../../gameImages/bang1DadSeBG.png';
import Lwe from '../../gameImages/lwe.png';
import Lime from '../../gameImages/lime.png';
import Fat from '../../gameImages/fat.png';
import Walu from '../../gameImages/walu.png';

class DSBang1Question5 extends Component {
    static navigationOptions = {
        header: null,
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
                <View style={globalStyleSheet.bang1Board}>
                    <Image source={Bang1Board} style={styles.image}></Image>
                </View>
                <View style={globalStyleSheet.ds_bang1_choice1Style}>
                    <Image source={Lwe} style={styles.image}></Image>
                </View>
                <View style={globalStyleSheet.ds_bang1_choice2Style}>
                    <Image source={Lime} style={styles.image}></Image>
                </View>
                <View style={globalStyleSheet.ds_bang1_choice3Style}>
                    <Image source={Fat} style={styles.image}></Image>
                </View>
                <View style={globalStyleSheet.ds_bang1_choice4Style}>
                    <Image source={Walu} style={styles.image}></Image>
                </View>
                <View style={globalStyleSheet.gufadyan}>
                    <Image source={Gufadyan} style={styles.image}></Image>
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
})


export default withNavigation(DSBang1Question5);