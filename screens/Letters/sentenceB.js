import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ImageBackground, TouchableOpacity, BackHandler } from 'react-native';
import { withNavigation } from 'react-navigation';
import Sound from 'react-native-sound';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


Sound.setCategory('Playback');

class SentenceB extends Component {
    static navigationOptions = {
        header: null,
    }

    componentDidMount() {
        this.forceUpdate();
        this.letter_sentence_b = new Sound('sentence_letter_b.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
                return;
            }
            BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        });
    }

    playAsound_2 = () => {
        this.letter_sentence_b.play();
    }

    handleBackPress = () => {
        this.letter_sentence_b.pause();
    }

    goBack = () => {
        this.letter_sentence_b.pause();
        const { goBack } = this.props.navigation;
        goBack();
    }

    render() {
        return (
            <ImageBackground style={styles.image}
                source={require('../images/sentenceB.png')}
            >
                <View style={styles.A_Speaker_Container_2}>
                    <TouchableOpacity onPress={this.playAsound_2}>
                        <Image
                            source={require('../images/Speaker_icon.png')}
                            style={styles.A_Speaker_2}
                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.backContainer}>
                    <TouchableOpacity onPress={this.goBack}>
                        <Image
                            source={require('../images/Back_icon.png')}
                            style={styles.back}
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
    main: {
        position: 'absolute',
        width: wp('100%'),
        height: hp('100%'),
    },
    A_Speaker_Container_2: {
        position: 'absolute',
        left: '80%',
        top: '27%',
    },
    A_Speaker_2: {
        width: wp('6%'),
        height: hp('11%')
    },
    backContainer: {
        position: 'absolute',
        left: '1%',
        top: '-2%',
    },
    back: {
        width: wp('14%'),
        height: hp('28%')
    }
})

export default withNavigation(SentenceB);