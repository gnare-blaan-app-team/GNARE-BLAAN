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



                <View style={styles.trayImage}>
                    <TouchableOpacity onPress={this.gotoTray}>
                        <Image
                            source={bilaoAsset}
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

                <View style={styles.knifeImage}>
                    <TouchableOpacity onPress={this.gotoKnife}>
                        <Image
                            source={kutsilyoAsset}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.mortarImage}>
                    <TouchableOpacity onPress={this.gotoMortar}>
                        <Image
                            source={bayuhanAsset}
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


    mortarImage: {
      position: 'absolute',
      left: '12%',
      top: '55%',
    },

    trayImage: {
      position: 'absolute',
      left: '14.6%',
      top: '21%',
    },

    potBorder: {
      position: 'absolute',
      left: '50%',
      top: '44%',
    },

      potImage: {
        height: 70,
        width: 95,
        resizeMode: 'contain',
      },

    cupBorder: {
      position: 'absolute',
      left: '63%',
      top: '38%',
    },

      cupImage: {
        height: 50,
        resizeMode: 'contain',
      },

    firewoodBorder: {
      position: 'absolute',
      left: '27%',
      top: '58.3%',
    },

      firewoodImage: {
        height: 180,
        resizeMode: 'contain',
      },

    kettleBorder: {
      position: 'absolute',
      left: '80.2%',
      top: '53%',
    },

        kettleImage: {
          height: 90,
          width: 90,
          resizeMode: 'contain',
        },

    knifeImage: {
      position: 'absolute',
      left: '15%',
      top: '67%',
    },

    plateBorder: {
      position: 'absolute',
      left: '73%',
      top: '45%',
    },

      plateImage: {
        height: 100,
        width: 120,
        resizeMode: 'contain',
      },

    sandokBorder: {
      position: 'absolute',
      left: '73%',
      top: '20%',
    },

      sandokImage: {
        height: 100,
        resizeMode: 'contain',
      },

    spoonBorder: {
      position: 'absolute',
      left: '66%',
      top: '49%',
    },

      spoonImage: {
        height: 80,
        width: 70,
        resizeMode: 'contain',
      },

    stoveBorder: {
      position: 'absolute',
      left: '38%',
      top: '38%',
    },

      stoveImage: {
        height: 110,
        width: 160,
        resizeMode: 'contain',
      },

});

export default withNavigation(Vocabulary7);
