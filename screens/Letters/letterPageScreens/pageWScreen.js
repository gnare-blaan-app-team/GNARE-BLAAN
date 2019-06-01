import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ImageBackground, TouchableHighlight,BackHandler, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import Sound from 'react-native-sound';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class PageW extends Component {
    static navigationOptions = {
        header: null,
    }

    componentDidMount() {
        this.forceUpdate();
        this.letter_play_w = new Sound('letter_play_w.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
                return;
            }
            BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        });
        this.wordplay_w = new Sound('word_play_w.mp3', Sound.MAIN_BUNDLE, (error) => {
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
        this.letter_play_w.pause();
        this.wordplay_w.pause();
    }

    playAsound = () => {
        this.wordplay_w.stop(() => {
            this.mute.play();
        });
        if (this.letter_play_w.play()) {
            this.letter_play_w.stop(() => {
                this.letter_play_w.play()
            });
        }

    }

    playAsound_2 = () => {
        this.letter_play_w.stop(() => {
            this.mute.play();
        });
        if (this.wordplay_w.play()) {
            this.wordplay_w.stop(() => {
                this.wordplay_w.play()
            });
        }
    }

    gotoSentenceW = () => {
        this.props.navigation.navigate('sentenceW');
        this.letter_play_w.stop(() => {
            this.mute.play();
        });
        this.wordplay_w.stop(() => {
            this.mute.play();
        });
    }

    gotoMainMenu = () => {
        this.props.navigation.navigate('mainMenu');
        this.letter_play_w.pause();
        this.wordplay_w.pause();
    }

    gotoNextPage = () => {
        this.props.navigation.navigate('pageY');
        this.letter_play_w.pause();
        this.wordplay_w.pause();
    }

    goBack = () => {
        this.props.navigation.navigate('letters');
        this.letter_play_w.pause();
        this.wordplay_w.pause();
    }

    goPrev = () => {
        this.props.navigation.navigate('pageU');
        this.letter_play_w.pause();
        this.wordplay_w.pause();
    }

    gotoTracingW = () => {
        this.props.navigation.navigate('tracingW');
    }

    render() {
        return (
            <ImageBackground style={styles.image}
                source={require('../lettersImage/LetterW.png')}
            >
                <View style={styles.sentenceIconContainer}>
                    <TouchableOpacity onPress={this.gotoSentenceW}>
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
                    <TouchableOpacity onPress={this.gotoTracingW}>
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
const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: wp('100%'),
        height: hp('100%'),
        position: 'absolute',
    },
    sentenceIconContainer: {
        position: 'absolute',
        left: '83%',
        top: '73%',
    },
    sentenceIcon: {
        width: wp('14%'),
        height: hp('28%')
    },
    A_Speaker_Container: {
        position: 'absolute',
        left: '42%',
        top: '27%',
    },
    A_Speaker: {
        width: wp('6'),
        height: hp('10%')
    },
    A_Speaker_Container_2: {
        position: 'absolute',
        left: '80%',
        top: '27%',
    },
    A_Speaker_2: {
        width: wp('6'),
        height: hp('10%')
    },
    pencilContainer: {
        position: 'absolute',
        left: '11%',
        top: '23%',
    },
    pencil: {
        width: wp('8%'),
        height: hp('25%'),
        resizeMode: 'contain',
    },
    homeContainer: {
        position: 'absolute',
        left: '85%',
        top: '-2%',
    },
    home: {
        width: wp('14%'),
        height: hp('28%')
    },
    nextContainer: {
        position: 'absolute',
        left: '83%',
        top: '40%',
    },
    next: {
        width: wp('14%'),
        height: hp('28%')
    },
    backContainer: {
        position: 'absolute',
        left: '1%',
        top: '-2%',
    },
    back: {
        width: wp('14%'),
        height: hp('28%')
    },
    prevContainer: {
        position: 'absolute',
        left: '2%',
        top: '40%',
    },
    prev: {
        width: wp('14%'),
        height: hp('28%')
    }
})

export default withNavigation(PageW);