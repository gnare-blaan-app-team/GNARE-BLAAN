import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ImageBackground, Button, BackHandler, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import Sound from 'react-native-sound';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

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
        this.letter_play_a.play();
    }

    playAsound_2 = () => {
        this.letter_play_a.stop(() => {
            this.mute.play();
        });
        this.wordplay_a.play();
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
    
    gotoMainMenu = () => {
        this.props.navigation.navigate('mainMenu');
    }

    gotoNextPage = () => {
        this.props.navigation.navigate('pageB');
    }

    render() {
        return (
            <ImageBackground style={styles.image}
                source={require('../images/BG.jpg')}
            >
                <View style={styles.black}>
                </View>
                <Image
                    style={styles.main}
                    source={require('./lettersImage/A(1).png')}
                ></Image>
                <View style={styles.sentenceIconContainer}>
                    <TouchableOpacity onPress={this.gotoSentenceA}>
                        <Image
                            source={require('./lettersImage/Letters_Info_Icon.png')}
                            style={styles.sentenceIcon}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.A_Speaker_Container}>
                    <TouchableOpacity onPress={this.playAsound}>
                        <Image
                            source={require('./lettersImage/Speaker_icon.png')}
                            style={styles.A_Speaker}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.A_Speaker_Container_2}>
                    <TouchableOpacity onPress={this.playAsound_2}>
                        <Image
                            source={require('./lettersImage/Speaker_icon.png')}
                            style={styles.A_Speaker_2}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.pencilContainer}>
                    <TouchableOpacity onPress={this.gotoTracingA}>
                        <Image
                        source={require('./lettersImage/Pencil_icon.png')}
                            style={styles.pencil}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.homeContainer}>
                    <TouchableOpacity onPress={this.gotoMainMenu}>
                        <Image
                            source={require('./lettersImage/Home_icon.png')}
                            style={styles.home}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.nextContainer}>
                    <TouchableOpacity onPress={this.gotoNextPage}>
                        <Image
                            source={require('./lettersImage/Next_Icon.png')}
                            style={styles.next}
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
    black: {
        top: '24%',
        left: '15%',
        width: wp('35%'),
        height: hp('61%'),
        backgroundColor: 'black',
        opacity: 0.2,
    },
    main: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    sentenceIconContainer: {
        position: 'absolute',
        left: '85%',
        top: '80%',
    },
    sentenceIcon: {
        width: wp('9%'),
        height: hp('16%')
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
        height: hp('25%')
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
        left: '85%',
        top: '40%',
    },
    next: {
        width: wp('9'),
        height: hp('16%')
    }
})

export default withNavigation(PageA);