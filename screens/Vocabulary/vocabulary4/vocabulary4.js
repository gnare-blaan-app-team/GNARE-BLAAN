import React, { Component } from 'react';
import { View, Image, StyleSheet, ImageBackground, TouchableOpacity, BackHandler } from 'react-native';
import { withNavigation } from 'react-navigation';
import {globalStyleSheet} from '../../globalStyleSheet/globalStyleSheet';

import Vocab4BG from './vocabulary4Images/vocab4.png';
import BambooAsset from './vocabulary4Images/bambooAsset.png';
import BoloAsset from './vocabulary4Images/boloAsset.png';
import CarabaoAsset from './vocabulary4Images/carabaoAsset.png';
import ChickenAsset from './vocabulary4Images/chickenAsset.png';
import CornAsset from './vocabulary4Images/cornAsset.png';
import CowAsset from './vocabulary4Images/cowAsset.png';
import FarmlandAsset from './vocabulary4Images/farmlandAsset.png';
import GoatAsset from './vocabulary4Images/goatAsset.png';
import PigAsset from './vocabulary4Images/pigAsset.png';
import PlowAsset from './vocabulary4Images/plowAsset.png';
import RiceAsset from './vocabulary4Images/riceAsset.png';
import SweetPotatoAsset from './vocabulary4Images/sweetpotatoAsset.png';
import Back_icon from '../../images/Back_icon.png';
import Home_icon from '../../images/Home_icon.png';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class Vocabulary4 extends Component {
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
    gotoBamboo = () => {
        this.props.navigation.navigate('bamboo');
    }
    gotoBolo = () => {
        this.props.navigation.navigate('bolo');
    }
    gotoCarabao = () => {
        this.props.navigation.navigate('carabao');
    }
    gotoChicken = () => {
        this.props.navigation.navigate('chicken');
    }
    gotoCorn = () => {
        this.props.navigation.navigate('corn');
    }
    gotoCow = () => {
        this.props.navigation.navigate('cow');
    }
    gotoFarmland = () => {
        this.props.navigation.navigate('farmland');
    }
    gotoGoat = () => {
        this.props.navigation.navigate('goat');
    }
    gotoPig = () => {
        this.props.navigation.navigate('pig');
    }
    gotoPlow = () => {
        this.props.navigation.navigate('plow');
    }
    gotoRice = () => {
        this.props.navigation.navigate('rice');
    }
    gotoSweetPotato = () => {
        this.props.navigation.navigate('sweetpotato');
    }

    render() {

        return (
            <ImageBackground style={globalStyleSheet.image}
                source={Vocab4BG}
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
                <View style={styles.farmlandStyle}>
                    <TouchableOpacity onPress={this.gotoFarmland}>
                        <Image
                            source={FarmlandAsset}
                            style={styles.farmlandImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.carabaoStyle}>
                    <TouchableOpacity onPress={this.gotoCarabao}>
                        <Image
                            source={CarabaoAsset}
                            style={styles.carabaoImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.riceStyle}>
                    <TouchableOpacity onPress={this.gotoRice}>
                        <Image
                            source={RiceAsset}
                            style={styles.riceImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.bambooStyle}>
                    <TouchableOpacity onPress={this.gotoBamboo}>
                        <Image
                            source={BambooAsset}
                            style={styles.bambooImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.boloStyle}>
                    <TouchableOpacity onPress={this.gotoBolo}>
                        <Image
                            source={BoloAsset}
                            style={styles.boloImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.cowStyle}>
                    <TouchableOpacity onPress={this.gotoCow}>
                        <Image
                            source={CowAsset}
                            style={styles.cowImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.pigStyle}>
                    <TouchableOpacity onPress={this.gotoPig}>
                        <Image
                            source={PigAsset}
                            style={styles.pigImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.goatStyle}>
                    <TouchableOpacity onPress={this.gotoGoat}>
                        <Image
                            source={GoatAsset}
                            style={styles.goatImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.chickenStyle}>
                    <TouchableOpacity onPress={this.gotoChicken}>
                        <Image
                            source={ChickenAsset}
                            style={styles.chickenImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.cornStyle}>
                    <TouchableOpacity onPress={this.gotoCorn}>
                        <Image
                            source={CornAsset}
                            style={styles.cornImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.plowStyle}>
                    <TouchableOpacity onPress={this.gotoPlow}>
                        <Image
                            source={PlowAsset}
                            style={styles.plowImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.sweetpotatoStyle}>
                    <TouchableOpacity onPress={this.gotoSweetPotato}>
                        <Image
                            source={SweetPotatoAsset}
                            style={styles.sweetpotatoImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    bambooStyle:{
        position: 'absolute',
        top: '56%',
        left: '58%',
        justifyContent: 'center',
    },
    bambooImage: {
        width: wp('19%'),
        height: hp('29%'),
        resizeMode: 'contain',
    },
    boloStyle:{
        position: 'absolute',
        top: '53%',
        left: '10%',
        justifyContent: 'center',
    },
    boloImage: {
        width: wp('16%'),
        height: hp('9%'),
        resizeMode: 'contain',
    },
    carabaoStyle:{
        position: 'absolute',
        top: '42%',
        left: '36%',
        justifyContent: 'center',
    },
    carabaoImage: {
        width: wp('19%'),
        height: hp('22%'),
        resizeMode: 'contain',
    },
    chickenStyle:{
        position: 'absolute',
        top: '59%',
        left: '23%',
        justifyContent: 'center',
        height: 60,
        width: 90,
    },
    chickenImage: {
        width: wp('23%'),
        height: hp('14%'),
        resizeMode: 'contain',
    },
    cornStyle:{
        position: 'absolute',
        top: '55%',
        left: '20%',
        justifyContent: 'center',
    },
    cornImage: {
        width: wp('12%'),
        height: hp('13%'),
        resizeMode: 'contain',
    },
    cowStyle:{
        position: 'absolute',
        top: '53%',
        left: '42%',
        justifyContent: 'center',
    },
    cowImage: {
        width: wp('20%'),
        height: hp('24%'),
        resizeMode: 'contain',
    },
    farmlandStyle:{
        position: 'absolute',
        top: '35%',
        left: '46.5%',
        justifyContent: 'center',
    },
    farmlandImage: {
        width: wp('41%'),
        height: hp('44%'),
        resizeMode: 'contain',
    },
    goatStyle:{
        position: 'absolute',
        top: '60%',
        left: '37%',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: 'red',
    },
    goatImage: {
        width: wp('10%'),
        height: hp('20%'),
        resizeMode: 'contain',
    },
    pigStyle:{
        position: 'absolute',
        top: '67%',
        left: '43%',
        justifyContent: 'center',
    },
    pigImage: {
        width: wp('17%'),
        height: hp('25%'),
        resizeMode: 'contain',
    },
    plowStyle:{
        position: 'absolute',
        top: '63%',
        left: '66%',
        justifyContent: 'center',
        width: '22%',
        height: '28%',
    },
    plowImage: {
        width: wp('25%'),
        height: hp('28%'),
        resizeMode: 'contain',
    },
    riceStyle:{
        position: 'absolute',
        top: '60%',
        left: '12.5%',
        justifyContent: 'center',
        height: '30%',
        borderWidth: 0.5,
        borderColor: 'red',
    },
    riceImage: {
        width: wp('31%'),
        height: hp('34%'),
        resizeMode: 'contain',
    },
    sweetpotatoStyle:{
        position: 'absolute',
        top: '75%',
        left: '58%',
        justifyContent: 'center',
    },
    sweetpotatoImage: {
        width: wp('15%'),
        height: hp('15%'),
        resizeMode: 'contain',
    },
});

export default withNavigation(Vocabulary4);
