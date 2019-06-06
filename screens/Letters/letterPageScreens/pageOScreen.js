import React, { Component } from 'react';
import { View, Image, ImageBackground, BackHandler, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import Sound from 'react-native-sound';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {globalStyleSheet} from '../../globalStyleSheet/globalStyleSheet';
import Video from 'react-native-video';
import LetterBackground from '../lettersImage/LetterO.png';
import SentenceIcon from '../../images/Letters_Info_Icon.png';
import SpeakerIcon from '../../images/Speaker_icon.png';
import PencilIcon from '../../images/Pencil_icon.png';
import NextIcon from '../../images/Next_Icon.png';
import GoBackIcon from '../../images/Back_icon.png';
import HomeIcon from '../../images/Home_icon.png';
import PrevIcon from '../../images/Prev_Icon.png';
import ImageGlow from '../lettersGlow/glow-O.mp4';
import FrontImage from '../lettersImage/glow-O.png';

class PageO extends Component {
    static navigationOptions = {
        header: null,
    }

     constructor(props) {
        super(props);

        this.state = {
            repeat: false,
            rate: 1,
            volume: 1,
            muted: false,
            resizeMode: 'contain',
            duration: 0.0,
            progress: 0.0,
            currentTime: 0.0,
            paused: false,
            rateText: '1.0',
            pausedText: 'Play',
            hideControls: false,
            hideWidth: wp('21%'),
            hideHeight: hp('30%'),

        };
        this.video = null;
        this.onEnd = this._onEnd.bind(this);
    }

    componentDidMount() {
        this.forceUpdate();
        this.setState({ paused: false, toPlay: 'EN' })
        this.letter_play_o = new Sound('letter_play_o.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
                return;
            }
            BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        });
        this.wordplay_o = new Sound('word_play_o.mp3', Sound.MAIN_BUNDLE, (error) => {
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
        this.letter_play_o.pause();
        this.wordplay_o.pause();
        this.setState({ paused: true, toPlay: 'EN' })
    }

    playAsound = () => {
        this.wordplay_o.stop(() => {
            this.mute.play();
        });
        if (this.letter_play_o.play()) {
            this.letter_play_o.stop(() => {
                this.letter_play_o.play()
            });
        }

    }

    _onEnd() {
        let state = this.state;
        state.paused = true;
        this.setState(state);
        //setTimeout(() => this.video.seek(0.0));
    }

    playAsound_2 = () => {
        this.setState({ paused: false, toPlay: 'EN' })
        this.letter_play_o.stop(() => {
            this.mute.play();
        });
        if (this.wordplay_o.play()) {
            this.wordplay_o.stop(() => {
                this.wordplay_o.play()
            });
        }
        this.setState({ hideWidth: 0, hideHeight: 0 })
    }

    gotoSentenceO = () => {
        this.props.navigation.navigate('sentenceO');
        this.letter_play_o.stop(() => {
            this.mute.play();
        });
        this.wordplay_o.stop(() => {
            this.mute.play();
        });
    }

    gotoMainMenu = () => {
        this.props.navigation.navigate('mainMenu');
        this.letter_play_o.pause();
        this.wordplay_o.pause();
    }

    gotoNextPage = () => {
        this.props.navigation.push('pageS');
        this.letter_play_o.pause();
        this.wordplay_o.pause();
    }

    goBack = () => {
        this.props.navigation.navigate('letters');
        this.letter_play_o.pause();
        this.wordplay_o.pause();
    }

    goPrev = () => {
        this.props.navigation.push('pageN');
        this.letter_play_o.pause();
        this.wordplay_o.pause();
    }

    gotoTracingO = () => {
        this.props.navigation.navigate('tracingO');
    }

    render() {
        return (
            <ImageBackground style={globalStyleSheet.image}
                source={LetterBackground}
            >
                <View style={globalStyleSheet.sentenceIconContainer}>
                    <TouchableOpacity onPress={this.gotoSentenceO}>
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
                <View style={globalStyleSheet.VideoContainer}>
                    <Video ref={(ref) => { this.video = ref }}
                        source={ImageGlow}
                        onLoad={() => this.setState({ showThumbnail: false })}
                        repeat={this.state.repeat}
                        rate={this.state.rate}
                        volume={this.state.volume}
                        muted={this.state.muted}
                        resizeMode={this.state.resizeMode}
                        paused={this.state.paused}
                        onLoad={this.onLoad}
                        onProgress={this.onProgress}
                        onEnd={this.onEnd}
                        style={globalStyleSheet.Glow}
                    />
                    <Image source={FrontImage} style={{ width: this.state.hideWidth, height: this.state.hideHeight, position: 'absolute', left: '5.80%' }} />
                </View>
                <View style={globalStyleSheet.pencilContainer}>
                    <TouchableOpacity onPress={this.gotoTracingO}>
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

export default withNavigation(PageO);