import React, { Component } from 'react';
import { View, Image, ImageBackground, BackHandler, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import Sound from 'react-native-sound';
import {globalStyleSheet} from '../../globalStyleSheet/globalStyleSheet';

class PageN extends Component {
    static navigationOptions = {
        header: null,
    }

    componentDidMount() {
        this.forceUpdate();
        this.letter_play_n = new Sound('letter_play_n.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
                return;
            }
            BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        });
        this.wordplay_n = new Sound('word_play_n.mp3', Sound.MAIN_BUNDLE, (error) => {
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
        this.letter_play_n.pause();
        this.wordplay_n.pause();
    }

    playAsound = () => {
        this.wordplay_n.stop(() => {
            this.mute.play();
        });
        if (this.letter_play_n.play()) {
            this.letter_play_n.stop(() => {
                this.letter_play_n.play()
            });
        }

    }

    playAsound_2 = () => {
        this.letter_play_n.stop(() => {
            this.mute.play();
        });
        if (this.wordplay_n.play()) {
            this.wordplay_n.stop(() => {
                this.wordplay_n.play()
            });
        }
    }

    gotoSentenceN = () => {
        this.props.navigation.navigate('sentenceN');
        this.letter_play_n.stop(() => {
            this.mute.play();
        });
        this.wordplay_n.stop(() => {
            this.mute.play();
        });
    }

    gotoMainMenu = () => {
        this.props.navigation.navigate('mainMenu');
        this.letter_play_n.pause();
        this.wordplay_n.pause();
    }

    gotoNextPage = () => {
        this.props.navigation.navigate('pageO');
        this.letter_play_n.pause();
        this.wordplay_n.pause();
    }

    goBack = () => {
        this.props.navigation.navigate('letters');
        this.letter_play_n.pause();
        this.wordplay_n.pause();
    }

    goPrev = () => {
        this.props.navigation.navigate('pageM');
        this.letter_play_n.pause();
        this.wordplay_n.pause();
    }

    gotoTracingN = () => {
        this.props.navigation.navigate('tracingN');
    }

    render() {
        return (
            <ImageBackground style={globalStyleSheet.image}
                source={require('../lettersImage/LetterN.png')}
            >
                <View style={globalStyleSheet.sentenceIconContainer}>
                    <TouchableOpacity onPress={this.gotoSentenceN}>
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
                    <TouchableOpacity onPress={this.gotoTracingN}>
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

export default withNavigation(PageN);