import React, { Component } from 'react';
import { View, Image, StyleSheet, ImageBackground, TouchableOpacity, BackHandler, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import {globalStyleSheet} from '../../globalStyleSheet/globalStyleSheet';

import Vocab10BG from './vocabulary10Images/kastifunBG.png';
import KaibeAsset from './vocabulary10Images/kaibeAsset.png';
import LoloAsset from './vocabulary10Images/loloAsset.png';
import LolaAsset from './vocabulary10Images/lolaAsset.png';

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


            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({

    //
    // mortarBorder: {
    //   position: 'absolute',
    //   left: '12%',
    //   top: '55%',
    // },
    //   mortarImage: {
    //     height: hp('18%'),
    //     width: wp('13%'),
    //     resizeMode: 'contain',
    //   },

    lolaBorder: {
      position: 'absolute',
      left: '53%',
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


});

export default withNavigation(Vocabulary10);
