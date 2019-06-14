import React, { Component } from 'react';
import { View, Image, StyleSheet, ImageBackground, TouchableOpacity, BackHandler } from 'react-native';
import { withNavigation } from 'react-navigation';
import Sound from 'react-native-sound';
import {globalStyleSheet} from '../../globalStyleSheet/globalStyleSheet';

import BungangaBG from './vocabulary2Images/bunganga.png';
import Speaker_icon from '../../images/Speaker_icon.png';
import Back_icon from '../../images/Back_icon.png';
import Home_icon from '../../images/Home_icon.png';

class Bunganga extends Component {
    static navigationOptions = {
        header: null,
    }

    componentDidMount() {
        this.forceUpdate();
        this.vocab2_bunganga = new Sound('vocab2_bunganga.mp3', Sound.MAIN_BUNDLE, (error) => {
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
        this.vocab2_bunganga.pause();
    }

    playBungangasound = () => {
        this.vocab2_bunganga.play();
    }

    goBack = () => {
        this.vocab2_bunganga.pause();
        this.props.navigation.navigate('vocabulary2', {
            show: 'show',
        });
    }

    gotoMainMenu = () => {
        this.vocab2_bunganga.pause();
        this.props.navigation.navigate('mainMenu');
    }

    render() {
        return (
            <ImageBackground style={globalStyleSheet.image}
                source={BungangaBG}
            >
                <View style={globalStyleSheet.A_Speaker_Container_2}>
                    <TouchableOpacity onPress={this.playBungangasound}>
                        <Image
                            source={Speaker_icon}
                            style={globalStyleSheet.A_Speaker_2}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={globalStyleSheet.VocabBackContainer}>
                    <TouchableOpacity onPress={this.goBack}>
                        <Image
                            source={Back_icon}
                            style={globalStyleSheet.VocabBack}
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

export default withNavigation(Bunganga);