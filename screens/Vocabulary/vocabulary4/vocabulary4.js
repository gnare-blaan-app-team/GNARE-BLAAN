import React, { Component } from 'react';
import { View, Image, StyleSheet, ImageBackground, TouchableOpacity,  } from 'react-native';
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
import BG from '../../images/BG.jpg';
import Bamboo from './vocabulary4Images/bamboo.png';
import Bolo from './vocabulary4Images/bolo.png';
import Carabao from './vocabulary4Images/carabao.png';
import Chicken from './vocabulary4Images/chicken.png';
import Corn from './vocabulary4Images/corn.png';
import Cow from './vocabulary4Images/cow.png';
import Farmland from './vocabulary4Images/farmland.png';
import Goat from './vocabulary4Images/goat.png';
import Pig from './vocabulary4Images/pig.png';
import Plow from './vocabulary4Images/plow.png';
import Rice from './vocabulary4Images/rice.png';
import Potato from './vocabulary4Images/sweetpotato.png';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class Vocabulary4 extends Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this.state = {
            BackgroundImage: Vocab4BG,
            clearBackground: 'gotoVocab4Menu',
            farmlandTop:'36%',
            carabaoTop:'42%',
            riceTop:'64.4%',
            bambooTop:'56%',
            boloTop:'53%',
            cowTop:'53%',
            pigTop:'67%',
            goatTop:'60%',
            cornTop:'55%',
            chickenTop:'59%',
            plowTop:'63%',
            potatoTop:'75%',
        }
    }

    goBack = () => {
        const clear = this.state.clearBackground;
        if (clear == 'gotoVocab4Menu') {
            this.props.navigation.navigate('vocabularyMenu')
        }
        if (clear == 'clear') {
            this.setState({
                BackgroundImage: Vocab4BG,
                clearBackground: 'gotoVocab4Menu',
                farmlandTop: '36%',
                carabaoTop: '42%',
                riceTop: '64.4%',
                bambooTop: '56%',
                boloTop: '53%',
                cowTop: '53%',
                pigTop: '67%',
                goatTop: '60%',
                cornTop: '55%',
                chickenTop: '59%',
                plowTop: '63%',
                potatoTop: '75%',
            })
        }
    }
    gotoMainMenu = () => {
        this.props.navigation.navigate('mainMenu');
    }
    gotoBamboo = () => {
        this.setState({
            BackgroundImage: Bamboo,
            clearBackground: 'gotoVocab1Menu',
            farmlandTop: '1000%',
            carabaoTop: '1000%',
            riceTop: '1000%',
            bambooTop: '1000%',
            boloTop: '1000%',
            cowTop: '1000%',
            pigTop: '1000%',
            goatTop: '1000%',
            cornTop: '1000%',
            chickenTop: '1000%',
            plowTop: '1000%',
            potatoTop: '1000%',
            clearBackground: 'clear',
        })
    }
    gotoBolo = () => {
        this.setState({
            BackgroundImage: Bolo,
            clearBackground: 'gotoVocab1Menu',
            farmlandTop: '1000%',
            carabaoTop: '1000%',
            riceTop: '1000%',
            bambooTop: '1000%',
            boloTop: '1000%',
            cowTop: '1000%',
            pigTop: '1000%',
            goatTop: '1000%',
            cornTop: '1000%',
            chickenTop: '1000%',
            plowTop: '1000%',
            potatoTop: '1000%',
            clearBackground: 'clear',
        })
    }
    gotoCarabao = () => {
        this.setState({
            BackgroundImage: Carabao,
            clearBackground: 'gotoVocab1Menu',
            farmlandTop: '1000%',
            carabaoTop: '1000%',
            riceTop: '1000%',
            bambooTop: '1000%',
            boloTop: '1000%',
            cowTop: '1000%',
            pigTop: '1000%',
            goatTop: '1000%',
            cornTop: '1000%',
            chickenTop: '1000%',
            plowTop: '1000%',
            potatoTop: '1000%',
            clearBackground: 'clear',
        })
    }
    gotoChicken = () => {
        this.setState({
            BackgroundImage: Chicken,
            clearBackground: 'gotoVocab1Menu',
            farmlandTop: '1000%',
            carabaoTop: '1000%',
            riceTop: '1000%',
            bambooTop: '1000%',
            boloTop: '1000%',
            cowTop: '1000%',
            pigTop: '1000%',
            goatTop: '1000%',
            cornTop: '1000%',
            chickenTop: '1000%',
            plowTop: '1000%',
            potatoTop: '1000%',
            clearBackground: 'clear',
        })
    }
    gotoCorn = () => {
        this.setState({
            BackgroundImage: Corn,
            clearBackground: 'gotoVocab1Menu',
            farmlandTop: '1000%',
            carabaoTop: '1000%',
            riceTop: '1000%',
            bambooTop: '1000%',
            boloTop: '1000%',
            cowTop: '1000%',
            pigTop: '1000%',
            goatTop: '1000%',
            cornTop: '1000%',
            chickenTop: '1000%',
            plowTop: '1000%',
            potatoTop: '1000%',
            clearBackground: 'clear',
        })
    }
    gotoCow = () => {
        this.setState({
            BackgroundImage: Cow,
            clearBackground: 'gotoVocab1Menu',
            farmlandTop: '1000%',
            carabaoTop: '1000%',
            riceTop: '1000%',
            bambooTop: '1000%',
            boloTop: '1000%',
            cowTop: '1000%',
            pigTop: '1000%',
            goatTop: '1000%',
            cornTop: '1000%',
            chickenTop: '1000%',
            plowTop: '1000%',
            potatoTop: '1000%',
            clearBackground: 'clear',
        })
    }
    gotoFarmland = () => {
        this.setState({
            BackgroundImage: Farmland,
            clearBackground: 'gotoVocab1Menu',
            farmlandTop: '1000%',
            carabaoTop: '1000%',
            riceTop: '1000%',
            bambooTop: '1000%',
            boloTop: '1000%',
            cowTop: '1000%',
            pigTop: '1000%',
            goatTop: '1000%',
            cornTop: '1000%',
            chickenTop: '1000%',
            plowTop: '1000%',
            potatoTop: '1000%',
            clearBackground: 'clear',
        })
    }
    gotoGoat = () => {
        this.setState({
            BackgroundImage: Goat,
            clearBackground: 'gotoVocab1Menu',
            farmlandTop: '1000%',
            carabaoTop: '1000%',
            riceTop: '1000%',
            bambooTop: '1000%',
            boloTop: '1000%',
            cowTop: '1000%',
            pigTop: '1000%',
            goatTop: '1000%',
            cornTop: '1000%',
            chickenTop: '1000%',
            plowTop: '1000%',
            potatoTop: '1000%',
            clearBackground: 'clear',
        })
    }
    gotoPig = () => {
        this.setState({
            BackgroundImage: Pig,
            clearBackground: 'gotoVocab1Menu',
            farmlandTop: '1000%',
            carabaoTop: '1000%',
            riceTop: '1000%',
            bambooTop: '1000%',
            boloTop: '1000%',
            cowTop: '1000%',
            pigTop: '1000%',
            goatTop: '1000%',
            cornTop: '1000%',
            chickenTop: '1000%',
            plowTop: '1000%',
            potatoTop: '1000%',
            clearBackground: 'clear',
        })
    }
    gotoPlow = () => {
        this.setState({
            BackgroundImage: Plow,
            clearBackground: 'gotoVocab1Menu',
            farmlandTop: '1000%',
            carabaoTop: '1000%',
            riceTop: '1000%',
            bambooTop: '1000%',
            boloTop: '1000%',
            cowTop: '1000%',
            pigTop: '1000%',
            goatTop: '1000%',
            cornTop: '1000%',
            chickenTop: '1000%',
            plowTop: '1000%',
            potatoTop: '1000%',
            clearBackground: 'clear',
        })
    }
    gotoRice = () => {
        this.setState({
            BackgroundImage: Rice,
            clearBackground: 'gotoVocab1Menu',
            farmlandTop: '1000%',
            carabaoTop: '1000%',
            riceTop: '1000%',
            bambooTop: '1000%',
            boloTop: '1000%',
            cowTop: '1000%',
            pigTop: '1000%',
            goatTop: '1000%',
            cornTop: '1000%',
            chickenTop: '1000%',
            plowTop: '1000%',
            potatoTop: '1000%',
            clearBackground: 'clear',
        })
    }
    gotoSweetPotato = () => {
        this.setState({
            BackgroundImage: Potato,
            clearBackground: 'gotoVocab1Menu',
            farmlandTop: '1000%',
            carabaoTop: '1000%',
            riceTop: '1000%',
            bambooTop: '1000%',
            boloTop: '1000%',
            cowTop: '1000%',
            pigTop: '1000%',
            goatTop: '1000%',
            cornTop: '1000%',
            chickenTop: '1000%',
            plowTop: '1000%',
            potatoTop: '1000%',
            clearBackground: 'clear',
        })
    }

    render() {

        return (
            <ImageBackground style={{ flex: 1, width: '100%', height: '100%', resizeMode: 'stretch' }}
                source={Vocab4BG}
            >
                <View style={{ position: 'absolute', top: '0%', width: '100%', height: '100%' }}>
                    <Image source={BG} style={{ width: '100%', height: '100%', resizeMode: 'stretch' }}></Image>
                </View>
                <View style={{ position: 'absolute', width: '100%', height: '100%' }}>
                    <Image source={this.state.BackgroundImage} style={{ width: '100%', height: '100%', resizeMode: 'stretch' }}></Image>
                </View>
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
                <View style={{
                    position: 'absolute',
                    top:this.state.farmlandTop,
                    left: '45.5%',
                    justifyContent: 'center',
                }}>
                    <TouchableOpacity onPress={this.gotoFarmland}>
                        <Image
                            source={FarmlandAsset}
                            style={styles.farmlandImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top: this.state.carabaoTop,
                    left: '36%',
                    justifyContent: 'center',
                }}>
                    <TouchableOpacity onPress={this.gotoCarabao}>
                        <Image
                            source={CarabaoAsset}
                            style={styles.carabaoImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top:this.state.riceTop,
                    left: '11.3%',
                    justifyContent: 'center',
                }}>
                    <TouchableOpacity onPress={this.gotoRice}>
                        <Image
                            source={RiceAsset}
                            style={styles.riceImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top:this.state.bambooTop,
                    left: '58%',
                    justifyContent: 'center',
                }}>
                    <TouchableOpacity onPress={this.gotoBamboo}>
                        <Image
                            source={BambooAsset}
                            style={styles.bambooImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top:this.state.boloTop,
                    left: '10%',
                    justifyContent: 'center',
                }}>
                    <TouchableOpacity onPress={this.gotoBolo}>
                        <Image
                            source={BoloAsset}
                            style={styles.boloImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top: this.state.cowTop,
                    left: '42%',
                    justifyContent: 'center',
                }}>
                    <TouchableOpacity onPress={this.gotoCow}>
                        <Image
                            source={CowAsset}
                            style={styles.cowImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top: this.state.pigTop,
                    left: '43%',
                    justifyContent: 'center',
                }}>
                    <TouchableOpacity onPress={this.gotoPig}>
                        <Image
                            source={PigAsset}
                            style={styles.pigImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top:this.state.goatTop,
                    left: '37%',
                    justifyContent: 'center',
                }}>
                    <TouchableOpacity onPress={this.gotoGoat}>
                        <Image
                            source={GoatAsset}
                            style={styles.goatImage}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={{
                    position: 'absolute',
                    top: this.state.cornTop,
                    left: '20%',
                    justifyContent: 'center',
                }}>
                    <TouchableOpacity onPress={this.gotoCorn}>
                        <Image
                            source={CornAsset}
                            style={styles.cornImage}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={{
                    position: 'absolute',
                    top:this.state.chickenTop,
                    left: '30%',
                    justifyContent: 'center',
                    height: 60,
                    width: 90,
                }}>
                    <TouchableOpacity onPress={this.gotoChicken}>
                        <Image
                            source={ChickenAsset}
                            style={styles.chickenImage}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={{
                    position: 'absolute',
                    top: this.state.plowTop,
                    left: '66%',
                    justifyContent: 'center',
                    width: '22%',
                    height: '28%',
                }}>
                    <TouchableOpacity onPress={this.gotoPlow}>
                        <Image
                            source={PlowAsset}
                            style={styles.plowImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top: this.state.potatoTop,
                    left: '58%',
                    justifyContent: 'center',
                }}>
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
        left: '30%',
        justifyContent: 'center',
        height: 60,
        width: 90,

    },
    chickenImage: {
        width: wp('7%'),
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
        top: '36%',
        left: '45.5%',
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
        top: '64.4%',
        left: '11.3%',
        justifyContent: 'center',
    },
    riceImage: {
        width: wp('29.4%'),
        height: hp('27.5%'),
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
