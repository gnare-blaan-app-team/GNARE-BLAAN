import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity , ImageBackground } from 'react-native';
import { withNavigation } from 'react-navigation';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import {globalStyleSheet} from '../../globalStyleSheet/globalStyleSheet';
import DadseBG from '../gameImages/DadSeBG.png';
import GnareIcon from '../gameImages/GnareMain.png';
import Bang1Icon from '../gameImages/bang1_icon.png';
import Bang2Icon from '../gameImages/bang2_icon.png';
import Bang3Icon from '../gameImages/bang3_icon.png';
import KastifunIcon from '../gameImages/kastifun_icon.png';


class DadSe extends Component {
    static navigationOptions = {
        header: null,
    }
        
    gotoDadSeTanbu1 = () => {
        this.props.navigation.navigate('dadseTanbu1')
    }
    gotoDadSeTanbu2 = () => {
        this.props.navigation.navigate('dadseTanbu2')
    }
    gotoDadSeTanbu3 = () => {
        this.props.navigation.navigate('dadseTanbu3')
    }
    gotoKastifun = () => {
        this.props.navigation.navigate('kastifunScreen')
    }

    render() {
        return (
            <ImageBackground
                source={DadseBG}
                style={globalStyleSheet.image}
            >
                <View style={styles.gnareIconStyle}>
                    <Image source={GnareIcon} style={styles.image}></Image>
                </View>
                <View style={{
                    position: 'absolute',
                    top: hp('8%'),
                    left: wp('63%'),
                    height: hp('16%'),
                    width: wp('28%'),
                }}>
                    <TouchableOpacity onPress={this.gotoDadSeTanbu1}>
                        <Image source={Bang1Icon} style={styles.image}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top: hp('26%'),
                    left: wp('63%'),
                    height: hp('16%'),
                    width: wp('28%'),
                }}>
                    <TouchableOpacity onPress={this.gotoDadSeTanbu2}>
                        <Image source={Bang2Icon} style={styles.image}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top: hp('45%'),
                    left: wp('63%'),
                    height: hp('16%'),
                    width: wp('28%'),
                }}>
                    <TouchableOpacity onPress={this.gotoDadSeTanbu3}>
                        <Image source={Bang3Icon} style={styles.image}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top: hp('63%'),
                    left: wp('63%'),
                    height: hp('16%'),
                    width: wp('28%'),
                }}>
                    <TouchableOpacity onPress={this.gotoKastifun}>
                        <Image source={KastifunIcon} style={styles.image}></Image>
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
    },  
})


export default withNavigation(DadSe);