import Number_Intro from '../IntroVideos/Number_Intro.mp4';
import React, { Component } from 'react';
import Video from 'react-native-video';
import { Text, View, TouchableOpacity , ImageBackground } from 'react-native';
import { withNavigation } from 'react-navigation';

import {globalStyleSheet as styles} from '../globalStyleSheet/globalStyleSheet.js';

class NumberIntroScreen extends Component {
    static navigationOptions = {
        header: null,
    }

    constructor() {
        super();
        this.state = {
            paused: false,
            volume: 1,
            muted: false,
            progress: 0,
            duration: 0,
        }
    }

    handleProgress = progress => {
        this.setState({
            progress: progress.currentTime / this.state.duration,
        });
    };

    handleEnd = () => {
        this.setState({paused: true, volume: 0, muted: true});
        this.props.navigation.navigate('numbers');
    };

    handleLoad = meta => {
        this.setState({
            duration: meta.duration,
        });
    };

    gotoNumberScreen = () => {
        this.setState({paused: true, volume: 0, muted: true});
        this.props.navigation.navigate('numbers');
    }

    render() {
        return (
            <ImageBackground style={styles.image}>
                <View style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'black'}}>
                    <Video
                            paused={false}
                            source={Number_Intro}
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

                <View style={{position: 'absolute', top: '5%', left: '2%', width: '15%', height: '10%',
                             justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity onPress={this.gotoNumberScreen}>
                        <Text style={[styles.skip, 
                            {borderWidth: 1, padding: 5, borderColor: 'white', borderRadius: 5}]}>
                                 Skip video
                        </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

export default withNavigation(NumberIntroScreen);