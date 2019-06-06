import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ImageBackground, TouchableOpacity, BackHandler} from 'react-native';
import { withNavigation } from 'react-navigation';
import Sound from 'react-native-sound';

import {globalStyleSheet} from '../../globalStyleSheet/globalStyleSheet';
import SentenceBG500 from '../numbersImage/sentence500.png';
import Speaker_icon from '../numbersImage/Speaker_icon.png';
import Back_icon from '../../images/Back_icon.png';
import Home_icon from '../../images/Home_icon.png';

Sound.setCategory('Playback');

class Sentence500 extends Component {
    static navigationOptions = {
        header: null,
    }

    componentDidMount() {
        this.forceUpdate();
        this.letter_sentence_a = new Sound('sentence_letter_a.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
                return;
            }
            BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        });
    }

    playAsound_2 = () => {
        this.letter_sentence_a.play();
    }
    handleBackPress = () => {
        this.letter_sentence_a.pause();
    }
    goBack = () => {
        this.props.navigation.navigate('page500');
    }
    gotoMainMenu = () => {
        this.props.navigation.navigate('mainMenu');
    }



    render() {
        return (
            <ImageBackground style={globalStyleSheet.image}
            source={SentenceBG500}
            >
            <View style={globalStyleSheet.A_Speaker_Container_2}>
                <TouchableOpacity onPress={this.playAsound_2}>
                    <Image
                        source={Speaker_icon}
                        style={globalStyleSheet.A_Speaker_2}
                    ></Image>
                </TouchableOpacity>
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
        </ImageBackground>
        )
    }
}

export default withNavigation(Sentence500);