import React, { Component } from 'react';
import { View, Image, ImageBackground, BackHandler, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import Sound from 'react-native-sound';

import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet';

Sound.setCategory('Playback');

class PageA extends Component {
    static navigationOptions = {
        header: null,
    }

    componentDidMount() {
        this.forceUpdate();
        this.letter_play_a = new Sound('letter_play_a.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
                return;
            }
            BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        });
        this.wordplay_a = new Sound('word_play_a.mp3', Sound.MAIN_BUNDLE, (error) => {
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
        this.letter_play_a.pause();
        this.wordplay_a.pause();
    }

    playAsound = () => {
        this.wordplay_a.stop(() => {
            this.mute.play();
        });
        if (this.letter_play_a.play()){
            this.letter_play_a.stop(() => {
                this.letter_play_a.play()
            });
        }
    }

    playAsound_2 = () => {
        this.letter_play_a.stop(() => {
            this.mute.play();
        });
        if (this.wordplay_a.play()) {
            this.wordplay_a.stop(() => {
                this.wordplay_a.play()
            });
        }
    }

    gotoSentenceA = () => {
        this.props.navigation.navigate('sentenceA');
        this.letter_play_a.stop(() => {
            this.mute.play();
        });
        this.wordplay_a.stop(() => {
            this.mute.play();
        });
    }

    gotoTracingA = () => {
        this.props.navigation.navigate('tracingA');
    }
    
    

    gotoNextPage = () => {
        this.props.navigation.navigate('pageB');
        this.letter_play_a.pause();
        this.wordplay_a.pause();
    }

    goBack = () => {
        this.props.navigation.navigate('letters');
        this.letter_play_a.pause();
        this.wordplay_a.pause();
    }

    gotoMainMenu = () => {
        this.props.navigation.navigate('mainMenu');
        this.letter_play_a.pause();
        this.wordplay_a.pause();
    }

    

    render() {
        return (
            <ImageBackground style={styles.image}
                source={require('../lettersImage/LetterA.png')}
            >
                <View style={styles.sentenceIconContainer}>
                    <TouchableOpacity onPress={this.gotoSentenceA}>
                        <Image
                            source={require('../../images/Letters_Info_Icon.png')}
                            style={styles.sentenceIcon}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.A_Speaker_Container}>
                    <TouchableOpacity onPress={this.playAsound}>
                        <Image
                            source={require('../../images/Speaker_icon.png')}
                            style={styles.A_Speaker}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.A_Speaker_Container_2}>
                    <TouchableOpacity onPress={this.playAsound_2}>
                        <Image
                            source={require('../../images/Speaker_icon.png')}
                            style={styles.A_Speaker_2}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.pencilContainer}>
                    <TouchableOpacity onPress={this.gotoTracingA}>
                        <Image
                        source={require('../../images/Pencil_icon.png')}
                            style={styles.pencil}
                        ></Image>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.nextContainer}>
                    <TouchableOpacity onPress={this.gotoNextPage}>
                        <Image
                            source={require('../../images/Next_Icon.png')}
                            style={styles.next}
                        ></Image>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.backContainer}>
                    <TouchableOpacity onPress={this.goBack}>
                        <Image
                            source={require('../../images/Back_icon.png')}
                            style={styles.back}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.homeContainer}>
                    <TouchableOpacity onPress={this.gotoMainMenu}>
                        <Image
                            source={require('../../images/Home_icon.png')}
                            style={styles.home}
                        ></Image>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

export default withNavigation(PageA);