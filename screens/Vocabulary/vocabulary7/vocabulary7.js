import React, { Component } from 'react';
import { View, Image, StyleSheet, ImageBackground, TouchableOpacity, BackHandler, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import {globalStyleSheet} from '../../globalStyleSheet/globalStyleSheet';

import Vocab7BG from './vocabulary7Images/kitchenBG.png';
import bayuhanAsset from './vocabulary7Images/item_bayuhan.png';
import bilaoAsset from './vocabulary7Images/item_bilao.png';
import cookingpotAsset from './vocabulary7Images/item_cookingPot.png';
import cupAsset from './vocabulary7Images/item_cup.png';
import firewoodAsset from './vocabulary7Images/item_firewood.png';
import kettleAsset from './vocabulary7Images/item_kettle.png';
import kutsilyoAsset from './vocabulary7Images/item_kutsilyo.png';
import plateAsset from './vocabulary7Images/item_plate.png';
import sandokAsset from './vocabulary7Images/item_sandok.png';
import spoonAsset from './vocabulary7Images/item_spoon.png';
import stoveAsset from './vocabulary7Images/item_stove.png';

import Back_icon from '../../images/Back_icon.png';
import Home_icon from '../../images/Home_icon.png';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class Vocabulary7 extends Component {
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
        this.props.navigation.navigate('vocabularyMenu');
    }

    gotoMortar = () => {
        this.props.navigation.navigate('mortar');
    }

    gotoTray = () => {
        this.props.navigation.navigate('tray');
    }

    gotoPot = () => {
        this.props.navigation.navigate('pot');
    }

    gotoCup = () => {
        this.props.navigation.navigate('cup');
    }

    gotoFirewood = () => {
          this.props.navigation.navigate('firewood');
    }

    gotoKettle = () => {
          this.props.navigation.navigate('kettle');
    }

    gotoKnife = () => {
          this.props.navigation.navigate('knife');
    }

    gotoPlate = () => {
          this.props.navigation.navigate('plate');
    }

    gotoSandok = () => {
          this.props.navigation.navigate('laddle');
    }

    gotoSpoon = () => {
          this.props.navigation.navigate('spoon');
    }

    gotoStove = () => {
          this.props.navigation.navigate('stove');
    }



    render() {

        return (
            <ImageBackground style={globalStyleSheet.image}
                source={Vocab7BG}
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



                <View style={styles.trayBorder}>
                    <TouchableOpacity onPress={this.gotoTray}>
                        <Image
                            source={bilaoAsset}
                            style={styles.trayImage}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.stoveBorder}>
                    <TouchableOpacity onPress={this.gotoStove}>
                        <Image
                            source={stoveAsset}
                            style={styles.stoveImage}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.potBorder}>
                    <TouchableOpacity onPress={this.gotoPot}>
                        <Image
                            source={cookingpotAsset}
                            style={styles.potImage}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.firewoodBorder}>
                    <TouchableOpacity onPress={this.gotoFirewood}>
                        <Image
                            source={firewoodAsset}
                            style={styles.firewoodImage}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.plateBorder}>
                    <TouchableOpacity onPress={this.gotoPlate}>
                        <Image
                            source={plateAsset}
                            style={styles.plateImage}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.cupBorder}>
                    <TouchableOpacity onPress={this.gotoCup}>
                        <Image
                            source={cupAsset}
                            style={styles.cupImage}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.kettleBorder}>
                    <TouchableOpacity onPress={this.gotoKettle}>
                        <Image
                            source={kettleAsset}
                            style={styles.kettleImage}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.knifeBorder}>
                    <TouchableOpacity onPress={this.gotoKnife}>
                        <Image
                            source={kutsilyoAsset}
                            style={styles.knifeImage}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.mortarBorder}>
                    <TouchableOpacity onPress={this.gotoMortar}>
                        <Image
                            source={bayuhanAsset}
                            style={styles.mortarImage}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.sandokBorder}>
                    <TouchableOpacity onPress={this.gotoSandok}>
                        <Image
                            source={sandokAsset}
                            style={styles.sandokImage}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.spoonBorder}>
                    <TouchableOpacity onPress={this.gotoSpoon}>
                        <Image
                            source={spoonAsset}
                            style={styles.spoonImage}
                        ></Image>
                    </TouchableOpacity>
                </View>




            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({


    mortarBorder: {
      position: 'absolute',
      left: '12%',
      top: '55%',
    },
      mortarImage: {
        height: hp('18%'),
        width: wp('13%'),
        resizeMode: 'contain',
      },


    trayBorder: {
      position: 'absolute',
      left: '16%',
      top: '21%',
    },
      trayImage: {
        height: hp('23%'),
        width: wp('13%'),
        resizeMode: 'contain',
      },


    potBorder: {
      position: 'absolute',
      left: '50%',
      top: '44%',
    },

      potImage: {
        height: hp('13%'),
        width: wp('10%'),
        resizeMode: 'contain',
      },

    cupBorder: {
      position: 'absolute',
      left: '65%',
      top: '38%',
    },

      cupImage: {
        height: hp('10%'),
        width: wp('6%'),
        resizeMode: 'contain',
      },

    firewoodBorder: {
      position: 'absolute',
      left: '28.4%',
      top: '59%',
    },
      firewoodImage: {
        height: hp('32%'),
        width: wp('34%'),
        resizeMode: 'contain',
      },

    kettleBorder: {
      position: 'absolute',
      left: '79%',
      top: '53%',
    },
        kettleImage: {
          height: hp('13%'),
          width: wp('9%'),
          resizeMode: 'contain',
        },

    knifeBorder: {
      position: 'absolute',
      left: '15%',
      top: '67%',
    },
      knifeImage: {
        height: hp('15%'),
        width: wp('20%'),
        resizeMode: 'contain',
      },

    plateBorder: {
      position: 'absolute',
      left: '73%',
      top: '43%',
    },
      plateImage: {
        height: hp('18%'),
        width: wp('13%'),
        resizeMode: 'contain',
      },

    sandokBorder: {
      position: 'absolute',
      left: '72%',
      top: '20%',
    },
      sandokImage: {
        height: hp('20%'),
        width: wp('8%'),
        resizeMode: 'contain',
      },

    spoonBorder: {
      position: 'absolute',
      left: '66%',
      top: '49%',
    },
      spoonImage: {
        height: hp('15%'),
        width: wp('7%'),
        resizeMode: 'contain',
      },

    stoveBorder: {
      position: 'absolute',
      left: '38%',
      top: '36%',
    },

      stoveImage: {
        height: hp('22%'),
        width: wp('17%'),
        resizeMode: 'contain',
      },

});

export default withNavigation(Vocabulary7);
