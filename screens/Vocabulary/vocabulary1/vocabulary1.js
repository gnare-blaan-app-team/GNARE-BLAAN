import React, { Component } from 'react';
import { View, Image, StyleSheet, ImageBackground, TouchableOpacity, BackHandler, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import {globalStyleSheet} from '../../globalStyleSheet/globalStyleSheet';

import Vocab1BG from './vocabulary1Images/FamilyMemBG.png';
import LolaAsset from './vocabulary1Images/lolaAsset.png';
import LoloAsset from './vocabulary1Images/loloAsset.png';
import TatayAsset from './vocabulary1Images/tatayAsset.png';
import NanayAsset from './vocabulary1Images/nanayAsset.png';
import KaibeAsset from './vocabulary1Images/kaibeAsset.png';
import KaitoAsset from './vocabulary1Images/kaitoAsset.png';
import Back_icon from '../../images/Back_icon.png';
import Home_icon from '../../images/Home_icon.png';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class Vocabulary1 extends Component {
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
    gotoLola = () => {
        this.props.navigation.navigate('lola');
    }
    gotoLolo = () => {
        this.props.navigation.navigate('lolo');
    }
    gotoTatay = () => {
        this.props.navigation.navigate('tatay');
    }
    gotoNanay = () => {
        this.props.navigation.navigate('nanay');
    }
    gotoKaibe = () => {
        this.props.navigation.navigate('kaibe');
    }
    gotoKaito = () => {
        this.props.navigation.navigate('kaito');
    }

    render() {

        return (
            <ImageBackground style={globalStyleSheet.image}
                source={Vocab1BG}
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



                  <View style={styles.tatayBorder}>
                      <TouchableOpacity onPress={this.gotoTatay}>
                          <Image
                              source={TatayAsset}
                              style={styles.tatayImage}
                          ></Image>
                      </TouchableOpacity>
                  </View>

                  <View style={styles.nanayBorder}>
                      <TouchableOpacity onPress={this.gotoNanay}>
                          <Image
                              source={NanayAsset}
                              style={styles.nanayImage}
                          ></Image>
                      </TouchableOpacity>
                  </View>

                    <View style={styles.loloBorder}>
                        <TouchableOpacity onPress={this.gotoLolo}>
                            <Image
                                source={LoloAsset}
                                style={styles.loloImage}
                            ></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.lolaBorder}>
                        <TouchableOpacity onPress={this.gotoLola}>
                            <Image
                                source={LolaAsset}
                                style={styles.lolaImage}
                            ></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.kaitoBorder}>
                        <TouchableOpacity onPress={this.gotoKaito}>
                            <Image
                                source={KaitoAsset}
                                style={styles.kaitoImage}
                            ></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.kaibeBorder}>
                        <TouchableOpacity onPress={this.gotoKaibe}>
                            <Image
                                source={KaibeAsset}
                                style={styles.kaibeImage}
                            ></Image>
                        </TouchableOpacity>
                    </View>




            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({


    // familyAssets: {
    //   margin: 5,
    //   marginBottom: 0,
    // },

    lolaBorder: {
      position: 'absolute',
      left: '25%',
      top: '25%',
    },
      lolaImage: {
        height: hp('66%'),
        width: wp('12%'),
        resizeMode: 'contain',
      },

    loloBorder: {
      position: 'absolute',
      left: '32%',
      top: '23%',
      width: '11%',
      resizeMode: 'cover',
    },
      loloImage: {
        height: hp('68%'),
        width: wp('14%'),
        resizeMode: 'contain',
      },

    tatayBorder: {
      position: 'absolute',
      left: '37%',
      top: '22%',
      width: '18%',
      resizeMode: 'cover',
    },
      tatayImage: {
        height: hp('70%'),
        width: wp('40%'),
        resizeMode: 'contain',
      },

    nanayBorder: {
      position: 'absolute',
      left: '50%',
      top: '26%',
    },
      nanayImage: {
        height: hp('66%'),
        width: wp('12%'),
        resizeMode: 'contain',
      },

    kaibeBorder: {
      position: 'absolute',
      left: '58%',
      top: '37%',
    },
      kaibeImage: {
        height: hp('54%'),
        width: wp('11%'),
        resizeMode: 'contain',
      },

    kaitoBorder: {
      position: 'absolute',
      left: '65%',
      top: '37%',
    },
      kaitoImage: {
        height: hp('54%'),
        width: wp('11%'),
        resizeMode: 'contain',
      },





    // loloImage: {
    //   top: 10,
    //   left: 50,
    // },
});

export default withNavigation(Vocabulary1);
