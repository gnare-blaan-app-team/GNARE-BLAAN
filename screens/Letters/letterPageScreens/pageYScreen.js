import React, { Component } from 'react';
import { View, Image, ImageBackground, BackHandler, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';
import Sound from 'react-native-sound';
import { globalStyleSheet } from '../../globalStyleSheet/globalStyleSheet';
import LetterBackground from '../lettersImage/LetterY.png';
import SentenceIcon from '../../images/Letters_Info_Icon.png';
import SpeakerIcon from '../../images/Speaker_icon.png';
import PencilIcon from '../../images/Pencil_icon.png';
import NextIcon from '../../images/Next_Icon.png';
import GoBackIcon from '../../images/Back_icon.png';
import HomeIcon from '../../images/Home_icon.png';
import PrevIcon from '../../images/Prev_Icon.png';


class PageY extends Component {
    static navigationOptions = {
        header: null,
    }

    componentDidMount() {
        this.forceUpdate();
        this.letter_play_y = new Sound('letter_play_y.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
                return;
            }
            BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        });
        this.wordplay_y = new Sound('word_play_y.mp3', Sound.MAIN_BUNDLE, (error) => {
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
        this.letter_play_y.pause();
        this.wordplay_y.pause();
    }

    playAsound = () => {
        this.wordplay_y.stop(() => {
            this.mute.play();
        });
        if (this.letter_play_y.play()) {
            this.letter_play_y.stop(() => {
                this.letter_play_y.play()
            });
        }

    }

    playAsound_2 = () => {
        this.letter_play_y.stop(() => {
            this.mute.play();
        });
        if (this.wordplay_y.play()) {
            this.wordplay_y.stop(() => {
                this.wordplay_y.play()
            });
        }
    }

    gotoSentenceY = () => {
        this.props.navigation.navigate('sentenceY');
        this.letter_play_y.stop(() => {
            this.mute.play();
        });
        this.wordplay_y.stop(() => {
            this.mute.play();
        });
    }

    gotoMainMenu = () => {
        this.props.navigation.navigate('mainMenu');
        this.letter_play_y.pause();
        this.wordplay_y.pause();
    }

    gotoNextPage = () => {
        this.props.navigation.navigate('pageA');
        this.letter_play_y.pause();
        this.wordplay_y.pause();
    }

    goBack = () => {
        this.props.navigation.navigate('letters');
        this.letter_play_y.pause();
        this.wordplay_y.pause();
    }

    goPrev = () => {
        this.props.navigation.navigate('pageW');
        this.letter_play_y.pause();
        this.wordplay_y.pause();
    }
    
    gotoTracingY = () => {
        this.props.navigation.navigate('tracingY');
    }

    render() {
        return (
            <ImageBackground style={globalStyleSheet.image}
                source={LetterBackground}
            >
                <View style={globalStyleSheet.sentenceIconContainer}>
                    <TouchableOpacity onPress={this.gotoSentenceY}>
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
                    <TouchableOpacity onPress={this.gotoTracingY}>
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

export default withNavigation(PageY);