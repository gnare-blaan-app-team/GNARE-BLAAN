import React, { Component } from 'react';
import { View, Image, StyleSheet, ImageBackground, TouchableOpacity, BackHandler } from 'react-native';
import { withNavigation } from 'react-navigation';
import {globalStyleSheet} from '../../globalStyleSheet/globalStyleSheet';

import Vocab8BG from './vocabulary8Images/Vocab8.png';

import Back_icon from '../../images/Back_icon.png';
import Home_icon from '../../images/Home_icon.png';


import Hapon from './vocabulary8Images/hapon.png';
import Umaga from './vocabulary8Images/umaga.png';
import Gabi from './vocabulary8Images/gabi.png';
import Cloud from './vocabulary8Images/Item_Clouds.png';
import Goodbye from './vocabulary8Images/Item_GoodBye.png';
import Moon from './vocabulary8Images/Item_Moon.png';
import Sun from './vocabulary8Images/Item_Sun.png';
import Star from './vocabulary8Images/Item_Stars.png';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class Vocabulary8 extends Component {
    static navigationOptions = {
        header: null,
    }


    handleBackPress = () => {
        this.number1.pause();
    }

    goBack = () => {
        this.props.navigation.navigate('vocabularyMenu');
    }

    gotoMainMenu = () => {
        this.props.navigation.navigate('mainMenu');
    }

    gotoHapon = () => {
        this.props.navigation.navigate('afternoon');
    }

    gotoUmaga = () => {
        this.props.navigation.navigate('morning');
    }

    gotoGabi = () => {
        this.props.navigation.navigate('evening');
    }

    gotoSun = () => {
        this.props.navigation.navigate('sun');
    }

    gotoCloud = () => {
        this.props.navigation.navigate('cloud');
    }

    gotoGoodbye = () => {
        this.props.navigation.navigate('goodbye');
    }

    gotoMoon = () => {
        this.props.navigation.navigate('moon');
    }

    gotoStar = () => {
        this.props.navigation.navigate('star');
    }


    render() {

        return (
            <ImageBackground style={globalStyleSheet.image}
                source={Vocab8BG}
            >
                <View style={globalStyleSheet.backContainer}>
                    <TouchableOpacity onPress={this.goBack}>
                        <Image
                            source={Back_icon}
                            style={globalStyleSheet.back}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={globalStyleSheet.homeContainer}>
                    <TouchableOpacity onPress={this.gotoMainMenu}>
                        <Image
                            source={Home_icon}
                            style={globalStyleSheet.home}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.haponStyle}>
                    <TouchableOpacity onPress={this.gotoHapon}>
                        <Image
                            source={Hapon}
                            style={styles.Image}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.gabiStyle}>
                    <TouchableOpacity onPress={this.gotoGabi}>
                        <Image
                            source={Gabi}
                            style={styles.Image}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.umagaStyle}>
                    <TouchableOpacity onPress={this.gotoUmaga}>
                        <Image
                            source={Umaga}
                            style={styles.Image}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.sunStyle}>
                    <TouchableOpacity onPress={this.gotoSun}>
                        <Image
                            source={Sun}
                            style={styles.Image}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.goodbyeStyle}>
                    <TouchableOpacity onPress={this.gotoGoodbye}>
                        <Image
                            source={Goodbye}
                            style={styles.Image}
                        ></Image>
                    </TouchableOpacity>
                </View>


                <View style={styles.starStyle}>
                    <TouchableOpacity onPress={this.gotoStar}>
                        <Image
                            source={Star}
                            style={styles.Image}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.moonStyle}>
                    <TouchableOpacity onPress={this.gotoMoon}>
                        <Image
                            source={Moon}
                            style={styles.Image}
                        ></Image>
                    </TouchableOpacity>
                </View>


                <View style={styles.cloudStyle}>
                    <TouchableOpacity onPress={this.gotoCloud}>
                        <Image
                            source={Cloud}
                            style={styles.Image}
                        ></Image>
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({

    Image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },

    haponStyle: {
        position: 'absolute',
        top: hp('20.7%'),
        left: wp('6.5%'),
        height: hp('48%'),
        width: wp('30%'),
    },

    umagaStyle: {
        position: 'absolute',
        top: hp('20.7%'),
        left: wp('23%'),
        height: hp('27.8%'),
        width: wp('50%'),

    },

    gabiStyle: {
        position: 'absolute',
        top: hp('20.7%'),
        right: wp('8.5%'),
        height: hp('43.5%'),
        width: wp('29%'),
    },

    sunStyle: {
        position: 'absolute',
        top: hp('22%'),
        left: wp('45%'),
        height: hp('10%'),
        width: wp('7%')
    },

    cloudStyle: {
        position: 'absolute',
        top: hp('30%'),
        left: wp('34%'),
        height: hp('13%'),
        width: wp('33%')
    },

    goodbyeStyle: {
        position: 'absolute',
        top: hp('55%'),
        left: wp('45%'),
        height: hp('40%'),
        width: wp('25%'),

    },

    moonStyle: {
        position: 'absolute',
        top: hp('25%'),
        right: wp('14%'),
        height: hp('10%'),
        width: wp('6%')
    },

    starStyle: {
        position: 'absolute',
        top: hp('30%'),
        right: wp('15%'),
        height: hp('10%'),
        width: wp('30%')
    }

});

export default withNavigation(Vocabulary8);
