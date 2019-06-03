import React, { Component } from 'react';
import { View, Image, ImageBackground, BackHandler, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import Sound from 'react-native-sound';
import {globalStyleSheet} from '../../globalStyleSheet/globalStyleSheet';
import LetterBackground from '../lettersImage/LetterI.png';
import SentenceIcon from '../../images/Letters_Info_Icon.png';
import SpeakerIcon from '../../images/Speaker_icon.png';
import PencilIcon from '../../images/Pencil_icon.png';
import NextIcon from '../../images/Next_Icon.png';
import GoBackIcon from '../../images/Back_icon.png';
import HomeIcon from '../../images/Home_icon.png';
import PrevIcon from '../../images/Prev_Icon.png';

class PageI extends Component {
    static navigationOptions = {
        header: null,
    }

    componentDidMount() {
        this.forceUpdate();
        this.letter_play_i= new Sound('letter_play_i.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
                return;
            }
            BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        });
        this.wordplay_i = new Sound('word_play_i.mp3', Sound.MAIN_BUNDLE, (error) => {
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
        this.letter_play_i.pause();
        this.wordplay_i.pause();
    }

    playAsound = () => {
        this.wordplay_i.stop(() => {
            this.mute.play();
        });
        if (this.letter_play_i.play()) {
            this.letter_play_i.stop(() => {
                this.letter_play_i.play()
            });
        }

    }

    playAsound_2 = () => {
        this.letter_play_i.stop(() => {
            this.mute.play();
        });
        if (this.wordplay_i.play()) {
            this.wordplay_i.stop(() => {
                this.wordplay_i.play()
            });
        }
    }

    gotoSentenceI = () => {
        this.props.navigation.navigate('sentenceI');
        this.letter_play_i.stop(() => {
            this.mute.play();
        });
        this.wordplay_i.stop(() => {
            this.mute.play();
        });
    }

    gotoMainMenu = () => {
        this.props.navigation.navigate('mainMenu');
        this.letter_play_i.pause();
        this.wordplay_i.pause();
    }

    gotoNextPage = () => {
        this.props.navigation.navigate('pageK');
        this.letter_play_i.pause();
        this.wordplay_i.pause();
    }

    goBack = () => {
        this.props.navigation.navigate('letters');
        this.letter_play_i.pause();
        this.wordplay_i.pause();
    }

    goPrev = () => {
        this.props.navigation.navigate('pageH');
        this.letter_play_i.pause();
        this.wordplay_i.pause();
    }

    gotoTracingI = () => {
        this.props.navigation.navigate('tracingI');
    }

    render() {
        return (
            <ImageBackground style={globalStyleSheet.image}
                source={LetterBackground}
            >
                <View style={globalStyleSheet.sentenceIconContainer}>
                    <TouchableOpacity onPress={this.gotoSentenceI}>
                        <Image
                            source={SentenceIcon}
                            style={globalStyleSheet.sentenceIcon}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={globalStyleSheet.A_Speaker_Container}>
                    <TouchableOpacity onPress={this.playAsound}>
                        <Image
                            source={SpeakerIcon}
                            style={globalStyleSheet.A_Speaker}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={globalStyleSheet.A_Speaker_Container_2}>
                    <TouchableOpacity onPress={this.playAsound_2}>
                        <Image
                            source={SpeakerIcon}
                            style={globalStyleSheet.A_Speaker_2}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={globalStyleSheet.pencilContainer}>
                    <TouchableOpacity onPress={this.gotoTracingI}>
                        <Image
                            source={PencilIcon}
                            style={globalStyleSheet.pencil}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={globalStyleSheet.homeContainer}>
                    <TouchableOpacity onPress={this.gotoMainMenu}>
                        <Image
                            source={HomeIcon}
                            style={globalStyleSheet.home}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={globalStyleSheet.nextContainer}>
                    <TouchableOpacity onPress={this.gotoNextPage}>
                        <Image
                            source={NextIcon}
                            style={globalStyleSheet.next}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={globalStyleSheet.backContainer}>
                    <TouchableOpacity onPress={this.goBack}>
                        <Image
                            source={GoBackIcon}
                            style={globalStyleSheet.back}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={globalStyleSheet.prevContainer}>
                    <TouchableOpacity onPress={this.goPrev}>
                        <Image
                            source={PrevIcon}
                            style={globalStyleSheet.prev}
                        ></Image>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

export default withNavigation(PageI);