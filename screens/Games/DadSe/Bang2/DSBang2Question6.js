import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity , ImageBackground } from 'react-native';
import { withNavigation } from 'react-navigation';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import {globalStyleSheet} from '../../../globalStyleSheet/globalStyleSheet';
import GameBG from '../../gameImages/GameBG.png';
import Home_icon from '../../../images/Home_icon.png';
import GnareIcon from '../../gameImages/GnareMain.png';
import Gufadyan from '../../gameImages/gufadyan.png';
import Bang2BoardQ6 from '../../gameImages/DS_bang2Q6.png';
import DSB2Satu from '../../gameImages/DSB2_satu.png';
import DSB2Fat from '../../gameImages/DSB2_fat.png';
import DSB2Syem from '../../gameImages/DSB2_syem.png';
import DSB2Walu from '../../gameImages/DSB2_walu.png';
import Coinbank from '../../gameImages/Coinbank.png';

class DSBang2Question6 extends Component {
    static navigationOptions = {
        header: null,
    }

    gotoMainMenu = () => {
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
                <View style={globalStyleSheet.coinbankBang}>
                    <Image source={Coinbank} style={styles.image}></Image>
                </View>
                <View style={globalStyleSheet.homeContainer}>
                    <TouchableOpacity onPress={this.gotoMainMenu}>
                        <Image source={Home_icon} style={globalStyleSheet.home}></Image>
                    </TouchableOpacity>
                </View>
                <View style={globalStyleSheet.bang1Board}>
                    <Image source={Bang2BoardQ6} style={styles.image}></Image>
                </View>
                <View style={globalStyleSheet.ds_bang1_choice1Style}>
                    <TouchableOpacity>
                        <Image source={DSB2Satu} style={styles.image}></Image>
                    </TouchableOpacity>
                </View>
                <View style={globalStyleSheet.ds_bang1_choice2Style}>
                    <TouchableOpacity>
                        <Image source={DSB2Fat} style={styles.image}></Image>
                    </TouchableOpacity>
                </View>
                <View style={globalStyleSheet.ds_bang1_choice3Style}>
                    <TouchableOpacity>
                        <Image source={DSB2Syem} style={styles.image}></Image>
                    </TouchableOpacity>
                </View>
                <View style={globalStyleSheet.ds_bang1_choice4Style}>
                    <TouchableOpacity>
                        <Image source={DSB2Walu} style={styles.image}></Image>
                    </TouchableOpacity>
                </View>
                <View style={globalStyleSheet.gufadyan}>
                    <TouchableOpacity>
                        <Image source={Gufadyan} style={styles.image}></Image>
                    </TouchableOpacity>
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


export default withNavigation(DSBang2Question6);