import React, { Component } from 'react';
import { View, Image, ImageBackground, BackHandler, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import Sound from 'react-native-sound';
import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet';

class PageU extends Component {
    static navigationOptions = {
        header: null,
    }

    componentDidMount() {
        this.forceUpdate();
        this.letter_play_u = new Sound('letter_play_u.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
                return;
            }
            BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        });
        this.wordplay_u = new Sound('word_play_u.mp3', Sound.MAIN_BUNDLE, (error) => {
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
        this.letter_play_u.pause();
        this.wordplay_u.pause();
    }

    playAsound = () => {
        this.wordplay_u.stop(() => {
            this.mute.play();
        });
        if (this.letter_play_u.play()) {
            this.letter_play_u.stop(() => {
                this.letter_play_u.play()
            });
        }

    }

    playAsound_2 = () => {
        this.letter_play_u.stop(() => {
            this.mute.play();
        });
        if (this.wordplay_u.play()) {
            this.wordplay_u.stop(() => {
                this.wordplay_u.play()
            });
        }
    }

    gotoSentenceU = () => {
        this.props.navigation.navigate('sentenceU');
        this.letter_play_u.stop(() => {
            this.mute.play();
        });
        this.wordplay_u.stop(() => {
            this.mute.play();
        });
    }

    gotoMainMenu = () => {
        this.props.navigation.navigate('mainMenu');
        this.letter_play_u.pause();
        this.wordplay_u.pause();
    }

    gotoNextPage = () => {
        this.props.navigation.navigate('pageW');
        this.letter_play_u.pause();
        this.wordplay_u.pause();
    }

    goBack = () => {
        this.props.navigation.navigate('letters');
        this.letter_play_u.pause();
        this.wordplay_u.pause();
    }

    goPrev = () => {
        this.props.navigation.navigate('pageT');
        this.letter_play_u.pause();
        this.wordplay_u.pause();
    }

     gotoTracingU = () => {
        this.props.navigation.navigate('tracingU');
    }

    render() {
        return (
            <ImageBackground style={styles.image}
                source={require('../lettersImage/LetterU.png')}
            >
                <View style={styles.sentenceIconContainer}>
                    <TouchableOpacity onPress={this.gotoSentenceU}>
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
                    <TouchableOpacity onPress={this.gotoTracingU}>
                        <Image
                            source={require('../../images/Pencil_icon.png')}
                            style={styles.pencil}
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
                <View style={styles.prevContainer}>
                    <TouchableOpacity onPress={this.goPrev}>
                        <Image
                            source={require('../../images/Prev_Icon.png')}
                            style={styles.prev}
                        ></Image>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

export default withNavigation(PageU);