import React, { Component } from 'react';
import { View, Image, StyleSheet, ImageBackground, TouchableOpacity, BackHandler } from 'react-native';
import { withNavigation } from 'react-navigation';
import {globalStyleSheet} from '../../globalStyleSheet/globalStyleSheet';

import Vocab1BG from './vocabulary1Images/vocab1.png';
import LolaAsset from './vocabulary1Images/lolaAsset.png';
import LoloAsset from './vocabulary1Images/loloAsset.png';
import TatayAsset from './vocabulary1Images/tatayAsset.png';
import NanayAsset from './vocabulary1Images/motherAsset.png';
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
        this.props.navigation.replace('vocabularyMenu');
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
                <View style={globalStyleSheet.vocabContainer}>
                    <TouchableOpacity onPress={this.gotoLola}>
                        <Image
                            source={LolaAsset}
                            style={styles.lolaStyle}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={globalStyleSheet.vocabContainer}>
                    <TouchableOpacity onPress={this.gotoLolo}>
                        <Image
                            source={LoloAsset}
                            style={styles.loloStyle}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={globalStyleSheet.vocabContainer}>
                    <TouchableOpacity onPress={this.gotoTatay}>
                        <Image
                            source={TatayAsset}
                            style={styles.tatayStyle}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={globalStyleSheet.vocabContainer}>
                    <TouchableOpacity onPress={this.gotoNanay}>
                        <Image
                            source={NanayAsset}
                            style={styles.nanayStyle}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={globalStyleSheet.vocabContainer}>
                    <TouchableOpacity onPress={this.gotoKaibe}>
                        <Image
                            source={KaibeAsset}
                            style={styles.kaibeStyle}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={globalStyleSheet.vocabContainer}>
                    <TouchableOpacity onPress={this.KaitoNanay}>
                        <Image
                            source={KaitoAsset}
                            style={styles.kaitoStyle}
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
        right: '80%',
        width: wp('50%'),
        height: hp('80%'), 
        resizeMode: 'contain', 
    },
    loloStyle: {
        position: 'absolute',
        right: '80%',
        width: wp('50%'),
        height: hp('80%'), 
        resizeMode: 'contain', 
    },
    tatayStyle: {
        position: 'absolute',
        width: wp('50%'),
        height: hp('80%'),
        resizeMode: 'contain', 
    },
    nanayStyle: {
        position: 'absolute',
        width: wp('50%'),
        height: hp('80%'),  
        resizeMode: 'contain',
    },
    kaibeStyle: {
        position: 'absolute',
        width: wp('50%'),
        height: hp('80%'),  
        resizeMode: 'contain',
    },
    kaitoStyle: {
        position: 'absolute',
        width: wp('50%'),
        height: hp('80%'),  
        resizeMode: 'contain',
    }
});

export default withNavigation(Vocabulary1);