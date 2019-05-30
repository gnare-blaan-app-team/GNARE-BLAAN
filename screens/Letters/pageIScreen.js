import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ImageBackground, TouchableHighlight,BackHandler, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import Sound from 'react-native-sound';

class PageI extends Component {
    static navigationOptions = {
        header: null,
    }

    componentDidMount() {
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
        this.letter_play_i.play();
    }

    playAsound_2 = () => {
        this.letter_play_i.stop(() => {
            this.mute.play();
        });
        this.wordplay_i.play();
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

    render() {
        return (
            <ImageBackground style={styles.image}
                source={require('../images/BG.jpg')}
            >
                <View style={styles.black}>
                </View>
                <Image
                    style={styles.main}
                    source={require('./lettersImage/I_(1).png')}
                ></Image>
                <View style={styles.sentenceIconContainer}>
                    <TouchableOpacity onPress={this.gotoSentenceI}>
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
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    black: {
        top: '24%',
        left: '15%',
        width: '35%',
        height: '61%',
        backgroundColor: 'black',
        opacity: 0.2,
    },
    pencil: {
        width: '30%',
        height: '6%',
        bottom: '22%',
        left: '51%'
    },
    main: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    sentenceIconContainer:{
        left:'85%',
        top:'18%'
    },
    sentenceIcon:{
        width:'8%',
        height:'52%'
    },
     A_Speaker_Container: {
        position: 'absolute',
        left: '42%',
        top: '27%',
    },
    A_Speaker: {
        height: 35,
        width: 35
    },
    A_Speaker_Container_2: {
        position: 'absolute',
        left: '80%',
        top: '27%',
    },
    A_Speaker_2: {
        height: 35,
        width: 35
    }
})

export default withNavigation(PageI);