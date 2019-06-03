import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, TouchableOpacity} from "react-native";

import Video from "react-native-video";
import ProgressBar from "react-native-progress/Bar";
import { withNavigation } from 'react-navigation'; 
import Icon from "react-native-vector-icons/FontAwesome";

import Story6_FL from '../flalokVideos/Story6_FL.mp4';
import Story6_EN from '../flalokVideos/Story6_EN.mp4';
import Back_icon from '../../images/Back_icon.png';
import Home_icon from '../../images/Home_icon.png';

import {globalStyleSheet as styles} from '../../globalStyleSheet/globalStyleSheet.js';

function secondsToTime(time) {
    return ~~(time / 60) + ":" + (time % 60 < 10 ? "0" : "") + time % 60;
}

let toggleProgress = 0;

class Story6Screen extends Component {
    
    constructor () {
        super();
        this.state = {
            changeVideo: false,
            videoFile: Story6_FL,
    
            controlHide: -100,
    
            progressHeight: 48,
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

    handleMainButtonTouch = () => {
        if (this.state.progress >= 1) {
            this.player.seek(0);
        }

        this.setState(state => {
        return {
            paused: !state.paused,
        };
        });
    };

    handleProgressPress = e => {
        const position = e.nativeEvent.locationX;
        const progress = (position / 250) * this.state.duration;
        const isPlaying = !this.state.paused;
        
        this.player.seek(progress);
    };

    handleProgress = progress => {
        this.setState({
            progress: progress.currentTime / this.state.duration,
        });
    };

    handleEnd = () => {
        this.setState({ paused: true });
    };

    handleLoad = meta => {
        this.setState({
        duration: meta.duration,
        });
    };

    handleLoadStart = () => {
        this.setState({
            progress: toggleProgress,
        });
    };


    changeSubtitle = () => {
        
    }

    goBack = () => {
        this.props.navigation.navigate('flalok');
    }
    

    render() {

        return (
            <View style={videoStyle.container}>
                <TouchableWithoutFeedback onPress={() => {
                    this.setState({
                        controlHide: this.state.controlHide == 0 ? -100 : 0,
                    })
                }}>
                    <Video
                        paused={this.state.paused}
                        source={this.state.videoFile}
                        
                        style={{ width: "100%", height: '100%' }}
                        resizeMode="contain"
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

                <View style={{backgroundColor: "rgba(0, 0, 0, 0.5)",
                    height: 45,
                    left: 0,
                    bottom: this.state.controlHide,
                    right: 0,
                    position: "absolute",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-around",
                    paddingHorizontal: 10,}}>

                <TouchableWithoutFeedback onPress={this.handleMainButtonTouch}>
                    <Icon name={!this.state.paused ? "pause" : "play"} size={30} color="#FFF" />
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={this.handleProgressPress}>
                    <View>
                        <ProgressBar
                        progress={this.state.progress}
                        color="#FFF"
                        unfilledColor="rgba(255,255,255,.5)"
                        borderColor="#FFF"
                        width={250}
                        height={20}
                        />
                    </View>
                </TouchableWithoutFeedback>

                    <Text style={videoStyle.duration}>
                        {secondsToTime(Math.floor(this.state.progress * this.state.duration))}
                    </Text>
                </View>

                <View style={{position: 'absolute', top: this.state.controlHide, left: 0}}>
                    <TouchableOpacity onPress={this.goBack}>
                        <Image
                            source={Back_icon}
                            style={styles.back}
                        ></Image>
                    </TouchableOpacity>
                </View>

                <View style={{position: 'absolute', top: this.state.controlHide, left: '85%'}}>
                    <TouchableOpacity onPress={() => {
                        //toggleProgress = this.state.progress;
                        this.setState({
                            videoFile: this.state.videoFile == Story6_FL ? Story6_EN : Story6_FL,
                        });

                        this.handleProgressPress;
                    }}>
                        <Image
                            source={Home_icon}
                            style={styles.home}
                        ></Image>
                    </TouchableOpacity>
                </View>
            </View>
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
    controls: {
        
    },
    mainButton: {
        marginRight: 15,
    },
    duration: {
        color: "#FFF",
        marginLeft: 15,
    },
});

export default withNavigation(Story6Screen);