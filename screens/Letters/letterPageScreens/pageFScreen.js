import React, { Component } from 'react';
import { View, Image, ImageBackground, BackHandler, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import Sound from 'react-native-sound';
import {globalStyleSheet} from '../../globalStyleSheet/globalStyleSheet';

class PageF extends Component {
    static navigationOptions = {
        header: null,
    }

    componentDidMount() {
        this.forceUpdate();
        this.letter_play_f = new Sound('letter_play_f.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
                return;
            }
            BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        });
        this.wordplay_f = new Sound('word_play_f.mp3', Sound.MAIN_BUNDLE, (error) => {
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
        this.letter_play_f.pause();
        this.wordplay_f.pause();
    }

    playAsound = () => {
        this.wordplay_f.stop(() => {
            this.mute.play();
        });
        if (this.letter_play_f.play()) {
            this.letter_play_f.stop(() => {
                this.letter_play_f.play()
            });
        }

    }

    playAsound_2 = () => {
        this.letter_play_f.stop(() => {
            this.mute.play();
        });
        if (this.wordplay_f.play()) {
            this.wordplay_f.stop(() => {
                this.wordplay_f.play()
            });
        }
    }

    gotoSentenceF = () => {
        this.props.navigation.navigate('sentenceF');
        this.letter_play_f.stop(() => {
            this.mute.play();
        });
        this.wordplay_f.stop(() => {
            this.mute.play();
        });
    }

    gotoMainMenu = () => {
        this.props.navigation.navigate('mainMenu');
        this.letter_play_f.pause();
        this.wordplay_f.pause();
    }

    gotoNextPage = () => {
        this.props.navigation.navigate('pageG');
        this.letter_play_f.pause();
        this.wordplay_f.pause();
    }

    goBack = () => {
        this.props.navigation.navigate('letters');
        this.letter_play_f.pause();
        this.wordplay_f.pause();
    }

    goPrev = () => {
        this.props.navigation.navigate('pageE');
        this.letter_play_f.pause();
        this.wordplay_f.pause();
    }

    gotoTracingF = () => {
        this.props.navigation.navigate('tracingF');
    }

    render() {
        return (
            <ImageBackground style={globalStyleSheet.image}
                source={require('../lettersImage/LetterF.png')}
            >
                <View style={globalStyleSheet.sentenceIconContainer}>
                    <TouchableOpacity onPress={this.gotoSentenceF}>
                        <Image
                        source={require('../../images/Letters_Info_Icon.png')}
                        style={globalStyleSheet.sentenceIcon}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={globalStyleSheet.A_Speaker_Container}>
                    <TouchableOpacity onPress={this.playAsound}>
                        <Image
                            source={require('../../images/Speaker_icon.png')}
                            style={globalStyleSheet.A_Speaker}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={globalStyleSheet.A_Speaker_Container_2}>
                    <TouchableOpacity onPress={this.playAsound_2}>
                        <Image
                            source={require('../../images/Speaker_icon.png')}
                            style={globalStyleSheet.A_Speaker_2}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={globalStyleSheet.pencilContainer}>
                    <TouchableOpacity onPress={this.gotoTracingF}>
                        <Image
                            source={require('../../images/Pencil_icon.png')}
                            style={globalStyleSheet.pencil}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={globalStyleSheet.homeContainer}>
                    <TouchableOpacity onPress={this.gotoMainMenu}>
                        <Image
                            source={require('../../images/Home_icon.png')}
                            style={globalStyleSheet.home}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={globalStyleSheet.nextContainer}>
                    <TouchableOpacity onPress={this.gotoNextPage}>
                        <Image
                            source={require('../../images/Next_Icon.png')}
                            style={globalStyleSheet.next}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={globalStyleSheet.backContainer}>
                    <TouchableOpacity onPress={this.goBack}>
                        <Image
                            source={require('../../images/Back_icon.png')}
                            style={globalStyleSheet.back}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={globalStyleSheet.prevContainer}>
                    <TouchableOpacity onPress={this.goPrev}>
                        <Image
                            source={require('../../images/Prev_Icon.png')}
                            style={globalStyleSheet.prev}
                        ></Image>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

export default withNavigation(PageF);