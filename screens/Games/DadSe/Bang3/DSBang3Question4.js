import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity , ImageBackground } from 'react-native';
import { withNavigation } from 'react-navigation';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import {globalStyleSheet} from '../../../globalStyleSheet/globalStyleSheet';
import GameBG from '../../gameImages/GameBG.png';
import Home_icon from '../../../images/Home_icon.png';
import GnareIcon from '../../gameImages/GnareMain.png';
import Gufadyan from '../../gameImages/gufadyan.png';
import Bang3BoardQ4 from '../../gameImages/DS_bang3Q4.png';
import DSB3Lwe from '../../gameImages/lwe.png';
import DSB3Fitu from '../../gameImages/fitu.png';
import DSB3Tlu from '../../gameImages/tlu.png';
import DSB3Fat from '../../gameImages/fat.png';

class DSBang3Question4 extends Component {
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
                    <Image source={Bang3BoardQ4} style={styles.image}></Image>
                </View>
                <View style={globalStyleSheet.ds_bang1_choice1Style}>
                    <Image source={DSB3Lwe} style={styles.image}></Image>
                </View>
                <View style={globalStyleSheet.ds_bang1_choice2Style}>
                    <Image source={DSB3Fitu} style={styles.image}></Image>
                </View>
                <View style={globalStyleSheet.ds_bang1_choice3Style}>
                    <Image source={DSB3Tlu} style={styles.image}></Image>
                </View>
                <View style={globalStyleSheet.ds_bang1_choice4Style}>
                    <Image source={DSB3Fat} style={styles.image}></Image>
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


export default withNavigation(DSBang3Question4);