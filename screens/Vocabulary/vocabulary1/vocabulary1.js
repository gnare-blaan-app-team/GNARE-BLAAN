import React, { Component } from 'react';
import { View, Image, StyleSheet, ImageBackground, TouchableOpacity, BackHandler } from 'react-native';
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
        this.props.navigation.navigate('numbers');
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
                
                <View style={styles.lolaStyle}>
                    <TouchableOpacity onPress={this.gotoLola}>
                        <Image
                            source={LolaAsset}
                            style={styles.lolaImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
                    
                
                <View style={styles.loloStyle}>
                    <TouchableOpacity onPress={this.gotoLolo}>
                        <Image
                            source={LoloAsset}
                            style={styles.loloImage}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.tatayStyle}>
                    <TouchableOpacity onPress={this.gotoTatay}>
                        <Image
                            source={TatayAsset}
                            style={styles.imageStyle}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.nanayStyle}>
                    <TouchableOpacity onPress={this.gotoNanay}>
                        <Image
                            source={NanayAsset}
                            style={styles.nanayImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.kaibeStyle}>
                    <TouchableOpacity onPress={this.gotoKaibe}>
                        <Image
                            source={KaibeAsset}
                            style={styles.kaibeImage}
                        ></Image>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.kaitoStyle}>
                    <TouchableOpacity onPress={this.gotoKaito}>
                        <Image
                            source={KaitoAsset}
                            style={styles.kaitoImage}
                        ></Image>
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    lolaStyle: {
        position: 'absolute',
        top: '20%',
        right: '50%',
        width: '50%',
        height: '80%', 
    },
    lolaImage: {
        width: '100%',
        height: '95%',
        resizeMode: 'contain'
    },

    imageStyle: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },


    loloStyle: {
        position: 'absolute',
        top: '18%',
        right: '40%',
        width: '50%',
        height: '80%', 
    },
    loloImage: {
        width: '100%',
        height: '97%',
        resizeMode: 'contain'
    },

    tatayStyle: {
        position: 'absolute',
        top: '15%',
        right: '20%',
        width: '50%',
        height: '80%', 
    },

    nanayStyle: {
        position: 'absolute',
        top: '20%',
        right: '20%',
        width: '50%',
        height: '80%',
    },
    nanayImage: {
        width: '100%',
        height: '95%',
        resizeMode: 'contain'
    },

    kaibeStyle: {
        position: 'absolute',
        top: '30%',
        right: '10%',
        width: '50%',
        height: '80%',
    },
    kaibeImage: {
        width: '100%',
        height: '90%',
        resizeMode: 'contain'
    },

    kaitoStyle: {
        position: 'absolute',
        top: '30%',
        right: '0%',
        width: '50%',
        height: '80%',
    },
    kaitoImage: {
        width: '100%',
        height: '90%',
        resizeMode: 'contain'
    },
});

export default withNavigation(Vocabulary1);