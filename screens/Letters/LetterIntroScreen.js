import Letter_Intro from '../IntroVideos/Letter_Intro.mp4';
import Number_Intro from '../IntroVideos/Number_Intro.mp4';

import React, { Component } from 'react';
import Video from 'react-native-video';
import { Image, View, TouchableOpacity , ImageBackground } from 'react-native';
import { withNavigation } from 'react-navigation';

import Skip_icon from '../images/skip.png';
import Replay_icon from '../images/replay.png';

import {globalStyleSheet as styles} from '../globalStyleSheet/globalStyleSheet.js';

class LetterIntroScreen extends Component {
    static navigationOptions = {
        header: null,
    }

    constructor() {
        super();
        this.state = {
            paused: false,
            source: Letter_Intro,
            progress: 0,
            volume: 1,
            duration: 0,
            muted: false,
        }
    }

    handleProgress = progress => {
        this.setState({
            progress: progress.currentTime / this.state.duration,
        });
    };

    handleEnd = () => {
        this.setState({paused: true, volume: 0, muted: true});
        this.props.navigation.navigate('letters');
    };

    handleLoad = meta => {
        this.setState({
            duration: meta.duration,
        });
    };

    gotoLetterScreen = () => {
        this.setState({paused: true, volume: 0, muted: true});
        this.props.navigation.navigate('letters');
    }

    replayVideo = () => {
        this.setState({source: Number_Intro});
        setTimeout(()=>{
            this.setState({source: Letter_Intro});
        }, 200);
    }

    render() {
        return (
            <ImageBackground style={styles.image}>
                <View style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'black'}}>
                    <Video
                            paused={false}
                            source={this.state.source}
                            style={{ width: "100%", height: '100%' }}
                            resizeMode="stretch"
                            volume={this.state.volume}
                            muted={this.state.muted}
                            onLoad={this.handleLoad}
                            onProgress={this.handleProgress}
                            onEnd={this.handleEnd}
                            ref={ref => {
                                this.player = ref;
                            }}
                        />
                </View>

                <View style={[styles.sentenceIconContainer, {top: '80%', left: '88%'}]}>
                    <TouchableOpacity onPress={this.replayVideo}>
                        <Image source={Replay_icon} style={styles.home} />
                    </TouchableOpacity>
                </View>

                <View style={styles.homeContainer}>
                    <TouchableOpacity onPress={this.gotoLetterScreen}>
                        <Image source={Skip_icon} style={styles.home} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

export default withNavigation(LetterIntroScreen);