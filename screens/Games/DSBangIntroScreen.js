import React, { Component } from "react";
import { StyleSheet, AsyncStorage, View, Image, ImageBackground, TouchableWithoutFeedback, TouchableOpacity} from "react-native";

import Video from "react-native-video";
import DSBang_Intro from '../IntroVideos/DSBang_Intro.mp4';
import { globalStyleSheet as styles } from '../globalStyleSheet/globalStyleSheet.js';
import { withNavigation } from 'react-navigation'; 
import { sound } from '../HomePage';
import Skip_icon from '../images/skip.png';

const RandomKey = '@MyApp:RandomKey';
const Stage2 = '@MyApp:Stage2';

class DSBangIntroScreen extends Component {
    
    constructor () {
        super();
        this.state = {

            opacityVideo: 1,
            paused: false,
            progress: 0,
            duration: 0,
            muted: false,
            volume: 1,
        };
    }

    static navigationOptions = {
        header:null,
    }

    componentDidMount(){
        try {
            sound.setVolume(0);
            sound.play();
        } catch(error) {
            
        }
    }

    handleEnd = () => {
        try {
            sound.setVolume(0.2);
            sound.play();
        } catch(error) {
            
        }
        this.setState({paused: true, volume: 0, muted: true});
        this.props.navigation.push('gameMenu',{showDadseBang:'show'});
    }

    gotoBangScreen = () => {
        try {
            sound.setVolume(0.2);
            sound.play();
        } catch(error) {
            
        }
        this.setState({paused: true, volume: 0, muted: true});
        this.props.navigation.push('gameMenu', { showDadseBang: 'show' });
    }

    render() {

        return (
            <ImageBackground style={videoStyle.container}>
                <View style={{position: 'absolute', width: '100%', height: '100%',}}>
                    <TouchableWithoutFeedback onPress={this.hideControl}>
                        <Video
                            paused={this.state.paused}
                            source={DSBang_Intro}
                            
                            style={{ width: "100%", height: '100%' }}
                            resizeMode="stretch"
                            volume={this.state.volume}
                            muted={this.state.muted}
                            onLoad={this.handleLoad}
                            onProgress={this.handleProgress}
                            onEnd={this.handleEnd}
                            onLoadStart={this.handleLoadStart}
                            ref={ref => {
                            this.player = ref;
                            }}
                        />
                    </TouchableWithoutFeedback>
                </View>

                <View style={styles.homeContainer}>
                    <TouchableOpacity onPress={this.gotoBangScreen}>
                        <Image source={Skip_icon} style={styles.home} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
    }

const videoStyle = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
    },

    duration: {
        color: "#FFF",
        marginLeft: 15,
    },
});

export default withNavigation(DSBangIntroScreen);