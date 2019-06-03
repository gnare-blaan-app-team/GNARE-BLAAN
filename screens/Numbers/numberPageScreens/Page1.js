import React, { Component } from 'react';
import { View, Image, StyleSheet, ImageBackground, TouchableOpacity, BackHandler } from 'react-native';
import { withNavigation } from 'react-navigation';
import Sound from 'react-native-sound';
<<<<<<< HEAD
import {globalStyleSheet} from '../../globalStyleSheet//globalStyleSheet';
import SentenceIcon from '../../images/Letters_Info_Icon.png';
import SpeakerIcon from '../../images/Speaker_icon.png';
import PencilIcon from '../../images/Pencil_icon.png';
import NextIcon from '../../images/Next_Icon.png';
import GoBackIcon from '../../images/Back_icon.png';
import HomeIcon from '../../images/Home_icon.png';
=======
import {globalStyleSheet} from '../../globalStyleSheet/globalStyleSheet';

import number1 from '../numberBackground/number1.png';
import Speaker_icon from '../numbersImage/Speaker_icon.png';
import Letters_Info_Icon from '../numbersImage/Letters_Info_Icon.png';
import Back_icon from '../../images/Back_icon.png';
import Home_icon from '../../images/Home_icon.png';
>>>>>>> 534626a41582abe9c20d296c86230f312773db3a

class Page1 extends Component {
    static navigationOptions = {
        header: null,
    }

    componentDidMount() {
        this.forceUpdate();
        this.number1 = new Sound('number_1.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
                return;
            }
            BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        });
        this.mute = new Sound('mute.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
                return;
            }
            BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        });
    }


    handleBackPress = () => {
        this.number1.pause();
    }

    playAsound_2 = () => {
        this.number1.play();
    }

    gotoSentence1 = () => {
        this.props.navigation.navigate('sentence1');
    }

    goBack = () => {
        this.props.navigation.navigate('numbers');
    }

    gotoMainMenu = () => {
        this.props.navigation.navigate('mainMenu');
    }

    render() {
        return (
            <ImageBackground style={globalStyleSheet.image}
                source={number1}
            >
                <View style={globalStyleSheet.A_Speaker_Container_2}>
                    <TouchableOpacity onPress={this.playAsound_2}>
                        <Image
<<<<<<< HEAD
                            source={SpeakerIcon}
=======
                            source={Speaker_icon}
>>>>>>> 534626a41582abe9c20d296c86230f312773db3a
                            style={globalStyleSheet.A_Speaker_2}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={globalStyleSheet.sentenceIconContainer}>
                    <TouchableOpacity onPress={this.gotoSentence1}>
                        <Image
<<<<<<< HEAD
                            source={SentenceIcon}
=======
                            source={Letters_Info_Icon}
>>>>>>> 534626a41582abe9c20d296c86230f312773db3a
                            style={globalStyleSheet.sentenceIcon}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={globalStyleSheet.backContainer}>
                    <TouchableOpacity onPress={this.goBack}>
                        <Image
<<<<<<< HEAD
                            source={GoBackIcon}
=======
                            source={Back_icon}
>>>>>>> 534626a41582abe9c20d296c86230f312773db3a
                            style={globalStyleSheet.back}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={globalStyleSheet.homeContainer}>
                    <TouchableOpacity onPress={this.gotoMainMenu}>
                        <Image
<<<<<<< HEAD
                            source={HomeIcon}
=======
                            source={Home_icon}
>>>>>>> 534626a41582abe9c20d296c86230f312773db3a
                            style={globalStyleSheet.home}
                        ></Image>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

export default withNavigation(Page1);