import React, { Component } from 'react';
import { View, Image, StyleSheet, ImageBackground, TouchableOpacity, BackHandler } from 'react-native';
import { withNavigation } from 'react-navigation';
import Sound from 'react-native-sound';
import {globalStyleSheet} from '../../globalStyleSheet/globalStyleSheet';

import WallBG from './vocabulary6Images/wall.png';
import Speaker_icon from '../../images/Speaker_icon.png';
import Back_icon from '../../images/Back_icon.png';
import Home_icon from '../../images/Home_icon.png';

class Wall extends Component {
    static navigationOptions = {
        header: null,
    }

    componentDidMount() {
        this.forceUpdate();
        this.vocab6_wall = new Sound('vocab6_wall.mp3', Sound.MAIN_BUNDLE, (error) => {
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
        this.vocab6_wall.pause();
    }

    playWallsound = () => {
        this.vocab6_wall.play();
    }

    goBack = () => {
        this.vocab6_wall.pause();
        this.props.navigation.navigate('vocabularyMenu');
    }

    gotoMainMenu = () => {
        this.vocab6_wall.pause();
        this.props.navigation.navigate('mainMenu');
    }

    render() {
        return (
            <ImageBackground style={globalStyleSheet.image}
                source={WallBG}
            >
                <View style={globalStyleSheet.A_Speaker_Container_2}>
                    <TouchableOpacity onPress={this.playWallsound}>
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

export default withNavigation(Wall);