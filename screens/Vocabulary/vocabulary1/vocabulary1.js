import React, { Component } from 'react';
import { View, Image, StyleSheet, ImageBackground, TouchableOpacity, BackHandler, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import {globalStyleSheet} from '../../globalStyleSheet/globalStyleSheet';

import Vocab1BG from './vocabulary1Images/vocab1.png';
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



                  <View style={styles.tatayImage}>
                      <TouchableOpacity onPress={this.gotoTatay}>
                          <Image
                              source={TatayAsset}
                          ></Image>
                      </TouchableOpacity>
                  </View>

                  <View style={styles.nanayImage}>
                      <TouchableOpacity onPress={this.gotoNanay}>
                          <Image
                              source={NanayAsset}
                          ></Image>
                      </TouchableOpacity>
                  </View>

                    <View style={styles.loloImage}>
                        <TouchableOpacity onPress={this.gotoLolo}>
                            <Image
                                source={LoloAsset}
                            ></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.lolaImage}>
                        <TouchableOpacity onPress={this.gotoLola}>
                            <Image
                                source={LolaAsset}
                            ></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.kaitoImage}>
                        <TouchableOpacity onPress={this.gotoKaito}>
                            <Image
                                source={KaitoAsset}
                            ></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.kaibeImage}>
                        <TouchableOpacity onPress={this.gotoKaibe}>
                            <Image
                                source={KaibeAsset}
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

    lolaImage: {
      position: 'absolute',
      left: '20%',
    },

    loloImage: {
      position: 'absolute',
      left: '27%',
      top: '18%',
      width: '11%',
      resizeMode: 'cover',
    },

    tatayImage: {
      position: 'absolute',
      left: '32%',
      top: '17%',
      width: '18%',
      resizeMode: 'cover',
    },

    nanayImage: {
      position: 'absolute',
      left: '45%',
      top: '21%',
    },

    kaibeImage: {
      position: 'absolute',
      left: '53%',
      top: '32%',
    },

    kaitoImage: {
      position: 'absolute',
      left: '60%',
      top: '32%',
    },





    // loloImage: {
    //   top: 10,
    //   left: 50,
    // },
});

export default withNavigation(Vocabulary1);
