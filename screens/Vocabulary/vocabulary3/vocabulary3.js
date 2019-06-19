import React, { Component } from 'react';
import { View, Image, StyleSheet, ImageBackground, TouchableOpacity, BackHandler, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import {globalStyleSheet} from '../../globalStyleSheet/globalStyleSheet';
import BG from '../../images/BG.jpg';
import Vocab3BG from './vocabulary3Images/vocab3.png';
import BasketAsset from './vocabulary3Images/basketAsset.png';
import CrabAsset from './vocabulary3Images/crabAsset.png';
import EelAsset from './vocabulary3Images/eelAsset.png';
import FishAsset from './vocabulary3Images/fishAsset.png';
import FishnetAsset from './vocabulary3Images/fishnetAsset.png';
import SeaAsset from './vocabulary3Images/seaAsset.png';
import SeashoreAsset from './vocabulary3Images/seashoreAsset.png';
import ShrimpAsset from './vocabulary3Images/shrimpAsset.png';
import Back_icon from '../../images/Back_icon.png';
import Home_icon from '../../images/Home_icon.png';
import Basket from './vocabulary3Images/basket.png';
import Crab from './vocabulary3Images/crab.png';
import Eel from './vocabulary3Images/eel.png';
import Fish from './vocabulary3Images/fish.png';
import Fishnet from './vocabulary3Images/fishnet.png';
import Sea from './vocabulary3Images/sea.png';
import Seashore from './vocabulary3Images/seashore.png';
import Shrimp from './vocabulary3Images/shrimp.png';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class Vocabulary3 extends Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this.state = {
            BackgroundImage: Vocab3BG,
            clearBackground: 'gotoVocab3Menu',
            seaTop:'30%',
            seashoreTop:'25.5%',
            basketTop:'21%',
            ealTop:'60%',
            fishTop:'56%',
            seashoreTop2: '26%',
            seashoreTop3: '40%',
            fishnetTop:'27%',
            shrimpTop:'61%',
            crabTop:'27%'
        }
    }

    goBack = () => {
        const clear = this.state.clearBackground;
        if (clear == 'gotoVocab3Menu') {
            this.props.navigation.navigate('vocabularyMenu')
        }
        if (clear == 'clear') {
            this.setState({
                BackgroundImage: Vocab3BG,
                clearBackground: 'gotoVocab3Menu',
                seaTop: '30%',
                seashoreTop: '25.5%',
                basketTop: '21%',
                ealTop: '60%',
                fishTop: '56%',
                seashoreTop2: '26%',
                seashoreTop3: '40%',
                fishnetTop: '27%',
                shrimpTop: '61%',
                crabTop: '27%'
            })
        }
    }

    gotoSea = () => {
        this.setState({
            BackgroundImage: Sea,
            clearBackground: 'clear',
            seaTop: '1000%',
            seashoreTop: '1000%',
            basketTop: '1000%',
            ealTop: '1000%',
            fishTop: '1000%',
            seashoreTop2: '1000%',
            seashoreTop3: '1000%',
            fishnetTop: '1000%',
            shrimpTop: '1000%',
            crabTop: '1000%'
        })
    }
    gotoSeashore = () => {
        this.setState({
            BackgroundImage: Seashore,
            clearBackground: 'clear',
            seaTop: '1000%',
            seashoreTop: '1000%',
            basketTop: '1000%',
            ealTop: '1000%',
            fishTop: '1000%',
            seashoreTop2: '1000%',
            seashoreTop3: '1000%',
            fishnetTop: '1000%',
            shrimpTop: '1000%',
            crabTop: '1000%'
        })
    }
    gotoBasket = () => {
        this.setState({
            BackgroundImage: Basket,
            clearBackground: 'clear',
            seaTop: '1000%',
            seashoreTop: '1000%',
            basketTop: '1000%',
            ealTop: '1000%',
            fishTop: '1000%',
            seashoreTop2: '1000%',
            seashoreTop3: '1000%',
            fishnetTop: '1000%',
            shrimpTop: '1000%',
            crabTop: '1000%'
        })
    }
    gotoEel = () => {
        this.setState({
            BackgroundImage: Eel,
            clearBackground: 'clear',
            seaTop: '1000%',
            seashoreTop: '1000%',
            basketTop: '1000%',
            ealTop: '1000%',
            fishTop: '1000%',
            seashoreTop2: '1000%',
            seashoreTop3: '1000%',
            fishnetTop: '1000%',
            shrimpTop: '1000%',
            crabTop: '1000%'
        })
    }
    gotoFish = () => {
        this.setState({
            BackgroundImage: Fish,
            clearBackground: 'clear',
            seaTop: '1000%',
            seashoreTop: '1000%',
            basketTop: '1000%',
            ealTop: '1000%',
            fishTop: '1000%',
            seashoreTop2: '1000%',
            seashoreTop3: '1000%',
            fishnetTop: '1000%',
            shrimpTop: '1000%',
            crabTop: '1000%'
        })
    }
    gotoFishnet = () => {
        this.setState({
            BackgroundImage: Fishnet,
            clearBackground: 'clear',
            seaTop: '1000%',
            seashoreTop: '1000%',
            basketTop: '1000%',
            ealTop: '1000%',
            fishTop: '1000%',
            seashoreTop2: '1000%',
            seashoreTop3: '1000%',
            fishnetTop: '1000%',
            shrimpTop: '1000%',
            crabTop: '1000%'
        })
    }
    gotoShrimp = () => {
        this.setState({
            BackgroundImage: Shrimp,
            clearBackground: 'clear',
            seaTop: '1000%',
            seashoreTop: '1000%',
            basketTop: '1000%',
            ealTop: '1000%',
            fishTop: '1000%',
            seashoreTop2: '1000%',
            seashoreTop3: '1000%',
            fishnetTop: '1000%',
            shrimpTop: '1000%',
            crabTop: '1000%'
        })
    }
    gotoCrab = () => {
        this.setState({
            BackgroundImage: Crab,
            clearBackground: 'clear',
            seaTop: '1000%',
            seashoreTop: '1000%',
            basketTop: '1000%',
            ealTop: '1000%',
            fishTop: '1000%',
            seashoreTop2: '1000%',
            seashoreTop3: '1000%',
            fishnetTop: '1000%',
            shrimpTop: '1000%',
            crabTop: '1000%'
        })
    }

    


    render() {

        return (
            <ImageBackground style={{ flex: 1, width: '100%', height: '100%', resizeMode: 'stretch' }}
                source={Vocab3BG}
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
                    top: this.state.seaTop,
                    left: '11%',
                    justifyContent: 'center',
                }}>
                    <TouchableOpacity onPress={this.gotoSea}>
                        <Image
                            source={SeaAsset}
                            style={styles.seaImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top:this.state.seashoreTop,
                    left: '53%',
                    height: '15%',
                }}>
                    <TouchableOpacity onPress={this.gotoSeashore}>
                        <Image
                            source={SeashoreAsset}
                            style={styles.seashoreImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top:this.state.basketTop,
                    left: '73%',
                    justifyContent: 'center',
                    width: '14%',
                    height: '17%',
                }}>
                    <TouchableOpacity onPress={this.gotoBasket}>
                        <Image
                            source={BasketAsset}
                            style={styles.basketImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top:this.state.ealTop,
                    left: '45%',
                    justifyContent: 'center',
                    width: '17%',
                    height: '18%',
                }}>
                    <TouchableOpacity onPress={this.gotoEel}>
                        <Image
                            source={EelAsset}
                            style={styles.eelImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top:this.state.fishTop,
                    left: '15%',
                    justifyContent: 'center',
                    width: '26%',
                    height: '27%',
                }}>
                    <TouchableOpacity onPress={this.gotoFish}>
                        <Image
                            source={FishAsset}
                            style={styles.fishImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerStyle}>
                </View>

                <View style={{position: "absolute", height: hp('17%'), width: wp('30%'), left: '11.3%', top:this.state.seashoreTop2,}}>
                    <TouchableOpacity  onPress={this.gotoSeashore}>
                       <Text style={{width:"100%", height:"100%"}}></Text>
                    </TouchableOpacity>
                </View>

                <View style={{position: "absolute", height: hp('15%'), width: wp('10%'), left: '79%', top:this.state.seashoreTop3}}>
                    <TouchableOpacity  onPress={this.gotoSeashore}>
                       <Text style={{width:"100%", height:"100%"}}></Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    position: 'absolute',
                    top:this.state.fishnetTop,
                    left: '19%',
                    justifyContent: 'center',
                    width: '14%',
                    height: '12%',
                }}>
                    <TouchableOpacity onPress={this.gotoFishnet}>
                        <Image
                            source={FishnetAsset}
                            style={styles.fishnetImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top:this.state.shrimpTop,
                    left: '66%',
                    justifyContent: 'center',
                    width: '20%',
                    height: '20%',
                }}>
                    <TouchableOpacity onPress={this.gotoShrimp}>
                        <Image
                            source={ShrimpAsset}
                            style={styles.shrimpImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={{
                    position: 'absolute',
                    top:this.state.crabTop,
                    left: '62%',
                    justifyContent: 'center',
                    height: '12%',
                }}>
                    <TouchableOpacity onPress={this.gotoCrab}>
                        <Image
                            source={CrabAsset}
                            style={styles.crabImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    basketStyle:{
        position: 'absolute',
        top: '21%',
        left: '73%',
        justifyContent: 'center',
        width: '14%',
        height: '17%',
    },
    basketImage: {
        width: wp('15%'),
        height: hp('20%'),
        resizeMode: 'contain',
    },
    eelStyle:{
        position: 'absolute',
        top: '60%',
        left: '45%',
        justifyContent: 'center',
        width: '17%',
        height: '18%',
    },
    eelImage: {
        width: wp('18%'),
        height: hp('25%'),
        resizeMode: 'contain',
    },
    fishStyle:{
        position: 'absolute',
        top: '56%',
        left: '15%',
        justifyContent: 'center',
        width: '26%',
        height: '27%',
    },
    fishImage: {
        width: wp('30%'),
        height: hp('30%'),
        resizeMode: 'contain',
    },
    fishnetStyle:{
        position: 'absolute',
        top: '27%',
        left: '19%',
        justifyContent: 'center',
        width: '14%',
        height: '12%',
    },
    fishnetImage: {
        width: wp('15%'),
        height: hp('20%'),
        resizeMode: 'contain',
    },
    seaStyle:{
        position: 'absolute',
        top: '30%',
        left: '11%',
        justifyContent: 'center',
    },
    seaImage: {
        width: wp('80%'),
        height: hp('31%'),
        resizeMode: 'contain',
    },
    shrimpStyle:{
        position: 'absolute',
        top: '61%',
        left: '66%',
        justifyContent: 'center',
        width: '20%',
        height: '20%',
    },
    shrimpImage: {
        width: wp('20%'),
        height: hp('30%'),
        resizeMode: 'contain',
    },
    crabStyle:{
        position: 'absolute',
        top: '27%',
        left: '62%',
        justifyContent: 'center',
        height: '12%',
    },
    crabImage: {
        width: wp('8%'),
        height: hp('12%'),
        resizeMode: 'contain',
    },
    seashoreStyle:{
        position: 'absolute',
        top: '25.5%',
        left: '53%',
        height: '15%',
    },
    seashoreImage: {
        top: '-18%',
        width: wp('37%'),
        height: hp('37%'),
        resizeMode: 'contain',
    },
    containerStyle: {
        position: 'absolute',
        top: '29%',
        left: '13%',
        width: '13%',
        height: '14%',
        // borderWidth: 0.5,
        // borderColor: 'red',
    },
});

export default withNavigation(Vocabulary3);
