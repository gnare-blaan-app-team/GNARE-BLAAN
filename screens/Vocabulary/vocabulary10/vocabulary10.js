import React, { Component } from 'react';
import { View, Image, StyleSheet, ImageBackground, TouchableOpacity, BackHandler, Text, } from 'react-native';
import { withNavigation } from 'react-navigation';
import {globalStyleSheet} from '../../globalStyleSheet/globalStyleSheet';

import Vocab10BG from './vocabulary10Images/kastifunBG.png';
import KaibeAsset from './vocabulary10Images/kaibeAsset.png';
import LoloAsset from './vocabulary10Images/loloAsset.png';
import LolaAsset from './vocabulary10Images/lolaAsset.png';
import kulintang_item from './vocabulary10Images/Item_kulintang.png';
import gong_item from './vocabulary10Images/Item_gong.png';
import hallowlogdrum_item from './vocabulary10Images/Item_hallowlogdrum.png';
import guitar_item from './vocabulary10Images/Item_guitar.png';
import guitarkawayan_item from './vocabulary10Images/Item_guitarkawayan.png';
import earings_item from './vocabulary10Images/Item_earings.png';

import Back_icon from '../../images/Back_icon.png';
import Home_icon from '../../images/Home_icon.png';


import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class Vocabulary10 extends Component {
    static navigationOptions = {
        header: null,
    }

    gotoMainMenu = () => {
        this.props.navigation.navigate('mainMenu');
    }

    handleBackPress = () => {
        this.number1.pause();
    }

    goBack = () => {
        this.props.navigation.goBack();
    }

    gotoKulintang = () => {
        this.props.navigation.navigate('kulintang');
    }

    gotoGong = () => {
        this.props.navigation.navigate('gong');
    }

    gotoLogdrum = () => {
        this.props.navigation.navigate('logdrum');
    }

    gotoGuitar = () => {
        this.props.navigation.navigate('guitar');
    }

    gotoBambooGuitar = () => {
        this.props.navigation.navigate('bambooGuitar');
    }

    gotoEarrings = () => {
        this.props.navigation.navigate('earrings');
    }

    gotoSaul = () => {
        this.props.navigation.navigate('saul');
    }

    gotoPants = () => {
        this.props.navigation.navigate('pants');
    }

    gotoBlouse = () => {
        this.props.navigation.navigate('blouse');
    }


    render() {

        return (
            <ImageBackground style={globalStyleSheet.image}
                source={Vocab10BG}
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
                            style={globalStyleSheet .home}
                        ></Image>
                    </TouchableOpacity>
                </View>




                <View style={styles.loloBorder}>
                        <Image
                            source={LoloAsset}
                            style={styles.loloImage}
                        ></Image>
                </View>

                <View style={styles.lolaBorder}>
                        <Image
                            source={LolaAsset}
                            style={styles.lolaImage}
                        ></Image>
                </View>

                <View style={styles.kaibeBorder}>
                        <Image
                            source={KaibeAsset}
                            style={styles.kaibeImage}
                        ></Image>
                </View>



                <View style={styles.kulintangBorder}>
                    <TouchableOpacity onPress={this.gotoKulintang}>
                        <Image
                            source={kulintang_item}
                            style={styles.kulintangImage}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.gongBorder}>
                    <TouchableOpacity onPress={this.gotoGong}>
                        <Image
                            source={gong_item}
                            style={styles.gongImage}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.hallowlogdrumBorder}>
                    <TouchableOpacity onPress={this.gotoLogdrum}>
                        <Image
                            source={hallowlogdrum_item}
                            style={styles.hallowlogdrumImage}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.guitarBorder}>
                    <TouchableOpacity onPress={this.gotoGuitar}>
                        <Image
                            source={guitar_item}
                            style={styles.guitarImage}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.guitarkawayanBorder}>
                    <TouchableOpacity onPress={this.gotoBambooGuitar}>
                        <Image
                            source={guitarkawayan_item}
                            style={styles.guitarkawayanImage}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.earingsBorder}>
                    <TouchableOpacity onPress={this.gotoEarrings}>
                        <Image
                            source={earings_item}
                            style={styles.earingsImage}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={{position: "absolute", height: hp('22%'), width: wp('10.5%'), left: '35.5%', top: '33.5%', borderWidth: 0.5, borderColor: 'red'}}>
                    <TouchableOpacity  onPress={this.gotoSaul}>
                       <Text style={{width:"100%", height:"100%"}}></Text>
                    </TouchableOpacity>
                </View>

                <View style={{position: "absolute", height: hp('18%'), width: wp('8%'), left: '37.5%', top: '53.5%', borderWidth: 0.5, borderColor: 'red'}}>
                    <TouchableOpacity  onPress={this.gotoPants}>
                       <Text style={{width:"100%", height:"100%"}}></Text>
                    </TouchableOpacity>
                </View>

                <View style={{position: "absolute", height: hp('15%'), width: wp('7%'), left: '46.5%', top: '45.5%', borderWidth: 0.5, borderColor: 'pink'}}>
                    <TouchableOpacity  onPress={this.gotoBlouse}>
                       <Text style={{width:"100%", height:"100%"}}></Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({

    lolaBorder: {
      position: 'absolute',
      left: '52%',
      top: '25%',
    },
      lolaImage: {
        height: hp('66%'),
        width: wp('12%'),
        resizeMode: 'contain',
      },

    loloBorder: {
      position: 'absolute',
      left: '35%',
      top: '23%',
      width: '11%',
      resizeMode: 'cover',
    },
      loloImage: {
        height: hp('68%'),
        width: wp('14%'),
        resizeMode: 'contain',
      },

    kaibeBorder: {
      position: 'absolute',
      top: '35%',
    },
      kaibeImage: {
        height: hp('54%'),
        width: wp('11%'),
        resizeMode: 'contain',
      },

    kulintangBorder: {
      position: 'absolute',
      left: '15%',
      top: '70%',
      borderWidth: 0.5,
      height: '11%',
      width: '22%',
      resizeMode: 'cover',
    },
      kulintangImage: {
        top: '-34%',
        left: '-20%',
        height: hp('40%'),
        width: wp('30%'),
        resizeMode: 'contain',
      },

    gongBorder: {
      position: 'absolute',
      left: '15%',
      top: '32%',
      borderWidth: 0.5,
      height: '38%',
      width: '18%',
      resizeMode: 'cover',
    },
      gongImage: {
        top: '-7.5%',
        left: '-35%',
        height: hp('50%'),
        width: wp('30%'),
        resizeMode: 'contain',
      },

    hallowlogdrumBorder: {
      position: 'absolute',
      left: '73%',
      top: '55%',
      borderWidth: 0.5,
      height: '13%',
      width: '9%',
      resizeMode: 'cover',
    },
      hallowlogdrumImage: {
        top: '-27%',
        left: '-35%',
        height: hp('30%'),
        width: wp('15%'),
        resizeMode: 'contain',
      },

    guitarBorder: {
      position: 'absolute',
      left: '64%',
      top: '70%',
      borderWidth: 0.5,
      resizeMode: 'cover',
      transform: [{ rotate: '30deg' }],
      width: '23%',
      height: '6%',
    },
      guitarImage: {
        left: '-15%',
        top: '-40%',
        height: hp('45%'),
        width: wp('32.5%'),
        resizeMode: 'contain',
        transform: [{ rotate: '-27deg' }],
      },

    guitarkawayanBorder: {
      position: 'absolute',
      left: '66%',
      top: '81%',
      resizeMode: 'cover',
      width: '13%',
      height: '6%',
    },
      guitarkawayanImage: {
        top: '-41%',
        left: '-40%',
        height: hp('30%'),
        width: wp('22.5%'),
        resizeMode: 'contain',
        transform: [{ rotate: '40deg' }],
      },

    earingsBorder: {
      position: 'absolute',
      left: '63.5%',
      top: '73%',
      resizeMode: 'cover',
      width: '10%',
      height: '8%',
    },
      earingsImage: {
        top: '-34%',
        left: '-58%',
        height: hp('22%'),
        width: wp('22.5%'),
        resizeMode: 'contain',
        transform: [{ rotate: '70deg' }],
      },




});

export default withNavigation(Vocabulary10);
